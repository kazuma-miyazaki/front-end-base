import './../style/app.scss';
import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)

    console.log('asdfsadf: %o', props)

    this.state = { message: 'test' }
  }

  onChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));