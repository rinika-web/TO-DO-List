import React, { useState } from 'react';
import "./myTodoList.css";

const MyTodoList = () => {
  const [todos, setTodos] = useState([]); 
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleTodoComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='container'>
      <div className='headline'>
        <h1>Todo list</h1>
      </div>
      <div className="todo-form">
        <form onSubmit={handleSubmit}> 
          <label htmlFor="text" className="form-label" ></label>
          <input
            type="text"
            placeHolder='write here' 
            className="form-control"
            id="text"
            aria-describedby="description"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleTodoComplete(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTodoList;
