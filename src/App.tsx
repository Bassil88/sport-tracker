import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
    <div className="flex">
      <div className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>

      </div>
    </div>
  </Router>

  );
}

export default App;
