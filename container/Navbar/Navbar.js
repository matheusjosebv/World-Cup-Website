import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";
import css from "./Navbar.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [url, setUrl] = useState("");
  const router = useRouter();

  console.log(url);

  const toggleSidebar = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  useEffect(() => {
    setUrl(document.location.pathname);

    return () => {};
  }, [router.asPath]);

  return (
    <nav id="navbar" className={css.root}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.hamburgerWrapper} onClick={toggleSidebar}>
            <HamburgerIcon className={css.hamburger} resetIcon={!showSidebar && true} />
          </div>
          <Link href={url}>
            <div className={css.logo}>
              <h1>{url === "/" ? "Copa do Mundo" : url.slice(1).toUpperCase()}</h1>
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
