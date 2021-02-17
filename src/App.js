import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tasks: [
          { title: 'デフォTodo', id: 0},
        ],
        uniqueId: 1,
      };
      this.addTodo = this.addTodo.bind(this);
      this.resetTodo = this.resetTodo.bind(this);
    }
    resetTodo(){
      this.setState({
        tasks: [
          { title: 'デフォTodo', id: 0},
        ]
      });
    }
    addTodo(title) {
      const {
        tasks, uniqueId
      } = this.state;

      tasks.push({
        title,
        id: uniqueId
      });

      this.setState({
        tasks,
        uniqueId: uniqueId + 1
      });
    }
    
    render(){
      return (
        <div className="APP">
          <h1>TODO App</h1>
          <button onClick={this.resetTodo}>リセット</button>
          <TodoInput addTodo={this.addTodo} />
          <TodoList tasks={this.state.tasks} />
        </div>
      );
    }
}
export default App;
