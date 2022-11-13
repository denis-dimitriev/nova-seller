import React from "react";
import { Locale } from "../../molecules/locale/Locale";
import { JoinUs } from "../../ui";
import { Logo } from "../../ui/logo/Logo";

export const Header = () => {
  return (
    <header className="flex h-[80px] content-center text-white">
      <div className="m-auto flex w-[1220px] content-center justify-between p-2">
        <Logo />
        <div>Navigation</div>
        <Locale />
        <JoinUs>Enter</JoinUs>
      </div>
    </header>
  );
};
