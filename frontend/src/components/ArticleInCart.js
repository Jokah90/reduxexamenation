// Importera decrease, increase, remove
import { connect } from "react-redux";
import { DECREASE, INCREASE, REMOVE } from "../redux/action";
// Styles
// import styles from "../styles/Cart.module.css";
// importera ...element och bryt isär
const ArticleInCart = ({ title, price, count, increase, decrease, remove }) => {

    return (
        <>
            <button
                // Nu gör vi en buttnb som kallar på våra dispatches
                onClick={() => increase()}


            >
                +
            </button>

            <button
                onClick={() => {
                    if (count === 1) {
                        return remove()
                    } else {
                        return decrease()
                    }
                }}
            >-</button>

            <button
                onClick={() => remove()}
            >Ta bort</button>
            <h3>{title}</h3>
            <h3>{price}</h3>
            <p>{count}</p>
        </>
    );
}

const mapDispatchToProps = (dispatch, saker) => {
    const { id, count } = saker

    return {
        decrease: () => dispatch({ type: DECREASE, payload: { id } }),
        increase: () => dispatch({ type: INCREASE, payload: { id, count } }),
        remove: () => dispatch({ type: REMOVE, payload: { id } })
    }
}

const mapStateToProps = (state) => {
    const { cart } = state
    return {
        cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleInCart)