
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      id="layout"
      className="layout relative flex flex-col gap-y-[50px] overflow-hidden"
    >
      <header></header>
      <main className="container">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
