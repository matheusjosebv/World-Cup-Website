import classNames from "classnames";
import css from "./MainCard.module.scss";
import trophy from "../../assets/images/trophy.png";
import Link from "next/link";

const MainCard = ({ country, year, description, gender, img, reverse, titles }) => {
  return (
    <div className={classNames(css.root, { [css.reverse]: reverse })}>
      <div className={css.content}>
        <div className={css.textContent}>
          <h1>Copa de {year}</h1>
          <p>{description}</p>

          <h2>
            {country}{" "}
            {titles.length === 2
              ? "Bi"
              : titles.length === 3
              ? "Tri"
              : titles.length === 4
              ? "Tetra"
              : titles.length === 5
              ? "Penta"
              : titles.length === 6
              ? "Hexa"
              : null}
            {titles.length === 1 ? "C" : "c"}
            {gender === "male" ? "ampeão" : "ampeã"}
          </h2>

          <Link href={country.toLowerCase()}>
            <div className={css.learnMore}>
              <h4>Leia Mais</h4>
              <div className={css.underline} />
            </div>
          </Link>
          <div className={css.hr} />
        </div>

        <div className={css.trophiesWrapper}>
          <h3>Títulos:</h3>

          <div className={css.trophies}>
            {titles.map((t) => (
              <div key={t} title={t}>
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
