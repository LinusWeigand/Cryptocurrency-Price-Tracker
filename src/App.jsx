import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/WatchListContext";

const App = () => {
    return(
        <div>
            <WatchListContextProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" component= {CoinSummaryPage}/>
                    </Routes>
                </BrowserRouter>
                <CoinSummaryPage></CoinSummaryPage>
            </WatchListContextProvider>
        </div>
    );
};

export default App;