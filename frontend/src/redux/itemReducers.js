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
      console.log(itemIndex)
      if (itemIndex >= 0) {
        let existingItem = newCart[itemIndex];
        existingItem.count = existingItem.count + 1;
      } else {
        newCart.push({ ...action.payload, count: 1 });
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
