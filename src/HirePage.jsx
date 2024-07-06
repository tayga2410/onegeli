import "./App.css";
import HireHero from "./components/hireComponent/HireHero";
import About from "./components/about/About";
import HireOrder from "./components/hireOrder/HireOrder";

function HirePage() {
  return (
    <div>
      <HireHero />
      <About />
      <HireOrder />
    </div>
  );
}

export default HirePage;
