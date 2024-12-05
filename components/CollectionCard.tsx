"use client"

import { Collection } from '@prisma/client'
import React, { useState } from 'react'
import { Collapsible, CollapsibleContent } from './ui/collapsible'
import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { Button } from './ui/button'
import { CollectionsColor, CollectionsColors } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { ArrowDownToLine, ArrowUpToLine, Trash } from 'lucide-react'
import { Progress } from './ui/progress'
import { Separator } from './ui/separator'
import PlusIcon from './icons/PlusIcon'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { deleteCollection } from '@/actions/collection'
import { Toast } from './ui/toast'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
// import { Progress } from '@radix-ui/react-progress'

interface Props {
    collection: Collection
}

export default function CollectionCard({ collection }: Props) {
    const [isOpen, setIsOpen] = useState(true)
    const tasks: string[] = ["task1", "task2"];
    const router = useRouter()

    const removeCollection = async () => {
        try {
            await deleteCollection(collection.id)
            toast({
                title: "Sucsess",
                description: "Collection Deleted"

            })

            router.refresh();


        } catch (error) {
            toast({
                title: "Error",
                description: "Cannot Delete",
                variant: "destructive"

            })

        }
    }


    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
                <Button
                    variant={"ghost"}
                    className={cn("flex w-full justify-between p-6", isOpen && "rounded-b-none", CollectionsColors[collection.color as CollectionsColor])}

                >
                    <span className='text-white font-bold'>{collection.name}</span>
                    {!isOpen && <ArrowDownToLine className='h-6 w-6' />}
                    {isOpen && <ArrowUpToLine className='h-6 w-6' />}


                </Button>

            </CollapsibleTrigger>
            <CollapsibleContent className='flex rounded-b-md flex-col dark:bg-neutral-900 shadow-lg'>
                {tasks.length === 0 &&
                    <div>
                        no tasks

                    </div>
                }

                {tasks.length > 0 &&
                    <>
                        <Progress className='rounded-none' value={45} />

                        <div className='p-4 gap-3 flex flex-col'>
                            {tasks.map(task => (
                                <div>mokerd tasks</div>

                            ))}
                        </div>
                    </>

                }

                <Separator />
                <footer className='h-[40px] px-4 p-[2px] text-xs text-neutral-500 flex justify-between items-center'><p>Created at {collection.createdAt.toLocaleDateString("en-US")}</p>
                    <div>
                        <Button size={"icon"} variant={"ghost"}><PlusIcon /></Button>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button size={"icon"} variant={"ghost"}><Trash /></Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle> are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This Action cannot be undone
                                </AlertDialogDescription>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => removeCollection()}>Procced</AlertDialogAction>

                                </AlertDialogFooter>
                            </AlertDialogContent>

                        </AlertDialog>

                    </div>

                </footer>






            </CollapsibleContent>

        </Collapsible>

    )
}

