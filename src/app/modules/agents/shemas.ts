import { z } from "zod";

export const agentsInsertSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  instructions: z.string().min(1, { message: "La instrucción es requerida" }),
});
