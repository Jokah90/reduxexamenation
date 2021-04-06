import React, { useState, useEffect } from 'react';

  const Menu = () =>  {
    //set useState "initial state to an empty array"
    const [data, setData] = useState([]);
    //save backend URL
    const apiUrl = 'http://localhost:8080/api/menu';
    //useEffect updates the object
    useEffect(() => {
      fetch(apiUrl)
      .then((response) => response.json())
      .then(data => setData(data.beans));
      
    }, [])
  
    return (
        <div>
          <ul>
          {data.map((element) => { //mapping saved API in data and render it with the argument with title frrom json
            return (
            <li>{element.title}</li>
            )
          })}
          </ul>
         
        </div>
        
    )
  
}
export default Menu;


