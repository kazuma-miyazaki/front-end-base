/**
 *
 * project: Header
 *
 --------------------------------------------------------------------- */



import "./style/Project.scss";
import React from "react";



class Project extends React.Component {
  constructor() {
    super();
    this.state = { title: "Header" };
  }

  render() {
    return (
      <header className="p-Header">
        <p className="p-Header__title">{this.state.title}</p>
      </header>
    );
  }
}



export default Project;
