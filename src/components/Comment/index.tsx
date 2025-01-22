import { Avatar } from "../Avatar";
import styles from "./styles.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/trybrito.png"
        hasBorder={false}
        hasOutline={false}
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Brito</strong>&nbsp;
              <span>(você)</span>
              <time title="19 de janeiro às 20:40" dateTime="2025-01-19 20:40">
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Diegão, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
