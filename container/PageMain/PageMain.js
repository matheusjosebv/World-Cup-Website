import css from "./PageMain.module.scss";
import MainCard from "../../components/MainCard/MainCard";

import data from "../../data/worldCupHistory.json";

const PageMain = () => {
  return (
    <main className={css.root}>
      <div className={css.hero} />

      <section className={css.history}>
        <h1 className={css.title}>História das Copas</h1>

        {data.map((d, i) => (
          <div key={i}>
            <MainCard
              title={d.country}
              description={d.description}
              img={d.img}
              titles={d.titles}
              year={d.edition}
              reverse={i % 2 == 0 && true}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default PageMain;
