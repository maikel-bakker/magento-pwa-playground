import React from "react";
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../actions/singleProductActions';
import { postCart } from '../actions/cartActions';
import Loader from './Loader';
import styles from './Product.scss';

//http://m2.opensource.3.local04.xpdev.nl/graphql

@connect((store) => {
    return {
        singleProducts: store.singleProducts.singleProducts,
        quoteId: store.cart.quoteId
    }
})

class Product extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchSingleProduct(this.props.match.params.sku));
    }

    handleClick() {
        const product = this.props.singleProducts[this.props.match.params.sku] ? this.props.singleProducts[this.props.match.params.sku] : this.props.location.state.dataFromList;
        this.props.dispatch(postCart(product, this.props.quoteId));
    }

    render() {
        const catalogMediaUrl = 'http://m2angular.nl.sandbox20.xpdev.nl/pub/media/catalog/product';
        if (this.props.singleProducts[this.props.match.params.sku]) {
            const product = this.props.singleProducts[this.props.match.params.sku];
            return (
                <div>
                    <h1>{product.name}</h1>
                    <div>{product.sku}</div>
                    <div>
                        {product.media_gallery_entries.map(image => {
                            return <img key={image.id} className={styles['product-gallery__image']} src={catalogMediaUrl + image.file} alt={product.name} />
                        })}
                        
                    </div>
                    <div>{product.price}</div>
                    <button onClick={this.handleClick.bind(this)}>Add to Cart</button>
                </div>
                
            )
        } else if (this.props.location.state.dataFromList) {
            const product = this.props.location.state.dataFromList;
            return (
                <div>
                    <h1>{product.name}</h1>
                    <div>{product.sku}</div>
                    <div>
                        <img className={styles['product-gallery__image']} src={catalogMediaUrl + product.thumbnail} alt={product.name} />
                    </div>
                    <div>{product.price}</div>
                    <button onClick={this.handleClick.bind(this)}>Add to Cart</button>
                </div>
            )
            
        } else {
            return (
                <Loader/>
            )
        }
        
    }
}

export default Product;