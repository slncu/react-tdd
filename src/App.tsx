import * as React from 'react';
import { connect } from 'react-redux';
import todos, { incrementId } from './redux/modules/todo';
import { Todos } from './redux/modules/todo';
import './App.css';

interface Props {
  todos: Todos,
  incrementId: () => void
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  public addTodo(e: any) {
    console.log(this, e);
    this.props.incrementId();
  }

  public render() {
    console.log(this);
    return (
      <div className="App">
        <input type="text" />
        <button onClick={this.addTodo}>追加する</button>
      </div>
    );
  }
}

export default connect(todos, {
  incrementId
})(App);
