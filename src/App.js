import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick() {
    alert('You clicked outside of this component!!!');
  }

  render() {
    return (
      <OutsideClickHandler onOutsideClick={this.handleOutsideClick} useCapture>
        <div className="Element">
          Click Outside
        </div>
      </OutsideClickHandler>
    );
  }
}

export default App;
