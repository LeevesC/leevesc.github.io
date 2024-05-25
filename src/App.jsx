import About from "./components/About";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <main>
      <Aside />
      <Main>
        <Nav />
        <About />
        <Resume />
        <Portfolio />
      </Main>
    </main>
  );
}

export default App;
