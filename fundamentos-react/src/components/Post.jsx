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
  const [newComment, setNewComment] = useState("");
  //essas duas const comments e newComment são estados do componente
  //eles são variáveis que o componente vai monitorar
  //e toda vez que o estado do componente alterar, o componente vai renderizar novamente

  function eventCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
    //essa function vai ser chamada toda vez que o usuário clicar no botão
    //e vai alterar o estado do componente
    // e vai renderizar novamente o componente
  }
  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
    // essa function vai ser chamada toda vez que o usuário digitar algo no input
    // e vai alterar o estado do componente
    // e vai renderizar novamente o componente

  }
  function deleteComment(commentToDelete) {
    //imutabilidade
    //as var não sofrem alterações, vc cria uma nova var com o valor que vc quer
    const commentsWithoutDeleted = comments.filter(comment => { 
      return comment !== commentToDelete;
    })
    // esse const commentsWithoutDeleted é um novo array, que não tem o commentToDelete
    //ele vai filtrar todos os comments, e vai retornar todos os comments que forem diferentes do commentToDelete
    //e vai retornar um novo array, que não tem o commentToDelete
    // e o setComments vai alterar o estado do componente, e vai renderizar novamente o componente
    setComments(commentsWithoutDeleted);
  }
  function handleNewCommentInvalid() {
   event.target.setCustomValidity("O comentário não pode ser vazio");
  }
  const isNewComnmentEmpty = newComment.length === 0;

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
      <form onSubmit={eventCreateNewComment}  className={styles.commentForm}>
        <strong>Deixa seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Comente aqui"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required={true}
        />
        <footer>
          <button type="submit" disabled={isNewComnmentEmpty } >Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
//Key no React
//Toda vez que vc tem um array de elementos que vc vai renderizar na tela, vc precisa passar uma key para cada elemento
//Quando o estado altera, o React vai renderizar novamente o componente, e ele precisa saber qual elemento ele precisa alterar
// Quando a propriedade do componente muda, o React renderiza novamente o componente
//Quando um Componente Pai Renderiza novamente, todos os seus componentes filhos são renderizados novamente
//São os 3 principais fluxos de renderização do React
// Isso não pode ser lento? Pode sim!
// Mas é por isso que usamos a Key, para que o React saiba qual elemento ele precisa alterar
// Porque não posso usar o Indice do Array como Key?
// Porque o React não consegue diferenciar um elemento do outro, se eles tiverem o mesmo indice
// Por isso, é importante que a Key seja única
