/**
 *
 * project: Footer
 *
--------------------------------------------------------------------- */



import "./style/Project.scss";
import React from "react";



class P_Footer extends React.Component {
  constructor(prop) {
    super(prop);
  }

  get copyright() {
    return this.props.data.copyright;
  }

  render() {
    return (
      <footer className="p-Footer">
        <p className="p-Footer__copyright">{this.copyright}</p>
      </footer>
    );
  }
}



export default P_Footer;
