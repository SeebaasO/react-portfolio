import { Home } from './assets/components/Home.jsx'
import { Navbar } from './assets/components/Navbar.jsx'
import { Projects } from './assets/components/Projects.jsx'
import { NotFound } from './assets/components/NotFound.jsx'
import { Contact } from './assets/components/Contact.jsx'
import { Routes, Route } from 'react-router'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar />
    </>
  )
}