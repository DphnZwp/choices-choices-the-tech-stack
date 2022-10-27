import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Story from './components/Story'
import Stories from './components/Stories'

function App() {
  return (
    <div>
      <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Stories />}/>
            <Route path=":id" element={<Story />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
