import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Login from "./Account/Login.jsx";

function App(){

    return (
        <div> 
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
