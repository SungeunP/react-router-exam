import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Post from './Post';

class Posts extends Component {

  render() {

    const { match } = this.props;

    return (
      <div>
        <ul>
          <li> <Link to={`${match.url}/1`} > post #1 </Link> </li>
          <li> <Link to={`${match.url}/2`} > post #2 </Link> </li>
          <li> <Link to={`${match.url}/3`} > post #3 </Link> </li>
          <li> <Link to={`${match.url}/4`} > post #4 </Link> </li>
        </ul>
        <Route exact path={match.url} render={() => (<h3> Please select a post </h3>)} />
        <Route path={`${match.url}/:id`} component={Post} />
      </div>
    );
  }
}

export default Posts;