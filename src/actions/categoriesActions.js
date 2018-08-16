export function fetchCategories() {
    return (dispatch) => {
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/categories')
            .then(function (res) {
                var data = Promise.resolve(res.json());
                data.then(function(data) {
                    dispatch({
                        type: 'FETCH_CATEGORIES_FULFILLED',
                        payload: data.children_data
                    });
                });
            })
            .catch(function (error) {
                dispatch({
                    type: 'FETCH_CATEGORIES_REJECTED',
                    payload: error
                })
            });
    }
}