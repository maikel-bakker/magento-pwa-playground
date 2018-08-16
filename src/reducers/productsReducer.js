const initialState = {
    products: {},
    fetching: false,
    fetched: false,
    error: null
}
export default function products(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_PRODUCTS": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_PRODUCTS_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_PRODUCTS_FULFILLED": {
            const products = {};
            products[action.categoryId] = action.payload;

            var newProducts = Object.assign(state.products, products);
            newProducts = JSON.stringify(newProducts);
            
            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                products: JSON.parse(newProducts)
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}