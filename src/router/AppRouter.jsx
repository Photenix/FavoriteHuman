import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favoritos from '../Favoritos';
import Menu from '../Menu';

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={ <Menu/> } />
                
                <Route path="/like"
                    element={ <Favoritos/> }
                />
                <Route path="*" element={ "Es una prueba tecnica" } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;