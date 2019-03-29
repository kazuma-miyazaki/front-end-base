/**
 *
 * app: Index
 *
--------------------------------------------------------------------- */



import React    from "react";
import P_Header from '@react/object/project/Header';
import P_Nav    from '@react/object/project/Nav';
import P_Footer from '@react/object/project/Footer';
import {
  header,
  nav,
  footer
} from '@config/projects.json';



const insertTemplate = (App, data) => {
  class Single extends React.Component {
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
            <P_Header data={header} />
          </div>
  
          <div className="l-single__nav">
            <P_Nav data={nav} />
          </div>
  
          <div className="l-single__main">
            <div className="l-single__main__inner">

              {/* /application main */}

              <App data={data} />

              {/* application main/ */}

            </div>
          </div>
  
          <div className="l-single__footer">
            <P_Footer data={footer} />
          </div>
        </div>
      );
    }
  }

  return Single;
};



export default insertTemplate;
