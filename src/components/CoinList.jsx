import React, {useContext, useEffect, useState} from "react";
import coinGecko from "../apis/CoinGecko"
import { WatchListContext } from "../context/WatchListContext";

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const {watchList} = useContext(WatchListContext) 
    const [isLoading, setIsLoading] = useState(false);
    console.log(watchList)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(","),
                }
            })
            setIsLoading(false)
            setCoins(response.data)
        }

        fetchData()
    }, []);

    const renderCoins = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }

        return (
            <ul className="coinlist list-group mt-2">
                
            </ul> 
        )
    }
    
    return (
        <div>
            renderCoins
        </div>
    )
}

export default CoinList;