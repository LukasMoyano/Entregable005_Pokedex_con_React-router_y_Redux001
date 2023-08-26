import { Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
<Routes>

  <Routes path='/' element={<Home />} />
  
</Routes>
    </>
  )
}

export default App
