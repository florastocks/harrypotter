import { useEffect } from 'react'
import axios from 'axios'

//! import component pages 
import Home from './components/Home'
import PageNavbar from './components/PageNavbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://hp-api.herokuapp.com/api/characters')
      console.log(data)
    }
    getData()
  })

  return (
    <main>
      <div className='site-wrapper'>
        <BrowserRouter>
          <PageNavbar />
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App


// create div classname of site wrapper 
// wrap everything in a brouser router 
//? import browserRouter, container, and route from react-router-dom
//add pagenavbar, and footer inside the browser router but outside the routes 
// add routes as and when needed - will be home, not found, character single, all characters 
//every route needs a path and element of the component in which the code fro that page is 