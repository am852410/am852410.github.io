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
      <br />
      <a
        className="button"
        href="https://craft-tacos-and-beer-united.herokuapp.com/recipes"
      >
        Taco Recipe Website
      </a>
      <section />
    </div>
  );
}

export default App;
