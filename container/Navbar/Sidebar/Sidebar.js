import classNames from "classnames";
import Link from "next/link";
import css from "./Sidebar.module.scss";

const Sidebar = ({ show, toggleMenu }) => {
  return (
    <nav className={classNames(css.root, { [css.show]: show })}>
      <ul className={css.routes}>
        <div onClick={toggleMenu}>
          <Link href="/">
            <li className={css.route}>Home</li>
          </Link>
        </div>

        <div onClick={toggleMenu}>
          <Link href="/selecoes">
            <li className={css.route}>Seleções</li>
          </Link>
        </div>

        <div onClick={toggleMenu}>
          <Link href="/statistics">
            <li className={css.route}>Estatísticas</li>
          </Link>
        </div>

        <div onClick={toggleMenu}>
          <Link href="/about">
            <li className={css.route}>Sobre</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Sidebar;
