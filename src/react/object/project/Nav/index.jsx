/**
 *
 * FLOCSS: project/Header
 *
--------------------------------------------------------------------- */



import "./style/Project.scss";
import React from "react";



class P_Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  get itemList() {
    return this.props.data;
  }

  get itemTags() {
    return this.itemList.map((item, index) =>
      <li key={index} className="p-Nav__item">
        <a className="p-Nav__link" href="{item.href}">{item.text}</a>
      </li>
    );
  }

  render() {
    return (
      <nav className="p-Nav">
        <ul className="p-Nav__inner">
          {this.itemTags}
        </ul>
      </nav>
    );
  }
}



export default P_Nav;
