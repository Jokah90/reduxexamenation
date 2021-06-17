import { ADD_ITEM, GET_TOTAL } from "../redux/action";
import styles from "../styles/Menu.module.css";
import { useDispatch } from "react-redux";
import ArticleInCart from "./ArticleInCart";

// Här är det som renderas för varje item i data
const Article = (props) => {

    const data = props.data
    const payload = { title: data.title, price: data.price, id: data.id }
    const dispatch = useDispatch()
    function handleClick() {
        dispatch({
            type: ADD_ITEM, payload: payload
        })
        dispatch({
            type: GET_TOTAL, price: data.count
        })
    }

    return (
        <section className={styles.menuOrders}>
            <button onClick={() => handleClick()}>+</button>
            <div>
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
            </div>
            <p>{data.price}kr</p>
        </section>
    );
}

export default Article;