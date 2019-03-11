import React      from 'react';
import { render } from 'react-dom';

class ReactRenderingHelper {
  constructor(App, id) {
    this.App       = App;
    this.container = document.getElementById(id);
  }
  render() {
    if (this.container !== null)
    {
      render(<this.App/>, this.container);
    }
    else
    {
      console.log('ReactRenderingHelper');
      console.log('Failure render: container is null');
    }
  }
}

module.exports = {
  ReactRenderingHelper
}