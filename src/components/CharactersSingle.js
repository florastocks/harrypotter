//! Imports 
//container, Row, Col
//import use effect and use state 
// import link 
//! States
// need a character and setcharacter use state 
// errors and set errors use state

//! Execution 
// create a use effect with an async get data function inside
// add a try catch and a variable of data with an await and 
// axios get request from the api endpoint / the index  
// add console.log into the catch to log any errors
//? need to find an id 

//!JSX 
//create a container as main
//wrap two cols in a row 
// Col 1 - image - will be on the left - image tag with classname of w-100 to makeit full width then add src of character.image 
// and alt text of character.name
// Col 2 - all the descriptions in it - character.name .actor .house .ancestry .patronus
// h3 > actor -> actor: ${character.actor} to access the name; ancestry -> ancestry: ${character.ancestry}
// h2 > patronus and house -> :character.patronus; character.house
// h1 > character name - will only have the ${character.name} as dont want the key.
// add link of button that takes back to all character page 
