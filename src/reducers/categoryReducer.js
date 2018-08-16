const initialState = {
    category: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function category(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case "FETCH_CATEGORY": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_CATEGORY_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_CATEGORY_FULFILLED": {
            const category = [];
            category[action.payload.id] = action.payload;

            const newCategory = JSON.stringify(Object.assign(state.category, category));

            const newState = {
                ...state,
                fetching: false,
                fetched: true,
                category: JSON.parse(newCategory)
            }
            
            return newState;
        }
        default: {
            return state;
        }
    }
}