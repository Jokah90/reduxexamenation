import { DECREASE, INCREASE, CLEAR, REMOVE, GET_TOTAL } from "./action";

let initialState = {
  cart: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COFFEE":
      let newCart = [...state.cart];
      let itemIndex = newCart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(itemIndex);
      if (itemIndex >= 0) {
        let existingItem = newCart[itemIndex];
        existingItem.count = existingItem.count + 1;
      } else {
        newCart.push({ ...action.payload, count: 1 });
      }
      if (action.type === CLEAR) {
        return { ...state, cart: [] };
      }

      if (action.type === DECREASE) {
        let tempCart = [...state.cart];

        // OM amount är lika med 1
        if (action.payload.count === 1) {
          // Går över arrayen, om ID inte matchar - returnera inte i den nya arrayen (ta bort från varukorg)
          tempCart = state.cart.filter((data) => data.id !== action.payload.id);
        } else {
          // Iterera över alla menuItems
          tempCart = state.cart.map((data) => {
            // OM ID matchar - minska amount med 1 i den nya arrayen
            if (data.id === action.payload.id) {
              data = { ...data, count: data.count - 1 };
            }

            // ANNARS returnera menuItem
            return data;
          });
        }
        return { ...state, cart: tempCart };
      }
      // Höjer antalet av artikel
      if (action.type === INCREASE) {
        // Iterera över alla menuItems
        let tempCart = state.cart.map((data) => {
          // OM ID matchar - öka amount med 1 i den nya arrayen
          if (data.id === action.payload.id) {
            data = { ...data, count: data.count + 1 };
          }

          // ANNARS returnera menuItem
          return data;
        });
        return { ...state, cart: tempCart };
      }

      // Tar bort artikel ur varukorg
      if (action.type === REMOVE) {
        // Går över arrayen, om ID inte matchar - returnera inte i den nya arrayen
        return {
          ...state,
          cart: state.cart.filter((data) => data.id !== action.payload.id),
        };
      }

      // Total
      if (action.type === GET_TOTAL) {
        // Tar ur två variabler från objektet som returneras från reduce-funktionen
        let { total, count } = state.cart.reduce(
          (cartTotal, data) => {
            // Destructor för att hämta price och amount
            const { price, count } = data;

            // Multiplicera priset med antal varor
            const itemTotal = price * count;

            cartTotal.total += itemTotal;
            cartTotal.count += count;

            return cartTotal;
          },
          {
            total: 0,
            count: 0,
          }
        );

        // Bara TVÅ decimaler!!
        return { ...state, total, count };
      }

      return {
        ...state,
        cart: newCart,
      };

    default:
      return {
        ...state,
      };
  }
};
export default itemReducer;
