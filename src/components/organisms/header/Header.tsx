import React from "react";
import { JoinUs } from "../../ui";

export const Header = () => {
  return (
    <header className="flex h-[80px] content-center text-white">
      <div className="m-auto flex w-[1220px] content-center justify-between p-2 ">
        <div>Logo</div>
        <div>Navigation</div>
        <JoinUs>Enter</JoinUs>
      </div>
    </header>
  );
};
