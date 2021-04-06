import React from 'react'
import bag from '../assets/svg/bag.svg';
import { connect } from "react-redux";




const Cart = (props) => {
    

    return (
        <section>
            <img src={bag} />
        {props.items.map((element) => {


            return (
                <section>
                <h3>{element.title}</h3>
                <p>{element.desc}</p>
                <p>{element.price}</p>
              </section>
            )
        })}
        </section>
    )
}

function mapStateToProps(state) {


    return {
        items: state.cart
    }

}

export default connect(mapStateToProps)(Cart);
