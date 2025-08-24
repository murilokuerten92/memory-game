import { ANIMATIONS, EASY, HARD, MEDIUM } from "@/constants";
import { Difficulty } from "@/types";
import { Brain, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";

const DIFFICULTIES = [
  {
    type: EASY,
    label: "Easy",
    icon: Sparkles,
    color: "from-green-400 to-emerald-500",
  },
  {
    type: MEDIUM,
    label: "Medium",
    icon: Brain,
    color: "from-blue-400 to-indigo-500",
  },
  {
    type: HARD,
    label: "Hard",
    icon: Zap,
    color: "from-purple-400 to-purple-700",
  },
] as const;

type DifficultyProps = {
  onSelect: (difficulty: Difficulty) => void;
};

export const DifficultySelector = ({ onSelect }: DifficultyProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-blue-200 sm:gap-8 sm:p-8">
      <motion.div
        {...ANIMATIONS.fadeInUp}
        className="flex w-full flex-col gap-6"
      >
        <h2 className="mb-2 text-center text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
          Select Difficulty
        </h2>
        <div className="flex w-full flex-col justify-center gap-3 p-4 sm:flex-row sm:gap-4">
          {DIFFICULTIES.map(({ label, icon: Icon, color, type }) => (
            <button
              onClick={() => onSelect(type)}
              className={`${color} h-20 w-full rounded-xl bg-gradient-to-b sm:h-32 sm:w-32`}
            >
              <div className="flex items-center justify-center gap-2 sm:flex-col">
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="text-base font-medium sm:text-lg">
                  {label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
