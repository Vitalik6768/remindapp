import { CollectionsColors } from "@/lib/constants"
import z from "zod"

export const creatCollectionSchema = z.object({
    name:z.string().min(4,{
        message:"collection name must be conatin a least 4 cherectors"
    }),
    color:z.string().refine(color => Object.keys(CollectionsColors).includes(color))
})

export type creatCollectionSchemaType = z.infer<typeof creatCollectionSchema>;