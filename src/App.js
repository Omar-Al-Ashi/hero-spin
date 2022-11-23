import React from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import BuildRoutes from './routing/BuildRoutes'
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <BuildRoutes/>
      </div>
    </BrowserRouter>
  );
}

export default (App);
