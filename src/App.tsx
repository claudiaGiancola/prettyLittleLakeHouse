import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Itineraries from './pages/Itineraries/Itineraries';
import Gallery from './pages/Gallery/Gallery';
import MyNavbar from './components/navbar/MyNavbar';
import MyFooter from './components/footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="itineraries" element={<Itineraries />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
