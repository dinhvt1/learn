import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom';

ListPage.propTypes = {
  
};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    },
  ];

  const location = useLocation();
  const [todoList, setTodoList] = useState(initTodoList)
  const [filterStatus, setFilterStatus] = useState(() => {
    // const params = queryString.parse(location.search);
    // console.log("params: ", params)
    return 'all';
  });

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);

    //clone current array to the new one
    const newTodolist = [...todoList];


    //toggle state
    const newTodo = {
      ...newTodolist[idx],
      status: newTodolist[idx].status === 'new' ? 'completed' : 'new',

    };
    newTodolist[idx] = newTodo;


    //update todo list
    setTodoList(newTodolist);
  }

  const handleShowAllClick = () => {
    setFilterStatus('all');
  }

  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
  }

  const handleShowNewClick = () => {
    setFilterStatus('new');
  }

  const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
  // console.log(renderTodoList);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;