import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataPagination = ({
    page,
    totalPages,
    onPageChange
}: Props) => {
    const generatePageNumbers = () => {
        const delta = 2;
        const range: number[] = [];
        const left = Math.max(2, page - delta);
        const right = Math.min(totalPages - 1, page + delta);

        range.push(1);

        if (left > 2) {
            range.push(-1);
        }

        for (let i = left; i <= right; i++) {
            if (i !== 1 && i !== totalPages) {
                range.push(i);
            }
        }

        if (right < totalPages - 1) {
            range.push(-1); 
        }

        if (totalPages > 1) {
            range.push(totalPages);
        }

        return range;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border-t bg-gradient-to-r from-background/50 to-background/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="hidden sm:block">
                    Pagina actual <span className="font-medium text-foreground">{page}</span> de{" "}
                    <span className="font-medium text-foreground">{totalPages || 1}</span>
                </div>
                <div className="sm:hidden text-center">
                    Pagina actual {page} de {totalPages || 1}
                </div>
            </div>

            <div className="flex items-center gap-1">
                <Button
                    disabled={page === 1}
                    variant="ghost"
                    size="sm"
                    onClick={() => onPageChange(1)}
                    className="h-8 w-8 p-0 hover:bg-primary/10 disabled:opacity-40"
                    title="First page"
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>

                <Button
                    disabled={page === 1}
                    variant="ghost"
                    size="sm"
                    onClick={() => onPageChange(Math.max(1, page - 1))}
                    className="h-8 w-8 p-0 hover:bg-primary/10 disabled:opacity-40"
                    title="Previous page"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="hidden sm:flex items-center gap-1 mx-2">
                    {pageNumbers.map((pageNum, index) => {
                        if (pageNum === -1) {
                            return (
                                <span key={`dots-${index}`} className="px-2 text-muted-foreground">
                                    ...
                                </span>
                            );
                        }

                        return (
                            <Button
                                key={pageNum}
                                variant={page === pageNum ? "default" : "ghost"}
                                size="sm"
                                onClick={() => onPageChange(pageNum)}
                                className={`h-8 w-8 p-0 transition-all duration-200 ${
                                    page === pageNum
                                        ? "bg-primary text-primary-foreground shadow-sm scale-105"
                                        : "hover:bg-primary/10"
                                }`}
                            >
                                {pageNum}
                            </Button>
                        );
                    })}
                </div>

                <div className="sm:hidden flex items-center gap-2 mx-2">
                    <div className="px-3 py-1 bg-primary/10 rounded-md text-sm font-medium">
                        {page}
                    </div>
                </div>

                <Button
                    disabled={page === totalPages || totalPages === 0}
                    variant="ghost"
                    size="sm"
                    onClick={() => onPageChange(Math.min(totalPages, page + 1))}
                    className="h-8 w-8 p-0 hover:bg-primary/10 disabled:opacity-40"
                    title="Next page"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                    disabled={page === totalPages || totalPages === 0}
                    variant="ghost"
                    size="sm"
                    onClick={() => onPageChange(totalPages)}
                    className="h-8 w-8 p-0 hover:bg-primary/10 disabled:opacity-40"
                    title="Last page"
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};