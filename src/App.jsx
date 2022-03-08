/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: 42,
    };
  }

  render() {
    const { answer } = this.state;
    return (
      <h2>
        Hello class components
        {' '}
        {answer}
      </h2>
    );
  }
}

export default App;
