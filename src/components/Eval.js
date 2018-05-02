import React, { Component } from 'react';

const privateVar = 'password: foo';

class Eval extends Component {

  state = {
    expression: '',
    result: ''
  };

  updateExpression = event => this.setState({ expression: event.target.value });

  vulEval = () => {
    const result = eval(this.state.expression);
    this.setState({ result });
  }

  safEval = () => {
    // the Function contructor creates its own scope, so it does not have the same privilages as eval which has admin role
    const func = Function(`return (${this.state.expression})`);
    this.setState({ result: func() });
  }

  render() {
    return (
      <div>
        <h3>Evaluating User-Supplied Expressions</h3>
        <input onChange={this.updateExpression} />
        <br />
        <button onClick={this.vulEval}>Vulnerable Evaluate</button>
        <button onClick={this.safEval}>Safe Evaluate</button>
        <br />
        <h4>Result: {this.state.result}</h4>
        <br />
        <p>/*eval(): takes a string and evaulates it as JS.
        the Function contructor creates its own scope, so it does not have the same privilages as eval which has admin role 
          */
        </p>
      </div>
    )
  }
}

export default Eval;