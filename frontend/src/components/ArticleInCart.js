// Importera decrease, increase, remove
import { connect } from "react-redux";
import { DECREASE, INCREASE, REMOVE } from "../redux/action";
import styles from "../styles/Cart.module.css";

;
// importera ...element och bryt isär
const ArticleInCart = ({ title, price, count, increase, decrease, remove }) => {
  return (
    <section className={styles.myOrders}>
      <article>
        <h3>{title}<span></span></h3>
        <p>{price} kr</p >
      </article>

      <div className={styles.valueChange}>
        <button className={styles.orderBtnOne} onClick={() => increase()}>+</button>
        <p>{count}</p>
        <button className={styles.orderBtnTwo}
          onClick={() => {
            if (count === 1) {
              return remove();
            } else {
              return decrease();
            }
          }}
        >
          -
        </button>
      </div>

    </section>
  );
};

const mapDispatchToProps = (dispatch, saker) => {
  const { id, count } = saker;

  return {
    decrease: () => dispatch({ type: DECREASE, payload: { id } }),
    increase: () => dispatch({ type: INCREASE, payload: { id, count } }),
    remove: () => dispatch({ type: REMOVE, payload: { id } }),
  };
};

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInCart);
