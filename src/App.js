import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Explore from './pages/Explore';
import ExploreBooks from './pages/ExploreBooks';
import Read from './pages/Read';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/books" element={<ExploreBooks />} />
          <Route path="/explore/books/read" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
