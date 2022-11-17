import classNames from "classnames";
import { useEffect, useState } from "react";
import css from "./HamburgerIcon.module.scss";

const HamburgerIcon = ({ className, resetIcon }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    {
      resetIcon && setClicked(false);
    }

    return () => {};
  }, [resetIcon]);

  return (
    <div className={classNames(css.root, { [css.clicked]: clicked })} onClick={() => setClicked((prev) => !prev)}>
      <div className={css.wrapper}>
        <span className={className} />
        <span className={className} />
        <span className={className} />
      </div>
    </div>
  );
};

export default HamburgerIcon;
