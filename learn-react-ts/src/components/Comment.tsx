import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";



interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
  onLikeComment?: (content: string) => void;
}

export function Comment(props: CommentProps) {

  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }


  // function handleLikeComment () {
  //   props.onLikeComment(props.content);
    
  // }
  const [countLike, setCountLike] = useState(0);
  function handleLikeComment() {
    setCountLike((state)=> {
      return state + 1;
    });
  }
//sempre que vc for atualizar uma info e essa info depende do valor anterior
//vc sempre vai usar essa tipo de função clousure


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Mr-Lucasz.png" />
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
          <button 
          onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{countLike}</span>
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