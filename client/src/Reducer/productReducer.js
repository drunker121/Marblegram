const ProductReducer  = (state , action) => {
    if ( action.type === 'API_LOADING'){
       return{
        ...state,
        isLoading: true,
       };
    }
    if ( action.type === "MY_API_DATA")
    {
        return{
            ...state,
            isLoading: false,
            products:action.payload,

        }
    }
    if ( action.type === 'API_ERROR'){
        return{
         ...state,
         isLoading: false,
         isError: true,
        };
     }

     
    // return state;
};

export default ProductReducer;