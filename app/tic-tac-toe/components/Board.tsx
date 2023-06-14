import Square from "./Square";

export default function Board({
  xIsNext,
  squares,
  isFinish,
  onPlay,
}: {
  xIsNext: boolean;
  squares: Array<string>;
  isFinish: boolean;
  onPlay: (params: Array<string>) => void;
}) {
  function handleClick(i: number) {
    if (squares[i] || isFinish) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "❌" : "⭕";

    onPlay(nextSquares);
  }

  return (
    <>
      <div className="w-48 h-48 grid grid-cols-3 grid-rows-3 ">
        {[...Array(9)].map((_, i) => (
          <Square
            key={i}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </>
  );
}
