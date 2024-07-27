import React, { useContext, useReducer } from 'react';
import reducer from "./reducer";
const AppContext = React.createContext();
 
const initialState = {
    name: "",
    age: "",
};


const AppProvider = ({ children }) => {

    const[state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload: {
                    name : "Kushagra Ankit" ,
                    image : "./images/hero.jpg",
                },
            }
        );
    };
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload: {
                    name : "Kushagra",
                    image : "./images/about1.svg",
                }
            }
        );
    };

    return (
    <AppContext.Provider value={{ ...state , updateHomePage, updateAboutPage  }}>
        {children}
    </AppContext.Provider>)
};

// Global custom Hook

const useGlobalContext = () => {
    return useContext(AppContext);
}

export{ AppContext , AppProvider , useGlobalContext };