import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from './pages/Home';
import Tech from './pages/Tech';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import classes from './App.module.css';

function App() {
  return (
    < BrowserRouter >
        <main className={`bg-dark d-flex flex-column text-light overflow-hidden`}>

            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/tech" element={ < Tech /> } />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
