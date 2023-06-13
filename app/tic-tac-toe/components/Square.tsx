export default function Square({ value, onSquareClick }) {
  console.log(value);
  return (
    <button className="square w-8 h-8 border-2" onClick={onSquareClick}>
      {value}
    </button>
  );
}
