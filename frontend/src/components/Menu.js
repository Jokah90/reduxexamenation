import React, { useState, useEffect } from "react";
import styles from "../styles/Menu.module.css";



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
      <h1>Meny</h1>
      <ul className={styles.orders}>
        {data.map((element) => {
          //mapping saved API in data and render it with the argument with title from json
          return (
            <li>{element.title}</li>
          )

        })}
      </ul>
    </section>
  );
};
export default Menu;
