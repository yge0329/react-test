import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

const App = () => {
    // return <div>리액트 테스트테스트</div>
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;