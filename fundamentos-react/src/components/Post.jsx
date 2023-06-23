
import { Avatar } from "./Avatar";
import  {Comment}  from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src="https://github.com/Mr-Lucasz.png"
            alt="Avatar"
          />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>QA Analyst</span>
          </div>
        </div>
        <time title="21 de Junho às 22:09h" dateTime="2023-06-11 22:09:56">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="https://github.com/Mr-Lucasz/Learn-React">#novoprojeto </a>
          {""}
          <a href="https://www.rocketseat.com.br/nlw">#nlw </a>
          {""}
          <a href="https://www.rocketseat.com.br/">#rocketseat </a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixa seu feedback</strong>
        <textarea placeholder="Comente aqui" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
