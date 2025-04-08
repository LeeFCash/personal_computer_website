import { Link } from 'react-router-dom';
import LOCK_SCREEN from './Places/lock_screen.js';
import DESKTOP from './Places/desktop.js';
import NOT_FOUND from './Places/not_found.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
	  <Route path='/' element={<LOCK_SCREEN />} />
	  <Route path='/desktop' element={<DESKTOP />} />
	  <Route path='*' element={<NOT_FOUND />} />
      </Routes>
    </>
  );
}

export default App;
