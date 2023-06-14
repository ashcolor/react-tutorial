export default function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  return (
    <button className="border-2" onClick={onSquareClick}>
      {value}
    </button>
  );
}
