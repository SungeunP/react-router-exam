import React, { Component } from 'react';
import Menu from 'components/Menu';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          홈
        </h2>
      </div>
    );
  }
}

export default Home;