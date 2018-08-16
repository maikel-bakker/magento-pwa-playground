import React from "react";
import { Link } from 'react-router-dom';
import styles from './ProductList.scss';

//http://m2.opensource.3.local04.xpdev.nl/graphql

class ProductList extends React.Component {

    render() {
        const self = this;
        const catalogMediaUrl = 'http://m2angular.nl.sandbox20.xpdev.nl/pub/media/catalog/product';

        return (
            
            <ul className={styles['product-list']}>
                {Object.keys(this.props.products).map(function(key) {
                    const product = self.props.products[key];

                    return (
                        <li key={product.sku} className={styles['product-list__item']}>
                        
                            <Link to={{pathname: `/product/${product.sku}`, state: {dataFromList: product}}}>
                                <img className={styles['product-list__item__img']} 
                                    src={catalogMediaUrl + product.thumbnail} alt={product.name} />
                                <div className={styles['product-list__item__content']}>
                                    <div className={styles['product-list__item__name']}>{product.name}</div>
                                    <div className={styles['product-list__item__price']}>{product.price}</div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default ProductList;