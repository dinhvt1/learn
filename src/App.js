import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
      Header
      <p></p>
      <Link to="/todos">Todos</Link>
      <p></p>
      <Link to="/albums">Albums</Link>

      <p></p>
      <NavLink to="/todos" activeClassName="active-menu">Todos</NavLink>
      <p></p>
      <NavLink to="/albums" activeClassName="active">Albums</NavLink>

      <Routes>
        <Route path="/todos" element={<TodoFeature/>} />
        <Route path="/albums" element={<AlbumFeature/>} />
      </Routes>
      <p></p>
      Footer
    </div>
  );
}

export default App;
