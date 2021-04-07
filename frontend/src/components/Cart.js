import React, { useState } from "react";
import bag from "../assets/svg/bag.svg";
import { connect } from "react-redux";
import styles from "../styles/Cart.module.css";
import arrowUp from '../assets/svg/arrow-up.svg';
import {useDispatch } from 'react-redux';



const Cart = (props) => {
  
  const [visible, setVisible] = useState(false);
  const toggleCart = () => {
    setVisible(!visible);
  };

  return (
    <section>
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
                <p>{element.desc}</p>
                <p>{element.price}kr</p>
                {/* <button onClick={() => increase()}><img src={arrowUp} alt="Increase button" /></button>
                <button onClick={() => handleClick(element)}>-</button> */}
              </section>
            );
          })}

          <p>total</p>
          <p>inkl moms + drönarleverans</p>
          <button className={styles.button} type="submit">
            Take my money!
          </button>
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
  const { cart } = state
  console.log(cart)
  return {
    items: state.cart,
  };
}
export default connect(mapStateToProps)(Cart);
