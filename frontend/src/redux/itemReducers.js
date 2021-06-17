// import { bindActionCreators } from "redux";
import { DECREASE, INCREASE, CLEAR, REMOVE, GET_TOTAL, ADD_ITEM } from "./action";


const itemReducer = (state, action) => {

  if (action.type === ADD_ITEM) {
    let tempCart = [...state.cart];
    let itemIndex = tempCart.findIndex(
      (item) => item.id === action.payload.id
    );
    if (itemIndex >= 0) {
      let existingItem = tempCart[itemIndex];
      existingItem.count = existingItem.count + 1;

    } else {
      tempCart.push({ ...action.payload, count: 1 });

      return {
        ...state,
        cart: tempCart,
      }

    }
    return {
      ...state,
    };
  }


  // Rensar hela varukorgen
  if (action.type === CLEAR) {
    return { ...state, cart: [] }
  }

  // Sänker antalet av artikel
  if (action.type === DECREASE) {
    let tempCart = [...state.cart]

    // OM amount är lika med 1
    if (action.payload.count === 1) {

      // Går över arrayen, om ID inte matchar - returnera inte i den nya arrayen (ta bort från varukorg)
      tempCart = state.cart.filter(menuItem => menuItem.id !== action.payload.id)
    } else {

      // Iterera över alla menuItems
      tempCart = state.cart.map((menuItem) => {

        // OM ID matchar - minska amount med 1 i den nya arrayen
        if (menuItem.id === action.payload.id) {
          menuItem = ({ ...menuItem, count: menuItem.count - 1 })
        }

        // ANNARS returnera menuItem
        return menuItem
      })
    }
    return { ...state, cart: tempCart }
  }



  // Höjer antalet av artikel
  if (action.type === INCREASE) {

    // Iterera över alla menuItems
    let tempCart = state.cart.map(menuItem => {

      // OM ID matchar - öka amount med 1 i den nya arrayen
      if (menuItem.id === action.payload.id) {
        menuItem = ({ ...menuItem, count: menuItem.count + 1 })
      }

      // ANNARS returnera menuItem
      return menuItem
    })
    return { ...state, cart: tempCart }
  }


  // Tar bort artikel ur varukorg
  if (action.type === REMOVE) {

    // Går över arrayen, om ID inte matchar - returnera inte i den nya arrayen
    return { ...state, cart: state.cart.filter(menuItem => menuItem.id !== action.payload.id) }
  }

  // Total
  if (action.type === GET_TOTAL) {

    // Tar ur två variabler från objektet som returneras från reduce-funktionen
    let { total, count, } = state.cart.reduce(
      (totalPrice, menuItem) => {

        // Destructor för att hämta price och amount
        const { price, count } = menuItem;

        // Multiplicera priset med antal varor
        const itemTotal = price * count

        totalPrice.total += itemTotal

        return totalPrice
      },
      {
        total: 0,
      })

    return { ...state, total, count }
  }
  return state;
}



export default itemReducer;
