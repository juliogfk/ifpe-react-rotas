import React from 'react';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Inicial from './pages/Inicial';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
          <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/inicial" element={<Inicial />} />
          </Routes>
     </Router>
    </>
     
  );
}

export default App;
