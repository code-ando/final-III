import {Route, Routes} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Fav from "./Routes/Favs";
import "./App.css";
import { links } from "./Components/utils/links";
//import Error from "./Pages/404/Errors";


function App() {
  const { home, contacto, favs, dentista } = links;
  
  return (
      <div className="App">
          <Navbar/>
          
          <Routes>
            <Route path={home.path} element={<Home/>}/>
            <Route path={contacto.path} element={<Contact/>}/>
            <Route path={`${dentista.path}/:id`} element={<Detail/>}/>
            <Route path={favs.path} element={<Fav/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
         
          
          <Footer/>
      </div>
  );
}

export default App;
