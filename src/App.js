import { useEffect } from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Navigation from './audiophile/shared/Navigation';
import Footer from './audiophile/shared/Footer';
import Home from "./audiophile/pages/home/Home";
import Headphones from './audiophile/pages/headphones/Headphones';
import Earphones from './audiophile/pages/earphones/Earphones';
import Speakers from './audiophile/pages/speakers/Speakers';
import DetailsComponent from './audiophile/pages/Detailed/DetailsComponent';
import Checkout from './audiophile/pages/checkout/Checkout';
import { DataProvider } from "./audiophile/context/Context";
import "react-toastify/ReactToastify.min.css";

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
   
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <DataProvider>
      <div className="App">
      <ToastContainer limit={1}/>
        <Navigation />
        <Outlet />
        <>
          <ScrollToTop />
          <Routes>

            <Route path="headphones/:id" element={<DetailsComponent />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="earphones/:id" element={<DetailsComponent />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path="speakers/:id" element={<DetailsComponent />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="checkout" element={<Checkout />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<main style={{ padding: "1rem", marginBlock: "2rem" }}>
              <p style={{ marginBlock: "2rem" }}>There's nothing here!</p>
            </main>
            }
            />

          </Routes>
        </>
        <Footer />
        
      </div>
    </DataProvider>
  );
}

export default App;
