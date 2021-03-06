import React, { Component } from 'react';
import ReactLogo from './ReactLogo.svg';
import YarnCat from './YarnCat.svg';
import './App.css';

import { Link, Card, Flex, Swatch } from 'looker-lens-components';
import * as designTokens from 'looker-lens-design-tokens';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={ReactLogo} className="React-logo" alt="React Logo" />
            <img src={YarnCat} className="Yarn-cat" alt="Yarn Workspaces Cat" />
          </div>
          <h1>
            <a
              className="App-link"
              href="https://github.com/react-workspaces/cra-workspaces-playground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>React</strong> Workspaces
            </a>
          </h1>
          <h2>Hot Reload Your Workspaces</h2>
          <div className="components">
            <Link>Link Text</Link>
            <Card>Card</Card>
            <Flex>Flex</Flex>
            <Swatch />
          </div>
          <div className="tokens">
            Font Size: {designTokens.fontSizes.large}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
