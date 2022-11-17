import classNames from "classnames";
import css from "./Card.module.scss";
import trophy from "../../assets/images/trophy.png";
import Link from "next/link";

const Card = ({ className, name, icon, titles }) => {
  return (
    <Link href={name.toLowerCase()}>
      <div className={classNames(css.root, className)}>
        <div className={css.wrapper}>
          <h1 className={css.name}>{name}</h1>
          <img className={css.icon} src={icon} />
          <div className={css.titles}>
            {titles.map((t) => (
              <div key={t} title={t}>
                <img src={trophy.src} className={css.trophy} alt="trophy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
