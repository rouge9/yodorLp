import Filler from "./components/shared/Filler";
import Hero from "./components/sections/Hero";
import NavBar from "./components/shared/NavBar";
import Explore from "./components/sections/Explore";

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Filler />
      <Explore />
    </div>
  );
}

export default App;
