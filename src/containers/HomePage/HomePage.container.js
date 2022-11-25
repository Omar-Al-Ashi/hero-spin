import React from 'react';
import './HomePage.container.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import constants from '../../constants/constants';

const HomePage = () => {
  const pages = constants.pages;

  return (
    <div className='pages-selector-grid'>
      {pages.map((page) => (
        <a href={page.link} className='page-card center'>
          <div>
            <p>{page.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default HomePage;
