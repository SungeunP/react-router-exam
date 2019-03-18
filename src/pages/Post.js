import React, { Component } from 'react';

class Post extends Component {

  render() {
    const { match } = this.props;
    return (
      <div>
        <p> post #{match.params.id} </p>
      </div>    
    );
  }
}

export default Post;