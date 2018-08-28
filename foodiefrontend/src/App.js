import React, {Component} from 'react';
import Main from './container/Main';
import './css/App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons'
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

library.add(faStroopwafel);

class App extends Component {

  render() {
    return (
        <div className="App">
{/*          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>*/}
          <Main/>
        </div>
    );
  }
}

export default App;