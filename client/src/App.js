import React, { Component } from 'react';
import { Button } from 'office-ui-fabric-react/lib/Button';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  async componentDidMount(){
    const response = await fetch('/api');
    const { users } = await response.json();
    this.setState({ users })
  }

  render() {
    if (this.state.users === null) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <h1>Users</h1>
          {this.state.users.map(u => <div key={u.id}>{u.username}</div>)}
          <Button>Button</Button>
        </div>
      );
    }
  }
}

export default App;
