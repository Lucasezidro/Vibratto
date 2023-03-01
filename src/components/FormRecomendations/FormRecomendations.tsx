import styles from './style.module.scss'

type FormProps = {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  artist: string
  setArtist: React.Dispatch<React.SetStateAction<string>>
}

export function FormRecomendations({
  title,
  setTitle,
  description,
  setDescription,
  artist,
  setArtist
}: FormProps) {
  return (
    <form className={styles.form}>
      <h3>Recomende suas músicas</h3>

      <label htmlFor="title">Qual o nome da música ?</label>
      <input
        id="title"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">
        Agora fala um pouco sobre o porque você gosta dessa música!
      </label>
      <input
        id="description"
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="artist">Quem canta essa música ?</label>
      <input
        id="artist"
        type="text"
        placeholder="Artista"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      <button>Publicar Agora</button>
    </form>
  );
}
