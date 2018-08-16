const initialState = {
    singleProducts: {},
    fetching: false,
    fetched: false,
    error: null
}
export default function singleProducts(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_SINGLEPRODUCT": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_SINGLEPRODUCT_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_SINGLEPRODUCT_FULFILLED": {
            const singleProducts = [];
            singleProducts[action.payload.sku] = action.payload;

            const newSingleProducts = JSON.stringify(Object.assign(state.singleProducts, singleProducts));

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                singleProducts: JSON.parse(newSingleProducts)
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}