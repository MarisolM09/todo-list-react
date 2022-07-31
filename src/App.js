import React from "react";
// import './App.css';
import { nanoid } from "nanoid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isClicked: false,
      todos: [
      { id: "1", todo: "Feed fish" }, 
      { id: "2", todo: "Feed dog" }, 
      { id: "3", todo: "Feed cat" }, 
    ],
      text: '',
    }
   
  }

    handleChange = (e) => {
      this.setState({
        text: e.target.value,
      });
    };

    handleSubmit = () => {
      this.setState({
        todos: [ ...this.state.todos, { id: nanoid(), todo: this.state.text}],
        text: ''
      });
    };

    handleClick = (e, id) => {
      const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);

      this.setState({
        todos: filteredTodos,
      }); 
    };
  
    componentDidUpdate() {
      // console.log(this.state.text)
      console.log(this.state.todos)
    }
  
  
  render() {
  return (
    <div className="app">
      <h2>Todo List</h2>
      <input 
        type="text" 
        onChange={this.handleChange} 
        value={this.state.text}></input>
      <button onClick={this.handleSubmit}>Submit</button>
      <ul>
        {
          this.state.todos.map(({ todo, id }) => {
            return <li key={id} onClick={(e) => this.handleClick(e, id)}>{todo}</li>
          })
        }
      </ul>
      
    </div>
  );
 }
}

export default App;
