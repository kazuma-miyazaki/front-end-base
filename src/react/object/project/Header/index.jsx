/**
 *
 * project: Header
 *
--------------------------------------------------------------------- */



import "./style/Project.scss";
import React from "react";



class P_Header extends React.Component {
  constructor(props) {
    super(props);
  }

  get title() {
    return this.props.data.title;
  }

  render() {
    return (
      <header className="p-Header">
        <p className="p-Header__title">{this.title}</p>
      </header>
    );
  }
}



export default P_Header;
