import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Contact from './Page/Contact/Contact';
import Header from './Component/Header/Header';
import Weather from './Component/Weather/Weather';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Weather/>
    </>
  )
}

export default App
