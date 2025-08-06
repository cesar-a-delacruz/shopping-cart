import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>
        Discover handpicked treasures, unbeatable deals, and effortless
        shopping. <br /> All in one place.
      </h1>
      <a href="/shop">Explore Shop</a>
    </div>
  );
}

export default Home;
