// Tuto https://www.youtube.com/watch?v=E1E08i2UJGI
import React from 'react';

import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

/* import Header from './components/Header'; */

// Indentation générale ctrl + shift + i

function App() {
  return (
    <>
      <Header />
      <div className='todo-app'>
        <TodoList />
      </div>
    </>
  );
}

export default App;

