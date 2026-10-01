import CategoryTiles from "./components/CategoryTiles";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";

export default function Home() {
  return (
    <main>
      <Hero/>
      <CategoryTiles/>
      <NewArrival/>
    </main>
  );
}
