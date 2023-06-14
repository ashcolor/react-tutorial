"use client";

import Game from "./components/Game";

export default function Page() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">
          Reactチュートリアル:
        </a>
      </div>
      <div className="container mx-auto ">
        <h1 className="text-2xl font-bold my-4">三目並べ</h1>
        <Game></Game>
      </div>
    </>
  );
}
