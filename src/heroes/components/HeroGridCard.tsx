import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Eye, Gauge, Heart, Shield, Zap } from "lucide-react";

interface Props {
  description: string;
  durability: number;
  firstAppeared: string;
  imageUrl: string;
  intelligence: number;
  isActive: boolean;
  name: string;
  speed: number;
  strength: number;
  universe: string;
}

export const HeroGridCard = ({
  description,
  durability,
  firstAppeared,
  imageUrl,
  intelligence,
  isActive,
  name,
  speed,
  strength,
  universe,
}: Props) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Status indicator */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <Badge
            variant="secondary"
            className="text-xs bg-white/90 text-gray-700"
          >
            {isActive ? "Activo" : "Inactivo"}
          </Badge>
        </div>

        {/* Universe badge */}
        <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
          {universe}
        </Badge>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
        </Button>

        {/* View details button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-gray-600" />
        </Button>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-tight">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
            Hero
          </Badge>
        </div>
        <Badge variant="outline" className="w-fit text-xs">
          Justice League
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">
          The Last Son of Krypton, protector of Earth and symbol of hope for all
          humanity.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-orange-500" />
              <span className="text-xs font-medium">Fuerza</span>
            </div>
            <Progress
              value={strength}
              className="h-2"
              activeColor="bg-orange-500"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Brain className="h-3 w-3 text-blue-500" />
              <span className="text-xs font-medium">Inteligencia</span>
            </div>
            <Progress
              value={intelligence}
              className="h-2"
              activeColor="bg-blue-500"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Gauge className="h-3 w-3 text-green-500" />
              <span className="text-xs font-medium">Velocidad</span>
            </div>
            <Progress
              value={speed}
              className="h-2"
              activeColor="bg-green-500"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-purple-500" />
              <span className="text-xs font-medium">Durabilidad</span>
            </div>
            <Progress
              value={durability}
              className="h-2"
              activeColor="bg-purple-500"
            />
          </div>
        </div>

        {/* Powers */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Powers:</h4>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs">
              Super Strength
            </Badge>
            <Badge variant="outline" className="text-xs">
              Flight
            </Badge>
            <Badge variant="outline" className="text-xs bg-gray-100">
              +4 more
            </Badge>
          </div>
        </div>

        <div className="text-xs text-gray-500 pt-2 border-t">
          First appeared: {firstAppeared}
        </div>
      </CardContent>
    </Card>
  );
};
