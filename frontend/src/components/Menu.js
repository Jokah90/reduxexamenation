import React, { useState, useEffect } from "react";
import styles from "../styles/Menu.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "../components/Nav.js";
import Cart from "./Cart.js";
import Article from "./Article";

const Menu = () => {

  //set useState "initial state to an empty array"
  const [data, setData] = useState([]);

  //save backend URL
  const apiUrl = "http://localhost:8080/api/menu";

  //useEffect updates the object
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data.beans));
  }, []);

  return (
    <section className={styles.menu}>
      <Header />
      <header className={styles.headerContainer}>
        <Nav />
        <Cart />
      </header>

      <h1>Meny</h1>
      <section className={styles.orders}>
        {
          data.map((item, index) =>
            //mapping saved API in data and render it with the argument with title from json
            <Article key={index} data={item} />
          )
        }
      </section>
      <Footer />
    </section>
  );
};

//plocka ut från redux
// function mapStateToProps(state) {
//   console.log("PRODEV", state);
//   return {};
// }
// //skickar ny info till redux
// function mapDispatchToProps(dispatch) {
//   return {
//     action: (element) => dispatch(addCoffee(element)),
//   };
// }

export default Menu;
