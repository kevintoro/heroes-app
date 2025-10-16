import { Link, Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      <ul className="flex gap-2 flex-col">
        <Link to="/">Home</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/search">Search</Link>
        <Link to="/admin">Admin</Link>
      </ul>
      <section className="mt-10">
        <Outlet />
      </section>
    </div>
  );
};
