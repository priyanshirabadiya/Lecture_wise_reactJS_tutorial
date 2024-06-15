import React, { Component } from 'react';
import './App.css';
import KanbanBoard from './Components/index';
// import 'h8k-components';

const title = "Kanban Board";

class App extends Component {
  render() {
    return (
      <div>
        {/* <h8k-navbar header={title}></h8k-navbar> */}
        <KanbanBoard tasks={this.props.tasks}/>
      </div>
    );
  }
}

export default App;