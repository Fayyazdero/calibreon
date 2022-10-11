import "./App.css";
import Header from "./components/header";
import Slider from "./components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer";
import "@fontsource/poppins"; // Defaults to weight 400.
import Contact from "./components/contact";


function App() {
  return (
    <div className="App">
        <Header />
        <Slider />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
