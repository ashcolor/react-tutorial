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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col place-items-center">
        <div className="text-xl">
          {winner
            ? "👑勝者: " + winner
            : "次のプレイヤー: " + (xIsNext ? "❌" : "⭕")}
        </div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          isFinish={Boolean(winner)}
        />
      </div>
      <div className="h-full p-4 border">
        <p className="text-xl my-2">履歴</p>
        <ol className="flex flex-col gap-2">
          {previousSquares.map((_, move) => (
            <li key={move}>
              <button className="btn btn-sm" onClick={() => setTurn(move)}>
                {"移動 #" + move}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
