import { useEffect, useState } from "react";
import makeQuery from "../../makeQuery";
import Loading from "../Loading/Loading";
import styles from "./comments.module.css";

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isOk, setIsOk] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const url = `posts/${postId}/comments`;
    makeQuery(setComments, url, setIsOk, setIsLoading, setIsError);
  }, []);

  return (
    <ul className={styles.comments}>
      <h3 className="header">Comments:</h3>
      {isLoading && <Loading />}
      {isOk &&
        (comments ? (
          comments.map((comment) => (
            <li key={comment.id} className={styles.comment}>
              {comment.body}
            </li>
          ))
        ) : (
          <h3>Комментариев пока нет</h3>
        ))}
      {isError && <h1 style={{ color: "red" }}>Что-то пошло не так</h1>}
    </ul>
  );
}

export default Comments;
