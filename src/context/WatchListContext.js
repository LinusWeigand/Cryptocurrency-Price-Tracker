import {createContext, useState} from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum", 
    "olympus", "wonderland", 
    "avalanche-2", "terra-luna", "solana", "chainlink", "polkadot", "matic-network",
    "cosmos", "phantasma", "immutable-x"])

    return (
        <WatchListContext.Provider value = {{watchList}}> 
            {props.children}
        </WatchListContext.Provider>
    )
}