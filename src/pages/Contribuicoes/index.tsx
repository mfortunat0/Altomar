import style from "./index.module.css";
import backgroundOfertas from "../../assets/ofertas.jpg";
import dizimoJpg from "../../assets/pixQrCode.png";
import { FaWhatsapp } from "react-icons/fa6";

export function Contribuicoes() {
  return (
    <main className={style.ofertasMain}>
      <a href="#" className={style.goWhastsapp}>
        <FaWhatsapp />
      </a>
      <header>
        <img src={backgroundOfertas} alt="" />
        <h2>Dízimos e Ofertas</h2>
      </header>
      <section className={style.firstSection}>
        <h2>
          Adoração <br /> através <br />
          de <br />
          <span>dízimos</span> <br />e <br />
          <span>ofertas.</span>
        </h2>
        <p>
          A primeira vez que o dízimo foi mencionado na Bíblia está registrado
          em Gênesis 14 onde Abrão (ainda não era Abraão), adorou a Deus pela
          vitória obtida numa guerra entre muitos reis da época. Um sacerdote,
          chamado Melquizedeque, admirado com a destreza e nobreza de Abrão,
          veio ao seu encontro. Abrão, viu Deus na pessoa de Melquizedeque e
          entendeu que este representava Deus. Nesse encontro, honrou-o com seus
          dízimos, como se honrando a Deus.
          <br /> <br />A segunda referência de dízimos encontramos em Gênesis 32
          onde Jacó, em sua experiência com Deus e anjos dos céus, decidiu
          honrar a Deus com os dízimos.
        </p>
        <p>
          Diante desses dois acontecimentos, entendemos que, uma das formas de
          adorarmos a Deus e honrá-Lo, é entregarmos nossos dízimos e ofertas a
          Ele. E como não O vemos, entregamos aos Seus representantes que se
          tornam responsáveis diante de Deus no que tange a aplicações desses
          valores ou bens. Nós acreditamos que as ofertas são uma forma direta
          de adoração a Deus. Nós amamos demonstrar com alegria a nossa gratidão
          e devoção a Deus através de dízimos e ofertas vindos das bênçãos que
          Deus tem nos entregado.
        </p>
      </section>
      <section className={style.secondSection}>
        <div></div>
        <h2>
          “Honra ao Senhor com teus bens, e com as primícias de toda a tua
          renda;{" "}
          <span>
            assim se encherão de fartura os teus celeiros e transbordarão de
            mosto os teus lagares.
          </span>
          ”
        </h2>
        <p>Provérbios 3:9,10</p>
      </section>
      <section className={style.thirdSection}>
        <h2>
          Formas de <span>contribuição</span>
        </h2>
        <div>
          <div>
            <p>
              Pix: <b>IGREJA ALTO MAR</b>
            </p>
            <p>
              CNPJ: <b>46.922.207/0001-14</b>
            </p>
          </div>
          <img src={dizimoJpg} />
        </div>
      </section>
    </main>
  );
}
