import Link from "next/link";
import { useCallback, useState } from "react";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";
import css from "./Navbar.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  return (
    <nav id="navbar" className={css.root}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.hamburgerWrapper} onClick={toggleSidebar}>
            <HamburgerIcon className={css.hamburger} resetIcon={!showSidebar && true} />
          </div>
          <Link href="/">
            <div className={css.logo}>
              <h1>Copa do Mundo</h1>
            </div>
          </Link>
        </div>

        <div className={css.hr} />
      </div>

      <Sidebar show={showSidebar} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
