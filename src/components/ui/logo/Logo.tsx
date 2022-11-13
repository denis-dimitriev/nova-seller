import { Link } from "react-router-dom";

export const Logo = () => {

  const user = false

  return (
    <Link
      to={user ? "/" : "#"}
      className="flex items-center font-[logoFont] text-3xl font-[900] uppercase"
    >
      Nova Seller
    </Link>
  );
};
