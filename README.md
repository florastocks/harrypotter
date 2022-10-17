<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.368 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Mon Oct 17 2022 10:23:42 GMT-0700 (PDT)
* Source doc: Harry Potter README
----->


**<span style="text-decoration:underline;">Harry Potter Project 2</span>**

** **

**Goal and Timeframe:**

A pair-coded project to develop a React app using an external API in 48 hours.


The App has been deployed with Netlify. You can access it[ here](https://netlify-thinks-florastocks-is-great.netlify.app/).

[![harryp1.png](https://i.postimg.cc/mkDZzjV7/harryp1.png)](https://postimg.cc/k60PLx05)

**Technologies Used**


- React.js

- JavaScript

- HTML

- SCSS

- Git/GitHub

- Axios


**API Used**

Harry Potter Characters -[ https://hp-api.herokuapp.com/](https://hp-api.herokuapp.com/)

** **

**Process:**

**Planning and preparation**

Rokas and I first began with discussing what we both envisioned for this project and having decided we wanted a site that has photos, can filter the data, and where we can look closer at individual items, we moved onto looking through external API’s. This was a surprisingly difficult process, as many of the API’s that drew out attention either had no photos or had poor quality of photos or did not have enough data. We eventually came across the Harry Potter API, which filled our criteria. We next mapped up how we wished out site to appear.

[![harryp2.png](https://i.postimg.cc/W1MV4xjQ/harryp2.png)](https://postimg.cc/k2Xz112c)

We next created the basic frame of the site. Creating the different components: Home page; Navbar; all Characters page; Footer. I did not create a separate component for the single character page, this is because the single character page is just a different view of the all character page. I did this by using a useState called profile, which if true, then the character profile is shown. Each card on the all characters page has an onClick event, which when clicked, makes the useState true. When the view of the page is on a single character, the button to ‘go back to all character’s page’ is also an onClick event, that makes the useState false again, therefore switching the view back to the all characters cards.
```
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
```
[![harryp3.png](https://i.postimg.cc/BvbGCb2G/harryp3.png)](https://postimg.cc/zysMzJdd) 
[![harryp4.png](https://i.postimg.cc/XqchW698/harryp4.png)](https://postimg.cc/y3xnh5Qg)


We added a filter to the all characters page, to be able to view the characters by the house they are in.

We created the routes for the different pages in our App.js.

On the second, and final day of the hackathon, we added the styling, using bootstrap and flexing the cards to display them in the grid formation. I added the Harry Potter logo, by downloading the font and adding the font URL into the SCSS.
** **

**Challenges:**

- Having thought we had found an API that has photos, we realised that when we GET our data, it was only the first 30 or so characters, that had images. We fixed this by adding in a default image if there was not already an image present. 

```
<img className='w-100' src={profile.image ? profile.image : profilePlaceholder} alt={profile.name}/>
```
- As previously mentioned, we had to have the all characters and character profile as different views of the same page. This is because the API we chose, did not have an endpoint that allowed us to access the individual characters. This meant

** **

**Wins:**

Having only ever done a solo project, I found pair-coding to be helpful. We were able to live share on VS Code, so that we could both work on the same code, avoiding writing code that the other person has already worked on. We were able to split the workload fairly and finished the hackathon having covered all the MVP’s we needed to pass the hackathon project.

 

**Future Improvements:**

Having only had 48hours to produce this project from scratch, the code could benefit from some refactoring to make it more DRY.

 

**Key learnings:**

- Accessing and leveraging an external API
- Pair-coding remotely using Slack, Zoom, and VS Code live shar
