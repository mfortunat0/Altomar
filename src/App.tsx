import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Links } from "./pages/Links";
import { Contribuicoes } from "./pages/Contribuicoes";
import { FaInstagram, FaSpotify } from "react-icons/fa6";

function App() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/links">
            <li>Links</li>
          </Link>
          <Link to="/contribuicoes">
            <li>Contribuições</li>
          </Link>
          <li>Store</li>
          <li>Cultos Ao Vivo</li>
          <li>Ministerios</li>
          <li>Capelania</li>
          <li>Escola Imersão</li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="links" element={<Links />} />
        <Route path="contribuicoes" element={<Contribuicoes />} />
      </Routes>
      <footer id="localizacao">
        <hr />
        <address>
          <h2>Ubatuba</h2>
          <br />
          <br />
          <p>CENTRO</p>
          <br />
          <p>Rua Conceição, 172 - Centro. Ubatuba, SP</p>
        </address>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29284.21349330549!2d-45.10631601568342!3d-23.441459048005253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd530a811447b9%3A0x66522613e87c32c3!2sALTOMAR%20Church!5e0!3m2!1spt-BR!2sbr!4v1724442279919!5m2!1spt-BR!2sbr"
          width="400"
          height="140"
          loading="lazy"
        ></iframe>
        <div>
          <a target="_blank" href="https://www.instagram.com/igrejaaltomar/">
            <FaInstagram />
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/show/66PT3LIey6uQ121a3T1f94?si=93cb20f909934481"
          >
            <FaSpotify />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
