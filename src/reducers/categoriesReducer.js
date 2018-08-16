const initialState = {
    categories: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function categories(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_CATEGORIES": {
            console.log(state);
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_CATEGORIES_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_CATEGORIES_FULFILLED": {

            const newCategories = JSON.stringify(Object.assign(state.categories, action.payload));

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                categories: JSON.parse(newCategories)
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}