import style from "./index.module.css";
import backgroundImageLink from "../../assets/links.jpg";
import backgroundImageLink2 from "../../assets/link2.jpg";

export function Links() {
  return (
    <main className={style.linkMain}>
      <header>
        <img src={backgroundImageLink} />
        <h2>LINKs</h2>
      </header>
      <section>
        <div>
          <h3>
            Sobre os <br />
            <span>LINKs</span>
          </h3>
          <p>
            Os LINKs são grupos de conexão que se reúnem como família nos lares,
            buscando a presença de Deus e compartilhando testemunhos de forma
            presencial ou online. Neste ambiente a cultura do reino é
            desenvolvida e a vida cristã é encorajada de forma intencional.
          </p>
        </div>
        <div>
          <img src={backgroundImageLink2} alt="" />
          <a href="" className={style.headerButton}>
            Quero encontrar um <span>LINK</span>
          </a>
        </div>
      </section>
    </main>
  );
}
