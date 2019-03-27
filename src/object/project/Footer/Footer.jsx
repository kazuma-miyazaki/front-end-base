import "./style/Footer.scss";
import React from "react";



class P_Footer extends React.Component {
  constructor() {
    super();
    this.state = { copy: "Footer" };
  }

  render() {
    return (
      <footer class="p-Footer">
        <p class="p-Footer__copy">{this.state.copy}</p>
      </footer>
    )
  }
}



export default P_Footer;
