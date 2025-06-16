import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useMeetingsFilters } from "../../hooks/use-agents-filters";

export const MeetingsSearchFilter = () => {
  const [filters, setFilters] = useMeetingsFilters();
  return (
    <div className="relative flex items-center">
      <div className="relative flex-1">
        <SearchIcon className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar reuniones..."
          className="h-10 bg-background w-[240px] pl-10 pr-10 border-input focus:ring-2 focus:ring-primary/20 transition-all"
          value={filters.search || ""}
          onChange={(e) => setFilters({ search: e.target.value })}
        />
      </div>
    </div>
  );
};
