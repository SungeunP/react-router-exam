import React, { Component } from 'react';
import queryString from 'query-string';
import Menu from 'components/Menu';

class About extends Component {

  render() {
    const { history } = this.props;
    const { location } = this.props;
    const { match } = this.props;
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';

    console.log(history);
    console.log(location);
    console.log(match);
    
    return (
      <div>
        <h2>
          About
        </h2>
        
        { match.params && 
        (
          <h1>
            {match.params.name}
          </h1>
        )}
        { detail &&
        (
          <p> detail comment </p>
        )}
      </div>
    );
  }
}

export default About;