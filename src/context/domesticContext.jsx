import { useContext, createContext, useState } from "react";

// 1. Create the context
export const destinationsContext = createContext();

export const useDomesticDetailsContext = () => {
    return useContext(destinationsContext);
};

export const DestinationsProvider = ({ children }) => {
    const [domesticDestinations, setDomesticDestinations] = useState([]);


    return (
        <destinationsContext.Provider value={{ domesticDestinations, setDomesticDestinations }}>
            {children}
        </destinationsContext.Provider>
    );
};
