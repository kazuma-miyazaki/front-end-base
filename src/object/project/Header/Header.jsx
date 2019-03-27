import "./style/Header.scss";
import React from "react";



class P_Header extends React.Component {
  constructor() {
    super();
    this.state = { title: "Header" };
  }

  render() {
    return (
      <header class="p-Header">
        <p class="p-Header__title">{this.state.title}</p>
      </header>
    );
  }
}



export default P_Header;
