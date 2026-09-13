import { Suspense, useState } from "react";
import Banner from "./Components/Banner"

import Nav from "./Components/Nav"
import type { technology } from "./types/technologyType";
import Technologies from "./Components/ExploreTechnology/TechnologyList";
import Footer from "./Components/Footer";
import TechnologyList from "./Components/ExploreTechnology/TechnologyList";

const exploreFetch=async ():Promise<technology[]>=>{
  const res=await fetch ('./data.json');
  const data=await res.json();
  // console.log(data,"Data");
  return data;
}

function App() {
  const [technologyPromise] = useState(() => exploreFetch());

  return (
    <>
      <Nav/>
      <Banner/>
            <Suspense fallback={<div>Loading...</div>}>
        <TechnologyList technologyPromise={technologyPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
