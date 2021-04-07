import React, { useState } from "react";
import bag from "../assets/svg/bag.svg";
import { connect } from "react-redux";
import styles from "../styles/Cart.module.css";

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
                <p>{element.price}</p>
                <p>Total................... kr</p>
                <p>inkl moms + drönarleverans</p>
              </section>
            );
          })}

          <button className={styles.button} type="submit">
            Take my money!
          </button>
        </section>
      </section>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    items: state.cart,
  };
}

export default connect(mapStateToProps)(Cart);
