import Filler from "./components/shared/Filler";
import Hero from "./components/sections/Hero";
import NavBar from "./components/shared/NavBar";
import Explore from "./components/sections/Explore";
import Company from "./components/sections/Company";
import Support from "./components/sections/Support";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Filler />
      <Explore />
      <Company />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
