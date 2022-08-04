import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App


// create div classname of site wrapper 
// wrap everything in a brouser router 
//? import browserRouter, container, and route from react-router-dom
//add pagenavbar, and footer inside the browser router but outside the routes 
// add routes as and when needed - will be home, not found, character single, all characters 
//every route needs a path and element of the component in which the code fro that page is 