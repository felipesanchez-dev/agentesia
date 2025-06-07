import {z} from 'zod';

export const agentsInsertSchema = z.object({
    name: z.string().min(1, {message: "El nombre es requerido"}),
    instructions: z.string().min(1, {message: "Las instrucciones son requeridas"}),
})