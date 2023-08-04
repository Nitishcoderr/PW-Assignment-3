import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Gallery from './component/Gallery'
import Navbar from './component/Navbar'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import SinglePage from './component/SinglePage'

function App() {
  const [progress, setProgress] = useState(0)
  return (
   <Router>
    <Navbar/>
    <LoadingBar
          height={2.5}
          color='#f11946'
          progress={progress}
        />
    <Routes>
      <Route exact path='/'element={<Gallery setProgress={setProgress} />} />
      <Route exact path="/image/:id" element={<SinglePage setProgress={setProgress}  />} />
      
    </Routes>
   </Router>
  )
}

export default App
