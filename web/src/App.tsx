import {
  About,
  Benefit,
  Contact,
  Education,
  Footer,
  Header,
  Home,
} from "./components";

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
