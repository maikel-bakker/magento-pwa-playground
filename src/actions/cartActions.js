export function postCart(product, quoteId) {
    return (dispatch) => {
        const productObj = {
            "cartItem": {
                "sku"       : product.sku,
                "qty"       : 1,
                "quote_id"  : quoteId
            }
        }
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/guest-carts/' + quoteId + '/items', {
            method: 'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify(productObj)
        })
            .then(function (res) {
                var data = Promise.resolve(res.json());
                data.then(function(data) {
                    fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/guest-carts/' + quoteId + '/items')
                        .then(function (res) {
                            var data = Promise.resolve(res.json());
                            data.then(function(data) {
                                dispatch({
                                    type: 'ADD_CART_FULFILLED',
                                    payload: data
                                });
                            });
                        })
                        .catch(function (error) {
                            dispatch({
                                type: 'ADD_CART_REJECTED',
                                payload: error
                            })
                        });
                });
            })
            .catch(function (error) {
                dispatch({
                    type: 'ADD_CART_REJECTED',
                    payload: error
                })
            });
    }
}

export function getQuote() {
    return (dispatch) => {
        if (!localStorage.getItem('quoteId')) {
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
        } else {
            dispatch({
                type: 'GET_QUOTE_FULFILLED',
                payload: localStorage.getItem('quoteId')
            });
            fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/guest-carts/' + localStorage.getItem('quoteId') + '/items')
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