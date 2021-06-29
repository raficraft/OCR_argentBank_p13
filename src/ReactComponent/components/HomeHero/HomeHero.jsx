import Style from "./HomeHero.module.scss";

const imgHero = { backgroundImage: 'url("  ./img/bank-tree.jpeg  ")' };

const Home_hero = () => (
  <section className={Style.hero} style={imgHero}>
    <section className={Style["hero-content"]}>
      <h2 className="sr-only">Promoted Content</h2>
      <p className={Style["subtitle"]}>No fees.</p>
      <p className={Style["subtitle"]}>No minimum deposit.</p>
      <p className={Style["subtitle"]}>High interest rates.</p>
      <p className={Style["text"]}>
        Open a savings account with Argent Bank today!
      </p>
    </section>
  </section>
);

export default Home_hero;
