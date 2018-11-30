import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './App.css';

class App extends Component {
  render() {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          alert('You clicked outside of this component!!!');
        }}
      >
        <div className="Element">
          Click Outside
        </div>
      </OutsideClickHandler>
    );
  }
}

export default App;
