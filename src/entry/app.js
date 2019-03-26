import React      from 'react';
import { render } from'react-dom';
import Index      from '../object/app/Index';
import Form       from '../object/app/Index';



const apps = {

  // apps

  'index': Index,

  'form' : Forms

};



Object.keys(apps).forEach(containerID => {
  const App       = apps[containerID];
  const container = document.getElementById(containerID);

  if (container)
  {
    console.log('containerID: %o', containerID);
    console.log('container  : %o', container);

    container && render(<App/>, container);
  }
});
