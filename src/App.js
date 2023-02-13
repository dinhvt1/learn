import React, { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import productApi from './api/productApi';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  useEffect(() => {
    const fetchProducts = async() => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      console.log(productList)
    };

    fetchProducts();
  }, []);
  return (
    <div className="App">
      Header
      <p><NavLink to="/todos" activeClassName="active-menu">Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Albums</NavLink></p>

      <Routes>
          <Route path="/" element={<TodoFeature/>} />
          <Route path="/todos" element={<TodoFeature/>} />
          <Route path="/albums" element={<AlbumFeature/>} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
