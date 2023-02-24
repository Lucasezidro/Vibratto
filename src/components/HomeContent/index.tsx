import React from "react";
import CardHome from "../Card";
import { FaMusic, FaMicrophone, FaGuitar, FaHeadphones } from "react-icons/fa";
import styles from "./style.module.scss";

const HomeContent = () => {
  return (
    <div className={styles.cards}>
      <CardHome
        title="Aprenda mais sobre teoria musical!"
        description="O objetivo é que você aprenda mais sobre a historia da musica, leitura de cifra e partitura, e muito mais!"
        href="/learn"
        shadow="#06d6a0"
        linkColor="#06d6a0"
      >
        <FaMusic style={{ color: "#06d6a0" }} />
      </CardHome>

      <CardHome
        title="Remende suas músicas preferidas!"
        description="Este é um espaço para você trazer reacomedações e obter recomendações de outras pessoas de diversos tipos de músicas!"
        href="/recomendations"
        shadow="#9d4edd"
        linkColor="#9d4edd"
      >
        <FaHeadphones style={{ color: "#9d4edd" }} />
      </CardHome>

      <CardHome
        title="Quantos instrumentos musicais você conhece ?"
        description="Conheça os mais diversos tipos de instrumentos musicais e seus sons!"
        href="/instrumentMusic"
        shadow="#FDE74C"
        linkColor="#FDE74C"
      >
        <FaGuitar style={{ color: "#FDE74C" }} />
      </CardHome>

      <CardHome
        title="Veja os artistas mais badalados do momento!"
        description="Neste espaço você noticias sobre o mundo da música!"
        href="/artist"
        shadow="#3B60E4"
        linkColor="#3B60E4"
      >
        <FaMicrophone style={{ color: "#3B60E4" }} />
      </CardHome>
    </div>
  );
};

export default HomeContent;
