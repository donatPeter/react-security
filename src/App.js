import React, { Component } from 'react';

import { EscapeInput, DangerousHTML, UserHref } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Security Examples</h1>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHTML />
        <hr />
        <UserHref />
      </div>
    );
  }
}

export default App;
