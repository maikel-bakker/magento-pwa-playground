const initialState = {
    cart: [],
    quoteId: null,
    fetching: false,
    fetched: false,
    error: null
}
export default function cart(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_CART": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_CART_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_CART_FULFILLED": {

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                cart: action.payload
            }
            
            return newState;
        }
        
        case "ADD_CART": {
            return {
                ...state,
                fetching: true
            }
        }

        case "ADD_CART_REJECTED": {
            const newState = {
                ...state,
                fetching: false,
                error: action.payload
            }

            return newState;
        }

        case "ADD_CART_FULFILLED": {
            const newState = {
                ...state,
                cart: [...state.cart, action.payload]
            }
            return newState;
        }

        case "ADD_CART_FULFILLED_OFFLINE": {
            //check if product is already in cart
            var productInCart = false;
            state.cart.forEach(element => {
                if (element.sku == action.payload.sku) {
                    element.qty += action.payload.qty;
                    productInCart = true;
                    return true;
                }
            });

            if (productInCart) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
        }

        case "GET_QUOTE": {
            const newState = {
                ...state,
                fetching: true
            }

            return newState
        }

        case "GET_QUOTE_REJECTED": {
            const newState = {
                ...state,
                fetching: false,
                error: action.payload
            }

            return newState;
        }

        case "GET_QUOTE_FULFILLED": {
            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                quoteId: action.payload
            }

            return newState;
        }
        
        default: {
            return state;
        }
    }
}