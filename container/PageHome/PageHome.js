import css from "./PageHome.module.scss";
import MainCard from "../../components/MainCard/MainCard";

import data from "../../data/worldCupHistory.json";

const PageHome = () => {
  return (
    <main className={css.root}>
      <div className={css.hero} />

      <section className={css.history}>
        <h1 className={css.title}>História das Copas</h1>

        {data.map((d, i) => (
          <div key={i}>
            <MainCard
              country={d.country}
              description={d.description}
              img={d.img}
              titles={d.titles}
              year={d.edition}
              reverse={i % 2 == 0 && true}
              gender={d.gender}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default PageHome;
