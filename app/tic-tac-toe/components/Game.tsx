"use client";

import Board from "./Board";
import useTicTacToe from "../hooks/useTicTacToe";

export default function Game() {
  const {
    currentSquares,
    previousSquares,
    xIsNext,
    winner,
    setTurn,
    handlePlay,
  } = useTicTacToe();

  return (
    <div className="grid grid-cols-2">
      <div className="game-board">
        <div className="text-xl">
          {winner
            ? "Winner: " + winner
            : "Next player: " + (xIsNext ? "X" : "O")}
        </div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          isFinish={Boolean(winner)}
        />
      </div>
      <div className="game-info">
        <ol>
          {previousSquares.map((_, move) => (
            <li key={move}>
              <button className="btn" onClick={() => setTurn(move)}>
                {move > 0 ? "Go to move #" + move : "Go to game start"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
