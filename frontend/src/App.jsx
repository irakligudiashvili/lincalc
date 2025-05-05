import { useState } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { CalculationContext } from './contexts/CalculationContext';
import MobileSidebar from './components/MobileSIdebar';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCalculation, setSelectedCalculation] = useState();

  return (
    <CalculationContext.Provider value={{
      showMenu,
      setShowMenu,
      selectedCalculation,
      setSelectedCalculation
    }}>
      <div>
        <nav className='bg-primary d-flex flex-row justify-content-between align-items-center mx-auto mt-3 px-4 rounded-4 container'>
          <Link to="/" id="home" className='my-2 fs-1 link-underline link-underline-opacity-0 text-light'>linCalc()</Link>
          {/* <Link to="/about" className='d-none d-md-block link-underline link-underline-opacity-0 text-light fs-5'>About</Link> */}

          <div className="d-md-none position-relative">
            <button className="btn btn-light" onClick={() => setShowMenu(prev => !prev)}>
              ☰
            </button>

            {showMenu && (
              <div className="position-absolute end-0 mt-2 bg-light rounded shadow p-2">
                <button className="btn btn-sm btn-outline-primary w-100 p-0" onClick={() => setShowMenu(false)}>
                  <Link to="/about" className="text-decoration-none btn btn-sm text-start w-100 d-block">About</Link>
                </button>

                <MobileSidebar />
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </CalculationContext.Provider>
  );
}

export default App;
