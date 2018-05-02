import React, { Component } from 'react';

import { EscapeInput } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Security Examples</h1>
        <hr />
        <EscapeInput />
      </div>
    );
  }
}

export default App;
