import { Suspense, useState } from "react";
import Banner from "./Components/Banner"

import Nav from "./Components/Nav"
import type { technology } from "./types/technologyType";

import Footer from "./Components/Footer";
import TechnologyList from "./Components/ExploreTechnology/TechnologyList";
import AddedStack from "./Components/ExploreTechnology/AddedStack";

const exploreFetch = async (): Promise<technology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();

  return data;
}

function App() {
  const [technologyPromise] = useState(() => exploreFetch());
  const [stack, setStack] = useState<technology[]>([])
  const handleAdd = (tech: technology) => {
    setStack((prev) => [...prev, tech]);
  }
  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };
  const handleRemoveAll = () => {
    setStack([])
  }
  return (
    <>
      <Nav />
      <Banner />
      <div className="container mx-auto">
      <h2 className="font-bold text-[32px] pt-20 ">Explore the 
        <span className="text-fuchsia-700 "> Technologies</span>
      </h2></div>
      <p className="  container mx-auto p-1">Pick one technology per category to build your ideal stack.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <TechnologyList technologyPromise={technologyPromise}
          stack={stack}
          onAdd={handleAdd} />
      </Suspense>
      <AddedStack
        stack={stack}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}>
      </AddedStack>
      <Footer />
    </>
  )
}

export default App
