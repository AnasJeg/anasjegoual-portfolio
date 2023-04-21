import './App.css';
import NavBar from './component/Navbar/NavBar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Formations from './component/Education/Formations';
import Footer from './component/Footer/Footer';
import Experience from './component/Experience/Experience';
import Contact from './component/Contact/Contact';
import MyProfile from './component/Home/MyProfile';
import 'semantic-ui-css/semantic.min.css'
import MyCertif from './component/Certifications/MyCertif';
import Projets from './component/Projets/Projets';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MyProfile/>}/>
            <Route path="/Formations" element={<Formations/>}/>
            <Route path="/Experiences" element={<Experience/>}/>
            <Route path="/Projets" element={<Projets/>}/>
            <Route path="/Certifications" element={<MyCertif/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
          </Router> 
        <Footer/>
    </div>
  );
}

export default App;
