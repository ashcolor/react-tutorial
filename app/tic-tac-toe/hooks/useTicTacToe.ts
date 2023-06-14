import { calculateWinner } from "@/utils/util";
import { useState } from "react";

export default function useTicTacToe() {
  const [previousSquares, setPreviousSquares] = useState([Array(9).fill(null)]);
  const [turn, setTurn] = useState(0);
  const xIsNext = turn % 2 === 0;

  const currentSquares = previousSquares[turn];

  const winner = calculateWinner(currentSquares);

  function handlePlay(nextSquares: Array<string>) {
    const nextHistory = [...previousSquares.slice(0, turn + 1), nextSquares];
    setPreviousSquares(nextHistory);
    setTurn(nextHistory.length - 1);
  }

  return {
    currentSquares,
    previousSquares,
    xIsNext,
    winner,
    setTurn,
    handlePlay,
  };
}
