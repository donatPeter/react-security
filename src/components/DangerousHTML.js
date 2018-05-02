import React, { Component } from 'react';

const foo = "<input placeholder='Mixed in input...' />";
const bar = "<script>alert('XSS')</script>";
const goo = `<a href='javascript:alert("XSS");'>Click Me</a>`;

class DangerousHTML extends Component {
  componentDidMount() {
    const s = document.createElement('script');
    s.innerHTML = "console.log('XSS created with innerHTML')";
    document.getElementById('danger-div').appendChild(s);
  }

  render() {
    return (
      <div id='danger-div'>
        <h3>Dangerous HTML</h3>
        <div dangerouslySetInnerHTML={{ __html: foo }} />
        <div dangerouslySetInnerHTML={{ __html: bar }} />
        <div dangerouslySetInnerHTML={{ __html: goo }} />
      <p>/*directly set inner html could be a point to XSS*/</p>
      </div>
    )
  }
}

export default DangerousHTML;