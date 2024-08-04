import React, { useContext, useEffect, useReducer } from 'react';
import reducer from "./reducer";
const AppContext = React.createContext();

const API = "https://services-api-peho.onrender.com/services";
 
const initialState = {
    name: "",
    age: "",
    services: [],
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


    //to get API data

    const getServices = async(url) => {
        try{
            const res = await fetch( url );
            const data = await res.json() ;
            dispatch({type:"GET_SERVICES", payload: data });
        } catch ( error ){
            console.log(error);
        }
    };


    // to call API
    // Service page started

    useEffect(() => {
        getServices(API);
    }, []);

    // service page ends 


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