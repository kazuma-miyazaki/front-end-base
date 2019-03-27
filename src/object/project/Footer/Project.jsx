
import "./style/Project.scss";
import React from "react";



class Project extends React.Component {
  constructor() {
    super();
    this.state = { copy: "Footer" };
  }

  render() {
    return (
      <footer className="p-Footer">
        <p className="p-Footer__copy">{this.state.copy}</p>
      </footer>
    );
  }
}



export default Project;
