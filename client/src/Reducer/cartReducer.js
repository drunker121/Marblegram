const cartReducer = (state, action) => {

    if ( action.type === "ADD_TO_CART" ) {
        let { name , price , image} = action.payload;

        let cartProduct;
        cartProduct = {
          id: name,
          name,
          price,
          image, //.url
        };
    

        return {
          ...state,
          cart: [ ...state.cart, cartProduct ],
        }; 
    } 

  return state;
};

export default cartReducer;