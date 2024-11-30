import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from './ui/sheet';
import { useForm } from 'react-hook-form';
import {
    creatCollectionSchema,
    creatCollectionSchemaType,
} from '@/schema/createCollection';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
import { CollectionsColor, CollectionsColors } from '@/lib/constants';
import { SelectItem } from './ui/select'; // Adjust if using a custom `SelectItem`
import { cn } from '@/lib/utils';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

function CreateCollectionSheet({ open, onOpenChange }: Props) {
    const form = useForm<creatCollectionSchemaType>({
        defaultValues: {}, // Ensure this matches your schema requirements
        resolver: zodResolver(creatCollectionSchema),
    });

    const onSubmit = (data: any) => {
        console.log('Submitted data:', data);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add new collection</SheetTitle>
                    <SheetDescription>Collections are a way to group your tasks</SheetDescription>
                </SheetHeader>

                {/* Form Component */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter collection name" {...field} />
                                    </FormControl>
                                    <FormDescription>Provide a name for your collection</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Color Field */}
                        <FormField
                            control={form.control}
                            name="color"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Color</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange} // Connect `react-hook-form` to the `Select`
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a color" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.keys(CollectionsColors).map((color) => (
                                                    <SelectItem key={color} value={color} className={cn('w-ful h-8 rounded-md my-1 text-white focus:text-white focus:font-bold focus:ring-2 ring-neutral-600 focus: ring-inset dark: focus:ring-white focus:px-8', CollectionsColors[color as CollectionsColor])}>
                                                        {color}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>Select a color for your collection</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Create Collection
                        </button>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}

export default CreateCollectionSheet;