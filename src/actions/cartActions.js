export function postCart(product, quoteId) {
    return (dispatch) => {
        const productObj = {
            "cartItem": {
                "sku"       : product.sku,
                "qty"       : 1,
                "quote_id"  : quoteId
            }
        }

        dispatch(postCartOffline(product, quoteId));

        dispatch({
            type: 'ADD_CART'
        });
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/guest-carts/' + quoteId + '/items', {
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(productObj)
        })
        .then(function (res) {
            var data = Promise.resolve(res);
            data.then(() => {
                dispatch({
                    type: 'ADD_CART_FULFILLED',
                    payload: data
                });
                dispatch(fetchCart(quoteId));
            });
        })
        .catch(function (error) {
            dispatch({
                type: 'ADD_CART_REJECTED',
                payload: error
            });
        });
    }
}

export function postCartOffline(product, quoteId, qty) {
    return (dispatch) => {
        const productObj = {
            item_id: product.id,
            name: product.name,
            price: product.price,
            product_type: 'simple',
            qty: qty ? qty : 1,
            quote_id: quoteId,
            sku: product.sku
        }
        dispatch({
            type: 'ADD_CART_FULFILLED_OFFLINE',
            payload: productObj
        });
    }
}

export function fetchQuote() {
    return (dispatch) => {
        dispatch({
            type: 'GET_QUOTE'
        });
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/guest-carts/', {
            method: 'POST',
            headers: { 'Content-Type':'application/json'}
        })
        .then(function (res) {
            var data = Promise.resolve(res.json());
            data.then(function(data) {
                localStorage.setItem('quoteId', data);
                dispatch({
                    type: 'GET_QUOTE_FULFILLED',
                    payload: data
                });
            });
        })
        .catch(function (error) {
            dispatch({
                type: 'GET_QUOTE_REJECTED',
                payload: error
            })
        });
    }
}

export function getQuote() {
    return (dispatch) => {
        if (!localStorage.getItem('quoteId')) {
            dispatch(fetchQuote());
        } else {
            dispatch({
                type: 'GET_QUOTE_FULFILLED',
                payload: localStorage.getItem('quoteId')
            });
            dispatch(fetchCart(localStorage.getItem('quoteId')));
        }
    }
}

export function fetchCart(quoteId) {
    return (dispatch) => {

        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/guest-carts/' + quoteId + '/items')
        .then(function (res) {
            var data = Promise.resolve(res.json());
            data.then(function(data) {
                dispatch({
                    type: 'FETCH_CART_FULFILLED',
                    payload: data
                });
            });
        })
        .catch(function (error) {
            dispatch({
                type: 'FETCH_CART_REJECTED',
                payload: error
            })
        });
    }
}

