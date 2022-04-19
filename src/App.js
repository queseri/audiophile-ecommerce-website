import { Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
//import { Routes, Route, useLocation } from 'react-router-dom'
import Header from "./audiophile/header/Header";
//import Main from "./audiophile/main/Main";
//import Aside from "./audiophile/main/Aside";
import Footer from "./audiophile/footer/Footer";
import Home from "./audiophile/pages/home/Home";
import Headphones from './audiophile/pages/headphones/Headphones';
import Earphones from './audiophile/pages/earphones/Earphones';
import Speakers from './audiophile/pages/speakers/Speakers';
import { DataProvider } from "./audiophile/context/Context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header />

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
