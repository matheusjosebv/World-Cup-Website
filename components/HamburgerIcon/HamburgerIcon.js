import classNames from "classnames";
import css from "./HamburgerIcon.module.scss";

const HamburgerIcon = ({ className }) => {
  return (
    <div className={classNames(css.root, className)}>
      <label className={css.wrapper} for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default HamburgerIcon;
