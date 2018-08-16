import React from "react";
import { connect } from 'react-redux';
import { getQuote } from '../actions/cartActions';

@connect((store) => {
    return {
        cart: store.cart.cart,
        quoteId: store.cart.quoteId
    }
})

class CartLink extends React.Component {

    componentDidMount() {
        if (!this.props.quoteId) {
            this.props.dispatch(getQuote());
        }
    }

    render() {
        return (
            <li>
                Cart ({this.props.cart.length})
            </li>
        )
    }
    
}

export default CartLink;