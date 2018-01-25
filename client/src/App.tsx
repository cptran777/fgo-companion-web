import * as React from 'react';
import * as alias from './types/alias';
import * as actions from './actions/index';

const logo = require('./logo.svg');

interface AppProps {
  testValue: alias.Value;
  onTest: (item: alias.Value) => actions.TestAction;
}
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="app-container">
        <nav className="navbar">
          Navigation bar
        </nav>
        <div className="nav-banner">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Top Kek RPG</h2>
        </div>
        <div className="app-body">
          <p className="App-intro">
            The toppest of keks
          </p>
          <p>
            {this.props.testValue}  
          </p>
        </div>
      </div>
    );
  }
}

export default App;
