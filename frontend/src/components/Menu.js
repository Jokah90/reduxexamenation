import React, { useState, useEffect } from "react";
import styles from "../styles/Menu.module.css";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "../components/Nav.js";
import { connect } from "react-redux";
import { addCoffee } from '../redux/action';
import Cart from './Cart.js';

const Menu = (props) => {
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

  function handleClick(element) {
    props.action(element)
  }

  return (
    <section className={styles.menu}>
      <Header />
      <header className={styles.headerContainer}>
      
        <Nav />
        <Cart />
      </header>

      <h1>Meny</h1>
      <section className={styles.orders}>
        {data.map((element, index) => {
          //mapping saved API in data and render it with the argument with title from json
          return (
            <section>
              <button onClick={() => handleClick(element)}>+</button>
              <h3>{element.title}</h3>
              <p>{element.desc}</p>
              <p>{element.price}kr</p>
            </section>
          )

        })}
      </section>
      <Footer />
    </section>
  );
};

//plocka ut från redux
function mapStateToProps(state) {

  console.log('PRODEV', state)
  return {}

}
//skickar ny info till redux 
function mapDispatchToProps(dispatch) {

  return {
    action: (element) => dispatch(addCoffee(element))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
