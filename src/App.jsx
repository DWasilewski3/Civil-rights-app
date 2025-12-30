import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rights from './pages/Rights'
import Liberty from './pages/Liberty'
import Guidance from './pages/Guidance'
import CivilRights from './pages/CivilRights'
import ConstitutionalRights from './pages/ConstitutionalRights'
import Layout from './components/Layout'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/liberty" element={<Liberty />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/civil-rights" element={<CivilRights />} />
          <Route path="/constitutional-rights" element={<ConstitutionalRights />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

