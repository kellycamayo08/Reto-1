import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import { Principal } from './containers/Principal';
import Navbar from './components/Navbar';
import Search from './containers/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Principal/>
    <Search/>
  </React.StrictMode>
);

