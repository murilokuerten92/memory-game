import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardBoard } from "@/types";

const CARD_STYLES = {
  base: "backface-hidden absolute flex h-full w-full items-center justify-center rounded-xl border-2",
  back: " border-white/20 bg-pink",
  front:
    "text-2xl xs:text-3xl sm:text-4xl rotate-y-180 border-purple-200 bg-white",
};

type CardProps = {
  onClick: () => void;
} & CardBoard;

export const Card = ({ emoji, isFlipped, isMatched, onClick }: CardProps) => {
  return (
    <div
      className="xs:h-20 xs:w-20 relative h-16 w-16 cursor-pointer sm:h-24 sm:w-24"
      onClick={onClick}
    >
      <div
        className={cn(
          "preserve-3d h-full w-full transition-transform duration-500",
          isFlipped && "rotate-y-180",
        )}
      >
        <div className={cn(CARD_STYLES.base, CARD_STYLES.back)}>
          <Sparkles className="h-6 w-6 animate-pulse text-white sm:h-8 sm:w-8" />
        </div>
        <div
          className={cn(
            CARD_STYLES.base,
            CARD_STYLES.front,
            isMatched && "bg-gray-300",
          )}
        >
          {emoji}
        </div>
      </div>
    </div>
  );
};
