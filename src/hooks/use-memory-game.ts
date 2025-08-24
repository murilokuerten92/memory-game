import { EMOJIS, PAIR_COUNTS } from "@/constants";
import { CardBoard, Difficulty } from "@/types";
import { useEffect, useState } from "react"
import { useTimer } from "./use-timer";

const createShuffledCards = (difficulty: Difficulty) => {
    const pairs = PAIR_COUNTS[difficulty];

    const gameEmojis = EMOJIS.slice(0, pairs)

    return [...gameEmojis, ...gameEmojis]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({
            id: index,
            emoji,
            isFlipped: false,
            isMatched: false,
        }));
}

export const checkGameCompletion = (cards: CardBoard[]) => {
    return cards.every(card => card.isMatched)
}

export const useMemomyGame = (difficulty: Difficulty) => {
    const [cards, setCards] = useState<CardBoard[]>([])
    const [flippedCards, setFlippedCards] = useState<CardBoard[]>([])
    const [cardMoves, setCardMoves] = useState(0)
    const [gameStarted, setGameStarted] = useState(false)
    const [gameCompleted, setGameCompleted] = useState(false)

    const { time, resetTime } = useTimer(gameStarted && !gameCompleted)

    const initiliazeGame = () => {
        setCards(createShuffledCards(difficulty))
        setFlippedCards([])
        setCardMoves(0)
        resetTime()
        setGameStarted(false)
        setGameCompleted(false)
    }

    useEffect(initiliazeGame, [resetTime, difficulty])

    const handleCardClick = (selectedId: number) => {

        const clickedCard = cards.find(card => card.id === selectedId)!;

        if (flippedCards.length === 2 && clickedCard.isFlipped || clickedCard.isMatched) {
            return
        }

        setCards(prevCards => (
            prevCards.map(card => card.id === selectedId ? { ...card, isFlipped: true } : card)
        ))

        if (!gameStarted) setGameStarted(true)

        const newFlippedCards = [...flippedCards, clickedCard]

        setFlippedCards(newFlippedCards)

        if (newFlippedCards.length === 2) {
            setCardMoves(prevMoves => prevMoves + 1)
            const [firstCard, secondCard] = newFlippedCards;

            const isMatched = firstCard.emoji === secondCard.emoji

            setTimeout(() => {
                const updatedCards = cards.map(card => {
                    if (card.id === firstCard.id || card.id === secondCard.id) {
                        return {
                            ...card, isMatched, isFlipped: isMatched
                        }
                    }
                    return card
                })
                setCards(updatedCards)
                setFlippedCards([])

                if (isMatched && checkGameCompletion(updatedCards)) {
                    setGameCompleted(true)
                }
            }, 500)
        }
    }



    return {
        cardMoves,
        cards,
        resetGame: initiliazeGame,
        handleCardClick,

        time,
        gameCompleted
    }
}