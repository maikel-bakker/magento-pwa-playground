export function fetchSingleProduct(sku) {
    return (dispatch) => {
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/products/' + sku)
            .then(function (res) {
                var data = Promise.resolve(res.json());
                data.then(function(data) {
                    dispatch({
                        type: 'FETCH_SINGLEPRODUCT_FULFILLED',
                        payload: data
                    });
                });
            })
            .catch(function (error) {
                dispatch({
                    type: 'FETCH_SINGLEPRODUCT_REJECTED',
                    payload: error
                })
            });
    }
}