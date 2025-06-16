import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CommandSelect } from "@/components/command-select";
import { AgentAvatar } from "@/modules/agents/ui/components/agent-avatar";
import { Badge } from "@/components/ui/badge";
import { useMeetingsFilters } from "../../hooks/use-agents-filters";
import { BotIcon, VideoIcon } from "lucide-react";

export const AgentIdFilter = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const trpc = useTRPC();
  const [agentSearch, setAgentSearch] = useState("");

  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  );

  return (
    <CommandSelect
      className="h-10 min-w-[200px]"
      placeholder="Filtrar por agente"
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className="flex items-center gap-x-3 p-2 hover:bg-muted/50 rounded-lg transition-colors">
            <AgentAvatar
              name={agent.name}
              size="md"
              className="size-8 ring-2 ring-background shrink-0"
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-x-2">
                <span className="capitalize font-medium text-sm truncate">
                  {agent.name}
                </span>
                <Badge variant="secondary" className="gap-x-1 text-xs shrink-0">
                  <BotIcon className="size-3" />
                  IA
                </Badge>
              </div>
              <div className="flex items-center gap-x-2 text-xs text-muted-foreground">
                <VideoIcon className="size-3" />
                {agent.instructions && (
                  <>
                    <span>•</span>
                    <span className="truncate max-w-[120px]">
                      {agent.instructions}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ),
      }))}
      onSelect={(value) => setFilters({ agentId: value })}
      onSearch={setAgentSearch}
      value={filters.agentId ?? ""}
    />
  );
};
