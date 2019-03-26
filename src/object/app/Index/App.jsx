import './style/App.scss';
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: 'test' }
  }

  onChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {s
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}



export default App;