export type CardBoard = {
    id: number
    emoji: string
    isFlipped: boolean
    isMatched: boolean
}

export type InfoBoardProps = {
    moves: number;
    time: string;
    onRestart: () => void;
};

export type Difficulty = 'easy' | 'medium' | 'hard'
