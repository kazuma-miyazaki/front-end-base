import './style/App.scss';
import React from "react";
import P_Header from '@src/object/project/Header';
import P_Footer from '@src/object/project/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "test" };
  }

  onChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <div className="l-single">
        <div className="l-single__header">
          <P_Header></P_Header>
        </div>

        <div className="l-single__main">

          {/* /application main */}

          <div className="app_Index">
            <input type="text" onChange={this.onChange.bind(this)} />
            <p>{this.state.message}</p>
          </div>

          {/* application main/ */}

        </div>

        <div className="l-single__footer">
          <P_Footer></P_Footer>
        </div>
      </div>
    );
  }
}

export default App;
