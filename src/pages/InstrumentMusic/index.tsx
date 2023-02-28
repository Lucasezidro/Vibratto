import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { Instruments } from "../../utils/instruments";
import { useNavigate } from "react-router-dom";

interface Instrument {
  id: number;
  title: string;
  description: string;
  amount: string;
  img: string;
}

const InstrumentMusic = () => {
  const [search, setSearch] = useState<string>("");
  const [instruments, setInstrument] = useState<Instrument[]>([]);

  const history = useNavigate()

  useEffect(() => {
    setInstrument(Instruments);
  }, []);

  const filteredInstrument =
    search.length > 0
      ? instruments.filter((instrument) =>
          instrument.title
            .toLowerCase()
            .replace(/[aáàãäâ]/,'a')
            .replace(/[eéèëê]/,'e')
            .replace(/[iíìïî]/,'i')
            .replace(/[oóòõöô]/,'o')
            .replace(/[uúùüû]/,'u')
            .includes(search)
        )
      : [];

  return (
    
    <div className={styles.container}>
      <button onClick={() => history('/')}>Voltar</button>
      <h1>Escolha um instrumento Musical</h1>

      <input
        type="search"
        className={styles.search}
        placeholder="Instrumentos musicais"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search.length > 0 ? (
        <div className={styles.filteredResults}>
          {filteredInstrument.slice(0, 2).map((instrument) => {
            return (
              <div key={instrument.id} className={styles.items}>
                <h1>{instrument.title}</h1>
                <img src={instrument.img} alt="Instrument Image" />

                <span><strong>Descrição:</strong> <br />{instrument.description}</span>
                <span><strong>Valor:</strong><br />{instrument.amount}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.filteredResults}>
          {instruments.slice(0, 2).map((instrument) => {
            return (
              <div key={instrument.id} className={styles.items}>
                <h1>{instrument.title}</h1>
                <img src={instrument.img} alt="Instrument Image" />

                <span><strong>Descrição:</strong> <br />{instrument.description}</span>
                <span><strong>Valor:</strong><br />{instrument.amount}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InstrumentMusic;
