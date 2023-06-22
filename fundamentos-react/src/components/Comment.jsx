import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Mr-Lucasz.png" alt="" />
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
            <button type="button" title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito Bom devon, parabéns!!</p>
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
