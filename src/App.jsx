import { Home } from './assets/components/Home.jsx'
import { Navbar } from './assets/components/Navbar.jsx'
import { Projects } from './assets/components/Projects.jsx'
import { Routes, Route } from 'react-router'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Navbar />
    </>
  )
}