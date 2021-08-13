import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Antonio
        <img src={"a73244b4779c4f45a102801396a4568c.png"} class="headerpic" />
        Mendoza
      </header>
      <div className="Tonypic">
        <img src={"00019487-3BC1-4483-8018-96AE6A06799D_1_201_a.jpeg"} />
      </div>
      <section>
        <p>
          My name is Antonio Mendoza and I am a Software Engineer looking to get
          a jumpstart on my coding career. I am always finding ways to continue
          to challenge myself and express my creativity wether it is through
          painting a piece of art, creating a recipe, or developing a website. I
          am dedicated to what I do and I will always give you the best of my
          abilities. Always learning always growing.
        </p>
        <h2>Profiles and Resume</h2>
        <a
          href="https://www.linkedin.com/in/antoniomendoza1234561944"
          class="button"
        >
          Linkedin Profile
        </a>
        <br />
        <a className="button" href="https://github.com/am852410">
          Github Profile
        </a>
        <br />
        <a
          className="button"
          href="https://drive.google.com/file/d/1lGHC_3tJO85GCthHwiy_HMlGUwhtNB4o/view?usp=sharing"
        >
          Resume
        </a>
      </section>
      <h2>Projects</h2>
      <a
        className="button"
        href="https://peacemakerdogwalkingcompany.herokuapp.com/"
      >
        Dog Walking Website
      </a>
      <br />
      <p>
        I built a full stack application for a dog walking business providing
        the services offered, user log in and sign up, and scheduling walks. I
        used Javascript, CSS on Front End and Python in the Backend. This full
        stack app was deployed in Heroku to make it a live website.
      </p>
      <br />
      <a
        className="button"
        href="https://craft-tacos-and-beer-united.herokuapp.com/recipes"
      >
        Taco Recipe Website
      </a>
      <br />
      <p>
        I built a full stack application using Javascript, CSS, and EJS. The
        purpose of the app is to invite people from all over to post their taco
        recipes paired with their choice of craft beer. In the app you will find
        our latest taco recipe submissions. This full stack app was deployed in
        Heroku to make it a live website.
      </p>
      <br />
      <a className="button" href="https://am852410.github.io/Project-1/">
        Loteria (Bingo) Game
      </a>
      <br />
      <p>
        I built a one player Loteria (Bingo) Game using Javascript and CSS where
        the user clicks a button to start the game and redirects the user to a
        new page that generates a new game card each time the game is played.
        This full stack app was deployed on Github Pages to make it a live
        website.
      </p>

      <section />
    </div>
  );
}

export default App;
