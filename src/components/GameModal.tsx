import { InfoBoardProps } from "@/types";

export const GameModal = ({ moves, time, onRestart }: InfoBoardProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-w-sm rounded-xl bg-white p-6 text-center sm:p-8">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          🎉Congratulations🎉
        </h2>
        <p className="mb-6 text-lg">
          You completed the game in <br />
          <b>{moves} moves</b> and <b>{time}</b>
        </p>
        <button
          onClick={onRestart}
          className="rounded-lg bg-pink px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
