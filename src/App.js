import { Routes, Route, Outlet } from 'react-router-dom'
//import { Outlet } from 'react-router-dom'
//import { Routes, Route, useLocation } from 'react-router-dom'

import Navigation from './audiophile/shared/Navigation';
import Footer from './audiophile/shared/Footer';
import Home from "./audiophile/pages/home/Home";
import Headphones from './audiophile/pages/headphones/Headphones';
import Earphones from './audiophile/pages/earphones/Earphones';
import Speakers from './audiophile/pages/speakers/Speakers';
import DetailsComponent from './audiophile/pages/headphones/DetailsComponent';
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
            <Route path="headphones/:id" element={<DetailsComponent />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="earphones/:id" element={<DetailsComponent />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path="speakers/:id" element={<DetailsComponent />} />
            <Route path="speakers" element={<Speakers />} />
            <Route exact path="/" element={<Home />} />   
           
          </Routes>
        </>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
