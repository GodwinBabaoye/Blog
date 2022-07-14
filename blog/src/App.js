import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from "./Components/Blog"
import Blogsignup from "./Components/Blogsignup"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Blog />}/>
      <Route path="/signup" element={<Blogsignup />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/home" element={<Homepage />}/>
      <Route path="/home" element={<Homepage />}/>
    </Routes>
  </Router>
  );
}

export default App;
