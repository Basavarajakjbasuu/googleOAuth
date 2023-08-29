import Home from "./pages/Home"

import './App.css'
import Profile from "./pages/Profile"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"

const App = () => {
  return (

    <div className="bg-image">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App