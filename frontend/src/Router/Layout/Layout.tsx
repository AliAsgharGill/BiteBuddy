import { Outlet } from "react-router-dom";
import Footer from "../../app/components/Footer/Footer";
import { ComplexNavbar } from "../../app/components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <ComplexNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
