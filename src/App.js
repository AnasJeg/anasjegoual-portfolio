import './App.css';
import NavBar from './component/Navbar/NavBar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './component/Home/Home';
import Education from './component/Education/Education';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Education" element={<Education/>}/>
          </Routes>
          </Router> 
        <Footer/>
    </div>
  );
}

export default App;
