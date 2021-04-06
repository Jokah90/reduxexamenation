import React from 'react';

class Menu extends React.Component {
  componentDidMount() {
    const apiUrl = 'http://localhost:8080/api/menu';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return (
        <h1>kolla konsolen det existerar ett api, wow :D</h1>
    )
  }
}
export default Menu;
