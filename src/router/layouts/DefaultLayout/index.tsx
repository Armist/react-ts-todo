import { Outlet } from "react-router-dom";
import { Aside } from "../../../components/Aside";
import { Header } from "../../../components/Header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Aside />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
