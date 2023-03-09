import { Link } from "react-router-dom";

function Photo({ photo }) {
  return (
    <li>
      <Link to={`/photo/${photo.id}`}>
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </Link>
    </li>
  );
}

export default Photo;
