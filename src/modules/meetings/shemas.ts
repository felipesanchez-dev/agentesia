import { z } from "zod";

export const meetingsInsertSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  agentId: z.string().min(1, { message: "El ID del agente es requerido" }),
});

export const meetingsUpdateSchema = meetingsInsertSchema.extend({
  id: z.string().min(1, { message: "El ID es requerido" }),
});
