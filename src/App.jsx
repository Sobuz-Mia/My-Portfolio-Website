import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Profile />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
