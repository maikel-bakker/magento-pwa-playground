export function fetchCategory(id) {
    return (dispatch) => {
        fetch('http://m2angular.nl.sandbox20.xpdev.nl/index.php/rest/V1/categories/' + id)
            .then(function (res) {
                var data = Promise.resolve(res.json());
                data.then(function(data) {
                    dispatch({
                        type: 'FETCH_CATEGORY_FULFILLED',
                        payload: data
                    });
                });
            })
            .catch(function (error) {
                dispatch({
                    type: 'FETCH_CATEGORY_REJECTED',
                    payload: error
                })
            });
    }
}