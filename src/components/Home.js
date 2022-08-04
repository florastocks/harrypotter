//need to import the Link 
import { Link } from "react-router-dom"
const Home = () => {

  return(
    <main className="hero text-center">
      <div className="hero-container">
        <h1 className='heading'>Welcome to Hogwarts</h1>
        <p className="lead">This site holds information about all the characters in J.K Rowling's Book series, Harry Potter</p>
        <Link className="btn" to='/allcharacters'>Discover All the Characters</Link>
      </div>
    </main>

  )
}
export default Home
// create function and export it 
// create a main with the classname of hero, and dic class of hero-container
// create div container with <p> inside the description of the site inside
// align all to he centre of the page 
// make width of hero and div container the same width 
//  give the page a link to the all character page, with a classname of btn and the filling of characters 




