import React, { Component } from 'react';

class UserHref extends Component {
  state = { link: '' };

  updateLink = event => this.setState({ link: event.target.value });

  render() {
    return (
      <div>
        <h3>User Generated Href</h3>
        <a target='_blank' href={this.state.link}>{this.state.link}</a>
        <br />
        <input onChange={this.updateLink} />
        <p>/*an anchor tag also a target to XSS by executing js in its href attribute. 
        normal example: http://example.com
        harmful example: javascript:alert('xss')  
          */
        </p>
      </div>
    )
  }
}

export default UserHref;