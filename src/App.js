import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './components/About'
import { v4 as uuidv4 } from 'uuid';
class App extends React.Component {
    state = {
      todos:[
        {
          id: uuidv4(),
          title: 'prepare for the exam',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'Take out the trash',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'meeting with the dentist',
          completed: true
        }
      ]
    }
    markComplete = (id) => {
      this.setState({
          todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
        return todo;

      }) })
    }
 
    delTodo = (id) => {
      this.setState({
        todos: this.state.todos.filter(todo =>{
          return todo.id !==id
        })
      })
    }
    addTodo = (title) => {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false

      }
        this.setState({
          todos: [...this.state.todos, newTodo]
        });
    }
    render(){

      return (
        <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
      );
    }
 
}

export default App;
