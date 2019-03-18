import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} /> { /* exact를 통하여 정확히 일치할 때를 정의할 수 있음 */ }
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;