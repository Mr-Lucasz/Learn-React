import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

// author: {avatar_url: "", name: "", role: ""}
//publishedAt: date
//content : string

//estado = var que vc quer que o componente monitore
//propriedade = var que vc quer que o componente receba

export function Post(props) {
  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const [comments, setComments] = useState(["Post Muito Bacana, hein?!"]);
  const [newComment, setNewComment] = useState('');

  function eventCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');

  }

  function handleNewCommentChange() {
    setNewComment(event.target.value);

  }


  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSufix: true,
  });


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} alt="Avatar" />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()} // Use props.publishedAt aqui
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {props.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a href={item.content}>{item.content}</a>
              </p>
            );
          } else {
            return null; // Handle other content types if needed
          }
        })}
      </div>
      <form onSubmit={eventCreateNewComment} className={styles.commentForm}>
        <strong>Deixa seu feedback</strong>
        <textarea name="comment" 
        placeholder="Comente aqui" 
        value={newComment}
        onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
