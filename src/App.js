import { Routes, Route, Outlet } from 'react-router-dom'
//import { Outlet } from 'react-router-dom'
//import { Routes, Route, useLocation } from 'react-router-dom'

import Navigation from './audiophile/shared/Navigation';
import Footer from './audiophile/shared/Footer';
import Home from "./audiophile/pages/home/Home";
import Headphones from './audiophile/pages/headphones/Headphones';
import Earphones from './audiophile/pages/earphones/Earphones';
import Speakers from './audiophile/pages/speakers/Speakers';
import Mark2 from './audiophile/pages/headphones/Mark2';
import { DataProvider } from "./audiophile/context/Context";
//import Mark1 from './audiophile/pages/headphones/Mark1';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Navigation />
        <Outlet />
        <>
          <Routes>
            
            <Route path="headphones/:id" element={<Mark2 />} />

            <Route exact path="/" element={<Home />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphones />} />
          </Routes>
        </>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
