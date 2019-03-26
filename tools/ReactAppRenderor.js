const React      = require('react');
const { render } = require('react-dom');



class ReactHelper {
  constructor(id) {
    console.log('ReactAppRenderor');
    this.container = document.getElementById(id);
  }

  render(App) {
    console.log('ReactRenderingHelper');

    if (this.container !== null)
    {
      console.log('render');
      render(<App/>, this.container);
    }
    else
    {
      console.log('Failure render: container is null');
    }
  }
}



module.exports = ReactAppRenderor;