import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
  
};

function TodoFeature(props) {
  return (
    <div>
      <Routes>
        <Route path="/todos" component={ListPage} exact/>
        <Route path="/todos/:todoId" component={DetailPage}/>
      </Routes>
    </div>
  );
}

export default TodoFeature;