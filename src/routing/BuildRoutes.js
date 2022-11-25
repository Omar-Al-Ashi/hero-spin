import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage/HomePage.container';
import RandomGeneratorPage from '../containers/Generator/RandomGenerator.container';
import DetailsPage from '../containers/Details/Details.container';
import SelectGeneratorPage from '../containers/Generator/SelectGenerator.container';

const BuildRoutes = () => (
  <main>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/generate/random' exact element={<RandomGeneratorPage />} />
      <Route path='/generate/select' exact element={<SelectGeneratorPage />} />
      <Route path='/details' exact element={<DetailsPage />} />
    </Routes>
  </main>
);

export default React.memo(BuildRoutes);
