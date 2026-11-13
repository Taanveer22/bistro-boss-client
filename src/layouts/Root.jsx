import { Outlet, useLocation } from "react-router";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Root = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location?.pathname === "/login" || location?.pathname === "/signup";

  return (
    <>
      {noHeaderFooter || (
        <header>
          <Header></Header>
        </header>
      )}
      <main>
        <Outlet></Outlet>
      </main>
      {noHeaderFooter || (
        <footer>
          <Footer></Footer>
        </footer>
      )}
    </>
  );
};

export default Root;
