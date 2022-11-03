import HamburgerIcon from "../../components/HamburgerIcon/HamburgerIcon";
import css from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={css.root}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.hamburger}>
            <HamburgerIcon />
          </div>
          <div className={css.logo}>
            <h1>Copa do Mundo</h1>
          </div>
        </div>

        <div className={css.hr} />
      </div>
    </nav>
  );
};

export default Navbar;
