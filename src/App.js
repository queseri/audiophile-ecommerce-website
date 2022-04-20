import { Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
//import { Routes, Route, useLocation } from 'react-router-dom'

import Navigation from './audiophile/shared/Navigation';
//import Footer from "./audiophile/shared/Footer";
import Footer from './audiophile/shared/Footer';
import Home from "./audiophile/pages/home/Home";
import Headphones from './audiophile/pages/headphones/Headphones';
import Earphones from './audiophile/pages/earphones/Earphones';
import Speakers from './audiophile/pages/speakers/Speakers';
import { DataProvider } from "./audiophile/context/Context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Navigation />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="headphones" element={<Headphones />}/>
          <Route path="speakers" element={<Speakers />}/>
          <Route path="earphones" element={<Earphones />}/>
        </Routes>

        {/*
        <Main />
        <Aside />
   */}
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
