
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/header/Header";

const Layout = () => {
  return (
    <div
      id="layout"
      className="layout relative flex flex-col gap-y-[50px] overflow-hidden"
    >
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
