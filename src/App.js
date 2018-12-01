import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import './App.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleInsideClick = this.handleInsideClick.bind(this);
  }

  isOpen() {
    const { isFocussed } = this.props;

    return isFocussed;
  }

  handleOutsideClick() {
    const { toggleFocus } = this.props

    if (!this.isOpen()) {
      return;
    }

    toggleFocus(false);

    alert('You clicked outside of this component!!!');
  }

  handleInsideClick() {
    const { toggleFocus } = this.props

    if (!this.isOpen()) {
      toggleFocus(true);
    }
  }

  maybeRenderDatePicker() {
    if (!this.isOpen()) return null;

    return (
      <OutsideClickHandler onOutsideClick={() => console.log('clicked outside datepicker')}>
        <div className="DatePicker" />
      </OutsideClickHandler>
    )
  }

  render() {
    const { isFocussed } = this.props;

    const className = `Element${isFocussed ? '_focussed' : ''}`
    const value = isFocussed ? 'Now Click Outside' : 'Focus To Open Picker';

    return (
      <OutsideClickHandler onOutsideClick={this.handleOutsideClick} useCapture>
        <div className={className}>
          <input type="text" value={value} onChange={() => {}} onFocus={this.handleInsideClick} />
          {this.maybeRenderDatePicker()}
        </div>
      </OutsideClickHandler>
    );
  }
}

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocussed: false,
    }

    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus(isFocussed) {
    this.setState(() => ({ isFocussed }));
  }

  render() {
    const { isFocussed } = this.state;

    return (
      <Content isFocussed={isFocussed} toggleFocus={this.toggleFocus} />
    );
  }
}


class App extends Component {
  render() {
    return (
      <Container />
    );
  }
}

export default App;
