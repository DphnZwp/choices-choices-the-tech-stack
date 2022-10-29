import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation'
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
