import React      from 'react';
import { render } from 'react-dom';
import App        from './App';
import {
  ReactRenderingHelper
}                 from 'tools/ReactRenderingHelper';

const makeApp = id => ReactRenderingHelper(App, id).make;

export default {
  makeApp
};