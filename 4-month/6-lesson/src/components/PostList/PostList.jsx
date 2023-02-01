import { useEffect, useState } from "react";
import API from "../../api";

function PostList() {
  const [posts, setPosts] = useState([]);
  const data = "somedata";

  useEffect(() => {
    API.get("posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{data}</li>
      ))}
    </ul>
  );
}

export default PostList;
