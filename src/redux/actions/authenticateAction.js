function login(id, password) {
    return (dispatch, getState) => {
        console.log('test222')
        dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })
    };
}

export const authenticateAction = { login }