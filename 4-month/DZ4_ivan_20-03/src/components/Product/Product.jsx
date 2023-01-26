import styles from "./product.module.css";
import Button from "../Button/Button";

function Product({ product }) {
  const linkHandler = () => {
    window.location.replace(`/path-to-product/${product.id}`);
  };

  const cartHandler = () => {
    alert(
      `В корзину добавлен товар с названием: ${product.title}\nИ id: ${product.id}`
    );
  };
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
          <div className={styles.productButtons}>
            <Button text="Show more" handler={linkHandler} />
            <Button text="Add to cart" handler={cartHandler} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Product;
