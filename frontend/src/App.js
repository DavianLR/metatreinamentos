import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Numbers from "./components/Numbers";
import About from "./components/About";
import Services from "./components/Services";
import Trainings from "./components/Trainings";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import SmoothScroll from "./components/SmoothScroll";

function App() {
    return (
        <div className="App" data-testid="app-root">
            <SmoothScroll />
            <Header />
            <main>
                <Hero />
                <Numbers />
                <About />
                <Services />
                <Trainings />
                <Gallery />
                <Partners />
                <FinalCTA />
            </main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
}

export default App;
