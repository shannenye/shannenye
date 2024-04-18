import React from 'react';
import Header from './Header/Header';
import Container from './Container/Container';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Container />} />
                <Route path='/portfolio' />
                <Route path='/recipes' />
                <Route path='/gallery' />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
