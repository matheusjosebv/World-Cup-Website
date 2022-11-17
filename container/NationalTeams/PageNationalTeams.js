import Card from "../../components/Card/Card";
import css from "./PageNationalTeams.module.scss";
import data from "../../data/ChampionsNationalTeams.json";
import classNames from "classnames";

const PageNationalTeams = () => {
  return (
    <div className={classNames(css.root)}>
      <div className={css.cards}>
        {data.map((d, i) => {
          return (
            <div key={i}>
              <Card
                className={classNames(css.card, css[d.country.toLowerCase().replace("á", "a")])}
                name={d.country}
                icon={d.img}
                titles={d.titles}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageNationalTeams;
