export default function Move({
  move,
  onClick,
}: {
  move: number;
  onClick: () => any;
}) {
  let description;
  if (move > 0) {
    description = "Go to move #" + move;
  } else {
    description = "Go to game start";
  }
  return (
    <li key={move}>
      <button className="btn" onClick={}>
        {description}
      </button>
    </li>
  );
}
