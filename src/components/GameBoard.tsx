import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { Card } from "./Card";
import { motion } from "motion/react";
import { CardBoard, Difficulty } from "@/types";
import { cn } from "@/lib/utils";

type GameBoardProps = {
  cards: CardBoard[];
  onCardClick: (selectedId: number) => void;
  difficulty: Difficulty;
};

const GRID_CONFIG = {
  [EASY]: "",
  [MEDIUM]: "sm:grid-cols-5",
  [HARD]: "sm:grid-cols-5 md:grid-cols-6",
};

export const GameBoard = ({
  cards,
  onCardClick,
  difficulty,
}: GameBoardProps) => {
  return (
    <motion.div
      {...ANIMATIONS.fadeInUp}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "grid grid-cols-4",
        GRID_CONFIG[difficulty],
        "gap-2 rounded-xl bg-blue-100 p-2 sm:gap-4 sm:p-4",
      )}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={() => onCardClick(card.id)} />
      ))}
    </motion.div>
  );
};
