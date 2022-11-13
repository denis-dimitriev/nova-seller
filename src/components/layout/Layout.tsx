import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      id="layout"
      className="layout relative flex flex-col gap-y-[50px] overflow-hidden"
    >
      { children }
    </div>
  );
};

export default Layout;
