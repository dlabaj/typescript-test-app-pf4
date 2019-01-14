
import { ApplicationLauncher, DropdownItem, Avatar, AvatarProps, Button } from '@patternfly/react-core';
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class myProps implements AvatarProps{
  alt: "avatar";
}
class App extends React.Component {
  public render() {
    const dropdownItems = [
      <DropdownItem key="application_1">
        Application 1
      </DropdownItem>,
      <DropdownItem key="application_2">
        Application 2
      </DropdownItem>
    ];
    return (
      <div className="App">
        <header className="App-header">
          <Avatar src={logo} alt={new myProps().alt} />
          <ApplicationLauncher
        aria-label="My Application Launcher"
        onSelect={()=>{}}
        onToggle={()=>{}}
        isOpen={true}
        dropdownItems={dropdownItems}
      />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button>Hello</Button>
      </div>
    );
  }
}

export default App;
