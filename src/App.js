import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "../src/component/Home"
import Login from "../src/component/Login.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
