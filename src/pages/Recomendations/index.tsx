import { useState } from 'react';
import styles from './style.module.scss'
import { FormRecomendations } from '../../components/FormRecomendations/FormRecomendations';

type Recomendation = {
  title: string;
  description: string;
  rating?: any;
  artist: string;
}

const Recomendations = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [artist, setArtist] = useState("")

  const recomendation: Recomendation[] = [
    {
      title: title,
      description: description,
      artist: artist,
    }
  ]
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="https://cdn.create.vista.com/api/media/small/154450598/stock-photo-sound-waves-colorful-light-audio" alt="" />
        <h1>Recomende e tenha recomendações das melhores músicas do momento</h1>
      </div>

      <div className={styles.recomendationsCard}>
        <FormRecomendations 
          artist={artist}
          setArtist={setArtist}
          description={description}
          setDescription={setDescription}
          title={title}
          setTitle={setTitle}
        />
      </div>
    </div>
  )
}

export default Recomendations;
