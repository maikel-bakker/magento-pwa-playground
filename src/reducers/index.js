import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import category from './categoryReducer';
import products from './productsReducer';
import singleProducts from './singleProductReducer';
import cart from './cartReducer';

export default combineReducers ({
    cart,
    categories,
    category,
    products,
    singleProducts
})