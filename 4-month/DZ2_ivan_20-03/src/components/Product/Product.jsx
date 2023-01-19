import styles from "./product.module.css";

function Product({ product }) {
  return (
    <li className={styles.product}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.productText}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <div className={styles.productInfo}>
          <p className={styles.productPrice}>${product.price}</p>
          <a
            className={styles.productButton + " button"}
            href={"path-to-product/" + product.id}
          >
            Show more
          </a>
        </div>
      </div>
    </li>
  );
}

export default Product;
