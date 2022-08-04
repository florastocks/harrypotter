import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
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
        // navigate('/:index')
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
  <Container as='main'>
    { profile ?
    <>
      <div className='profile-page'>
        <Row>
          <Col className="profile-image" md='6'>
            <img className='w-100' src={profile.image} alt={profile.name}/>
          </Col>
          <Col className='attributes' md='6'>
            <h3 className="smallest">Actor name: {profile.actor}</h3>
            <h3 className="small">Species: {profile.species}</h3>
            <h3 className="big">Patronus: {profile.patronus}</h3>
            <h2 className="biggest">Character Name: {profile.name}</h2>
            <h3 className="big">House: {profile.house}</h3>
            <h3 className="small">Ancestry: {profile.ancestry}</h3>
            <button onClick={() => setProfile(false)}>Go Back to All Characters</button>
          </Col>
        </Row> 
      </div>
    </> 
    :
    <>
      <select name='house' onChange={handleChange}>
        <option value='All'>All</option>
        <option value='Gryffindor'>Gryffindor</option>
        <option value='Hufflepuff'>Hufflepuff</option>
        <option value='Ravenclaw'>Ravenclaw</option>
        <option value='Slytherin'>Slytherin</option>
      </select>
    {(filterHouse.length > 0 ? filterHouse : allChar).map(chars => {
            const { name, image, house} = chars
            console.log('our index')
      return (
        <Row>
          <Col md='6' lg="4" className='mb-4 col-sm-6'>
            <Card onClick={() => setProfile(chars)}>
              <Card.Img className='card-img-top' src={image}/>
              <Card.Body className='bg-light'>
                <Card.Title className='text-center mt-0'>{name} - {house}</Card.Title>
              </Card.Body>
            </Card>
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