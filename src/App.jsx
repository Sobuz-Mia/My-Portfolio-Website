import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Profile />
      <Skills/>
    </div>
  );
}

export default App;
