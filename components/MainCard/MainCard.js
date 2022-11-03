import classNames from "classnames";
import css from "./MainCard.module.scss";
import trophy from "../../assets/images/trophy.png";

const MainCard = ({ title, year, description, img, reverse, titles }) => {
  return (
    <div className={classNames(css.root, { [css.reverse]: reverse })}>
      <div className={css.content}>
        <div className={css.textContent}>
          <h1>
            Copa de {year}: {title}
          </h1>
          <p>{description}</p>

          <div className={css.hr} />
        </div>

        <div className={css.trophiesWrapper}>
          <h2>
            {titles.length === 2
              ? "Bicampeão"
              : titles.length === 3
              ? "Tricampeão"
              : titles.length === 4
              ? "Tetracampeão"
              : titles.length === 5
              ? "Pentacampeão"
              : "Campeão"}
          </h2>

          <div className={css.trophies}>
            {titles.map((t) => (
              <div key={t}>
                <img src={trophy.src} className={css.trophy} alt="trophy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <img className={css.cardImg} src={img.src || img} alt="img" />
    </div>
  );
};

export default MainCard;
