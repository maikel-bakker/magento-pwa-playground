export function fetchProducts(id) {
    return (dispatch) => {
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/angular.php?page=1&page-size=12&attributes=small_image,thumbnail,url_key,name,short_description,price,sku&category='+id)
            .then(function (res) {
                var data = Promise.resolve(res.json());

                data.then(function(data) {
                    dispatch({
                        type: 'FETCH_PRODUCTS_FULFILLED',
                        payload: data.items,
                        categoryId: id
                    })
                });

            })
            .catch(function (error) {
                dispatch({
                    type: 'FETCH_PRODUCTS_REJECTED',
                    payload: error
                })
            });
        
    }
}