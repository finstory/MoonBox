import { createContext, useContext, useReducer } from "react";

export const DetalisContext = createContext();

export const useDetalis = () => {

    const initialState = {
        count: {
            num: 2,
            string: "asdasdas"
        },
        algo: {
            string: "asdasdas"
        }
    };

    function Details(state, action) {
        switch (action.type) {
            case action.type:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    }

    const [details, dispatch] = useReducer(Details, initialState);


    const setDetails = (data) => {
        dispatch({ type: Object.keys(data)[0], payload: data })
    }


    return ({ details, setDetails })
}

export const useDetailsContext = () => {
    const context = useContext(DetalisContext);
    return context;
};