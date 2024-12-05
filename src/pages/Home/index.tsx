import style from "./index.module.css";
import backgroundVideoUrl from "../../assets/background.mp4";
import videoOne from "../../assets/video1.mp4";
import videoTwo from "../../assets/video2.mp4";
import videoThree from "../../assets/video3.mp4";
import spotifyLogo from "../../assets/spotify.svg";
import widePhoto from "../../assets/widephoto.jpg";
import storm from "../../assets/storm.jpg";
import lighthouse from "../../assets/lighthouse.jpg";
import altomar from "../../assets/altomar.jpg";
import kids from "../../assets/kids.jpg";
import barquinho from "../../assets/barquinho.mp4";
import { FaAngleUp } from "react-icons/fa6";

export function Home() {
  return (
    <main id="home" className={style.homeMain}>
      <a href="#home" className={style.goHome}>
        <FaAngleUp />
      </a>
      <header>
        <a href="#programacao" className={style.headerButton}>
          Horários dos cultos
        </a>
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideoUrl} />
        </video>
      </header>
      <section className={style.homeSectionSpotify}>
        <img src={spotifyLogo} />
        <div>
          <h2>
            Ouça agora nossas últimas mensagens no
            <span> Spotify</span>
          </h2>
          <a
            target="_blank"
            href="https://open.spotify.com/show/66PT3LIey6uQ121a3T1f94?si=93cb20f909934481"
          >
            Conferir
          </a>
        </div>
      </section>
      <section className={style.homeSectionVideos}>
        <video autoPlay loop muted playsInline>
          <source src={videoTwo} />
        </video>
        <video autoPlay loop muted playsInline>
          <source src={videoOne} />
        </video>
        <video autoPlay loop muted playsInline>
          <source src={videoThree} />
        </video>
      </section>
      <section className={style.homeSectionVersiculo}>
        <h2>
          "Esses viram as obras do <b>SENHOR</b>, seus milagres em alto-mar"{" "}
          <span>Salmos 107:24 </span>
        </h2>
        <div>
          <video autoPlay loop muted playsInline>
            <source src={barquinho} />
          </video>
        </div>
      </section>
      <section className={style.homeSectionWidePhoto}>
        <img src={widePhoto} />
      </section>
      <section id="programacao" className={style.homeSectionSchedule}>
        <h2>
          Consulte nossa <span>Programação</span>
        </h2>
        <div>
          <img src={storm} />
          <div>
            <p>
              O Storm é um ministério da igreja Altomar focado em adolescentes
              dos 12 aos 17 anos.
            </p>
            <h3>
              Sexta-Feira <br />
              <span>as</span> 20H
            </h3>
          </div>
        </div>
        <div>
          <img src={lighthouse} />
          <div>
            <p>
              O lighthouse é um ministério da igreja Altomar focado em jovens a
              partir dos 18 anos.
            </p>
            <h3>
              Sabado
              <br />
              <span>as</span> 20H
            </h3>
          </div>
        </div>
        <div>
          <span>
            <img src={altomar} />
            <img src={kids} />
          </span>
          <div>
            <p>Culto em familia</p>
            <h3>
              Domingo
              <br />
              <span>as</span> 10H <span> &</span> 19H
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
