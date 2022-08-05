import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import placeholder from '../images/moving-stairs.gif'
import profilePlaceholder from '../images/harry-gif.gif'

const AllCharacters = () => {

  const [ allChar, setAllChar ] = useState([])
  const [ profile, setProfile ] = useState(false)
  const [ filterHouse, setFilterHouse ] = useState({
    house: 'All'
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://hp-api.herokuapp.com/api/characters')
        setAllChar(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  
  const handleChange = (e) => {
    const houses = allChar.filter(char => char.house === e.target.value)
    setFilterHouse(houses)
  }

return (
  <Container as='main' className='all-char-main'>
    { profile ?
    <>
    
      <div className='profile-page'>
        <Row>
          <Col className="profile-image" md='6'>
            <img className='w-100' src={profile.image ? profile.image : profilePlaceholder} alt={profile.name}/>
          </Col>
          <Col className='attributes' md='6'>
            <h3 className="smallest">{profile.actor}</h3>
            <h3 className="small">Species: {profile.species}</h3>
            <h3 className="big"> {profile.patronus}</h3>
            <h2 className="biggest"> {profile.name}</h2>
            <h3 className="big">House: {profile.house}</h3>
            <h3 className="small">Ancestry: {profile.ancestry}</h3>
            <button className="profile-button"onClick={() => setProfile(false)}>Go Back to All Characters</button>
          </Col>
        </Row> 
      </div>
    </> 
    :
    <>
    <div className='select-div'>
      <select className='select' name='house' onChange={handleChange}>
        <option value='All'>All</option>
        <option value='Gryffindor'>Gryffindor</option>
        <option value='Hufflepuff'>Hufflepuff</option>
        <option value='Ravenclaw'>Ravenclaw</option>
        <option value='Slytherin'>Slytherin</option>
      </select>
    </div>
    {(filterHouse.length > 0 ? filterHouse : allChar).map(chars => {
            const { name, image, house} = chars
            
            
      return (
        <Row>
          <Col className='g-col-4 mb-5' >
            <div className='character-card'>
              <Card className=''onClick={() => setProfile(chars)}>
                {/* <Card.Img variant='top' src={image ? image : placeholder}/> */}
                <div className='card-header' style={{ backgroundImage: `url('${image ? image : placeholder}')` }}></div>
                <Card.Body className='card text-center'>
                  <Card.Title className='text-center mb-0'>{name} <br/> {house}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      )
    }) } 
  
    </>
    }
  </Container>

)
}

export default AllCharacters


// md="6" lg="4" className='mb-4'
// className='col-md-6 h-100'
// className='card-img-top'
// className='bg-light'
// className='text-center mt-0'