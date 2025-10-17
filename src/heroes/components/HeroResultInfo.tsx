import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

export const HeroResultInfo = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <p className="text-gray-600">Showing 6 of 16 characters</p>
        <Badge variant="secondary" className="flex items-center gap-1">
          <Filter className="h-3 w-3" />
          Filtered
        </Badge>
      </div>
    </div>
  );
};
