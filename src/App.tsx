import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import './App.scss';

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' />
                <Route path='/recipes' />
                <Route path='/gallery' />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
