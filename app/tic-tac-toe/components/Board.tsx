import { calculateWinner } from "@/utils/util";
import Square from "./Square";

export default function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (params: Array<string>) => void;
}) {
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "❌" : "⭕";

    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="w-48 h-48 grid grid-cols-3 grid-rows-3 ">
        {[...Array(9)].map((_, i) => (
          <Square
            key="{i}"
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </>
  );
}
