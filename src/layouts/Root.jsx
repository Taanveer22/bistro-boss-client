import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header></Header>
      </header>
      <main className="w-full flex-1">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
