import React from 'react';
import './HomePage.container.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const pages = [
    {
      id: uuidv4,
      link: '/generate/random',
      name: 'Random Generator Page',
    },
    {
      id: uuidv4,
      link: '/generate/select',
      name: 'Select Your Hero Generator Page',
    },
  ];

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
