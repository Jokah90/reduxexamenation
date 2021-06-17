import React, { useEffect, useState } from "react";
import bag from "../assets/svg/bag.svg";
import { connect, useDispatch } from "react-redux";
import styles from "../styles/Cart.module.css";
import { Link } from "react-router-dom";
import ArticleInCart from "./ArticleInCart";
import { GET_TOTAL } from "../redux/action";


const Cart = ({ cart = [], price, count, totalPrice }) => {

  const [articlesInCart, setArticlesInCart] = useState(0)
  const [visible, setVisible] = useState(false);

  const toggleCart = () => {
    setVisible(!visible);
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: GET_TOTAL, price: price, count: count })
    ArticlesInCart()
  })

  // Funktion för att räkna ut antal artiklar i korg
  const ArticlesInCart = () => {
    let articles = 0;
    cart.forEach(item => {
      articles = articles + item.count
    })
    setArticlesInCart(articles)
  }


  // Samma som i förra bara att du använder en annan action och istället för payload

  return (
    <section>
      <p className={styles.cartIcon}>{articlesInCart}</p>
      <img
        src={bag}
        alt="cart menu button"
        className={styles.cartBtn}
        onClick={toggleCart}
      />
      <section
        className={visible === true ? styles.showMenuCart : styles.hideMenuCart}
      >
        <section className={styles.dropDownContainer}>
          {cart.map((element) => {
            return <ArticleInCart key={element.id} {...element} />
          })}

          <p>{`Totalt: ${totalPrice} kr`}</p>
          <p>inkl moms + drönarleverans</p>

          <Link to="status">
            <button className={styles.button} type="submit">
              Take my money!
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
};

// Men den här behöver vi
const mapStateToProps = state => {
  const { cart } = state;
  console.log(cart);
  return {
    totalPrice: state.total,
    cart
  };
}
export default connect(mapStateToProps)(Cart);
