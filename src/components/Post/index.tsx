import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
};

export function Post({ author, content, publishedAt }: Props) {
  const [comments, setComments] = useState([""]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateTitle = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event?.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    const targetedTextArea = event?.target as HTMLTextAreaElement;

    if (targetedTextArea.value.trim()) {
      targetedTextArea.setCustomValidity("");
    }

    setNewCommentText(targetedTextArea.value);
  }

  function handleNewCommentInvalid() {
    const targetedTextArea = event?.target as HTMLTextAreaElement;

    targetedTextArea.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = !newCommentText;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar size="lg" src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateTitle} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          switch (line.type) {
            case "paragraph":
              return <p key={line.content}>{line.content}</p>;
            case "link":
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>
                </p>
              );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Escreva um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
