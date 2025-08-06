import styles from "./Credit.module.css";

function Credit() {
  return (
    <p className={styles.credit}>
      Homepage image by{" "}
      <a href="https://pixabay.com/users/hutchrock-2563315/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2900303">
        Hannes Edinger
      </a>{" "}
      from{" "}
      <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2900303">
        Pixabay
      </a>
      <br />
      Fake products by{" "}
      <a href="https://www.linkedin.com/in/keikaavousi">
        MohammadReza Keikavousi
      </a>{" "}
      from <a href="https://fakestoreapi.com/">Fake Store API</a>
    </p>
  );
}

export default Credit;
