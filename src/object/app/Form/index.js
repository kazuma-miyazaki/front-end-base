/**
 * Styles
 =============================================================== */
import './style/app.scss';

/**
 * Script
 =============================================================== */
import React      from 'react';
import { render } from 'react-dom';
import App        from './App';

const makeApp = id => {
  const container = document.getElementById(id);
  container !== null && render(<App/>, container);
};

export default {
  makeApp
};