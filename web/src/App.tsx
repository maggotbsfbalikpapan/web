import About from "./components/About";
import Benefit from "./components/Benefit";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li>
            <a href="https://maggotbsfbalikpapan.com">Beranda</a>
          </li>
        </ol>
      </nav>

      <Header />

      <main>
        <Home />
        <Benefit />
        <About />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
