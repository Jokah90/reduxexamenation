import React, { useState } from "react";
import bag from "../assets/svg/bag.svg";
import { connect, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import { Link } from "react-router-dom";


const Cart = (props) => {
  const [visible, setVisible] = useState(false);
  const toggleCart = () => {
    setVisible(!visible);
  };

  const cart = useSelector((state) => state.cart);


  // function handleClick(element) {
  //   props.action(element);
  // }

  return (
    <section>
      <p className={styles.cartIcon}>{cart.length}</p>
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
          {props.items.map((element) => {
            return (
              <section>
                <h3>{element.title}</h3>
                <p>{element.price}kr</p>
              </section>
            );
          })}

          <p>Total</p>
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

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const dispatch = useDispatch();

//   const { id, amount } = ownProps

//   // Arrowfunction för att inte köras vis onload
//   return {

//       remove: () => dispatch({ type: REMOVE, payload: { id } }),
//       increase: () => dispatch({ type: INCREASE, payload: { id, } }),
//       decrease: () => dispatch({ type: DECREASE, payload: { id, amount } })

//   }
// }

function mapStateToProps(state) {
  const { cart } = state;
  console.log(cart);
  return {
    items: state.cart,
  };
}
export default connect(mapStateToProps)(Cart);
