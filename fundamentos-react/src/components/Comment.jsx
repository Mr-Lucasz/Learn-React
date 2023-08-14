import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment(props) {


  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Mr-Lucasz.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Rodrigues</strong>
              <time
                title="21 de Junho às 22:09h"
                dateTime="2023-06-11 22:09:56"
              >
                1h átras
              </time>
            </div>
            <button onClick={handleDeleteComment} type="button" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

//como fazer o botão de deletar funcionar?
// use Props para passar a função de deletar para o componente pai
//exemplo:
// function handleDeleteComment() {
//   setDeleteComment(true);
//   props.onDeleteComment();
//   console.log("Deletando comentário");