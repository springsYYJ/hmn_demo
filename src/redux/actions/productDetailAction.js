function getProductDetail(id){
   return  async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/springsYYJ/hnm_demo/products/${id}`;
        let response = await fetch(url)
        let data = await response.json();
        dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } })
      }
}

export const productDetailAction = { getProductDetail } 