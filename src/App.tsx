import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <h1>CryptoYu App</h1>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App