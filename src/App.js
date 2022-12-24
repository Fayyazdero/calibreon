import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./pages/footer";
import "@fontsource/poppins"; // Defaults to weight 400.
import HomePage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PersonalProfile from "./pages/personalProfile";
import Services from "./pages/services";
import Team from "./pages/team";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/home/contact/:name" element={<PersonalProfile />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
