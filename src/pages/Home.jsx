import { Navbar } from "../components/Navbar";
import { CoffeeHero } from "../components/CoffeeHero";
import ShopHero from "../components/ShopHero";

export default function Home() {
  console.log("Home page");

  return (
    
    <div className="bg-black bg-cover">
      <Navbar />
      <CoffeeHero />
      <div className="text-center pt-12 px-12">
        <div className="text-lightbrown text-xl ">Nice collections</div>
        <h1 className="text-white text-4xl mt-2">FEATURED COLLECTIONS</h1>
        <ShopHero />
      </div>
    </div>
  );
}
