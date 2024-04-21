import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Whoweare from './components/Whoweare';
import Whereweare from './components/Whereweare';
import Whatwedo from './components/Whatwedo';
import Ourproducts from './components/Ourproducts';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {
  const Contact = React.lazy(() => import('./components/Contact'));

  return (
    <BrowserRouter>
        <Nav />
    <Routes>
  
      <Route element={<Home />} path="/" />

      <Route
        element={
          <Suspense>
            <Contact />
          </Suspense>
        }
        path="/contact"
      />

      <Route
        element={
          <Suspense>
            <Ourproducts />
          </Suspense>
        }
        path="/ourproducts"
      />

      <Route
        element={
          <Suspense>
            <Whatwedo />
          </Suspense>
        }
        path="/whatwedo"
      />

      <Route
        element={
          <Suspense>
            <Whereweare />
          </Suspense>
        }
        path="/whereweare"
      />

      <Route
        element={
          <Suspense>
            <Whoweare />
          </Suspense>
        }
        path="/whoweare"
      />

    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
