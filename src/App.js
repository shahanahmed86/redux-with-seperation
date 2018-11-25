import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './component/todoapp';
import store from './store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
