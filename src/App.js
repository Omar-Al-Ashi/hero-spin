import React from "react";
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import BuildRoutes from './routing/BuildRoutes'
import Header from "./components/Header";
import {ErrorBoundary} from 'react-error-boundary'
import ErrorHandler from './containers/ErrorHandler'


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <BrowserRouter>
        <div className="App">
          <Header/>
          <BuildRoutes/>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default (App);
