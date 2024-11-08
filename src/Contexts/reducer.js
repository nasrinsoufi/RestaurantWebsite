const reducer = (state, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "REMOVE": {
      return {
        ...state,//تمام خصوصیات استست جاری
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    }
    


    case 'GET_TOTALS': {
        let {total, quantity} = state.cart.reduce((cartTotal, cartItem) => {
            const {price} = cartItem; 
            const itemTotal = price ;
            cartTotal.total +=itemTotal;
            return cartTotal;
        }, {
            total: 0,
           
        });

        return {...state, total}
    }
  }
};

export default reducer;
