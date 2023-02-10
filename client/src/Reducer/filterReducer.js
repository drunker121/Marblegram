const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };
        
        case "SET_GRID_VIEW": 
            return {
                ...state,
                grid_view: true,
            }
        
        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view:false,
            }

        case "GET_SORT_VALUE":
            return{
                ...state,
                sortingValue: action.payload,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products , sortingValue } = state;
            let tempSortData = [...filter_products];

            const sortingProducts = (a,b) => {
                if ( sortingValue === "lowest") {
                    return a.price-b.price;
                }
                if ( sortingValue === "highest") {
                    return b.price-a.price;
                }  
            }

            newSortData = tempSortData.sort(sortingProducts)

            return {
                ...state,
                filter_products:newSortData,
            };

        case "UPDATE_FILTER_VALUE":
            const { name , value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name] : value,
                },
            }

        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterData = all_products;

            const {text} = state.filters;

            if (text) {
                tempFilterData = tempFilterData.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }

            return {
                ...state,
                filter_products:tempFilterData,
            };

        default:
            return state;
    }
};

export default filterReducer;