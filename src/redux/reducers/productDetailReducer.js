let initialState = {
    productDetail: {}
}

function productDetailReducer(state = initialState, action) {
    let { type, payload } = action
    switch (type) {
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return { ...state, productDetail: payload.data };
        default:
            return { ...state };
    }
}

export default productDetailReducer