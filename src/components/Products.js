import React from "react";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productsActions';
import ProductList from './ProductList';
import Loader from './Loader';

//http://m2.opensource.3.local04.xpdev.nl/graphql

@connect((store) => {
    return {
        products: store.products.products    
    }
})

class Products extends React.Component {
    constructor() {
        super();
        this.imgUrl = 'http://melastic.sandbox20.xpdev.nl/media/';
    }

    componentDidMount() {
        this.props.dispatch(fetchProducts(this.props.categoryId))
    }

    render() {
        console.log(this.props.products);
        if (this.props.products[this.props.categoryId]) {
            return <ProductList products={this.props.products[this.props.categoryId]} imgUrl={this.imgUrl} />
        } else {
            return (
                <Loader/>
            )
        }
        
    }
}

export default Products;