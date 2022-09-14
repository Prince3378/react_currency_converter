import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import { Converter } from './components/Converter';

import { Header } from './components/Header/Header';
import { ListRate } from './components/ListRate/ListRate';
import { Navigation } from './components/Navigation/Navigation';

export const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Converter />} />
        <Route
          path="/exchange-rate"
          element={<ListRate />} />
      </Routes>
    </div>
  );
};
