import "./App.css";
import Header from "./components/header";
import Slider from "./components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./pages/footer";
import "@fontsource/poppins"; // Defaults to weight 400.
import Contact from "./pages/contact";
import Team from "./pages/team";


function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Team/>
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
