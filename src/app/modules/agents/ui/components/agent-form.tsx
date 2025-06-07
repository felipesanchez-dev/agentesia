import { useTRPC } from "@/trpc/client";
import { AgentGetOne } from "../../types";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { agentsInsertSchema } from "../../shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {

} from "@/components/ui/form"

interface AgentFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialValues?: AgentGetOne;
}

export const AgentForm = ({
  onSuccess,
  onCancel,
  initialValues,
}: AgentFormProps) => {
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const createAgent = useMutation(
    trpc.agents.create.mutationOptions({
        onSuccess: () => {},
        onError: () => {},
    }),
  );
  const form = useForm<z.infer<typeof agentsInsertSchema>>({
    resolver: zodResolver(agentsInsertSchema),
    defaultValues: {
        name: initialValues?.name ?? "",
        instructions: initialValues?.instructions ?? "",
    }
  });

  const isEdit = !!initialValues?.id;
  const isPending = createAgent.isPending;

  const onSubmit = (values: z.infer<typeof agentsInsertSchema>) => {
    if (isEdit) {
        console.log("Todo: Update agent");
    } else {
        createAgent.mutate(values)
    }
  };

};
