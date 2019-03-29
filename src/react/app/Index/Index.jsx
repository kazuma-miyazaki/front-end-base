/**
 *
 * app: Index
 *
--------------------------------------------------------------------- */



import './style/app.scss';
import React          from 'react';
import insertTemplate from '@react/template/Single';



class App_Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <dl className="app-Index">
        <dt className="app-Index__title">
          {this.props.data.app}
        </dt>

        <dd className="app-Index__content">
          <input
            type="text"
            className="app-Index__input"
            onChange={this.onChange.bind(this)} />
          <p className="app-Index__input-moiter">{this.state.inputValue}</p>
        </dd>
      </dl>
    );
  }
}



export default insertTemplate(App_Index, {
  app: 'Index.jsx'
});
