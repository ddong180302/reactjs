import actionTypes from "../action/actionTypes";

const initState = {
    homeData: [],
    test: "helle 123"
}

const appReducer = (state = initState, action) => {
    switch (action.key) {
        case actionTypes.GET_HOME:
            return state


        default:
            return state;
    }

}

export default appReducer