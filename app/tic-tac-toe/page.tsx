"use client";

import Game from "./components/Game";

export default function Page() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">チュートリアル: 三目並べ</h1>
      <p></p>
      <Game></Game>
    </div>
  );
}
