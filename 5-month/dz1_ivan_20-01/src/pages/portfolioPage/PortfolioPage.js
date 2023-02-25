import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [photos, setPhotos] = useState([]);
  const [photoId, setPhotoId] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  const urlHandler = (id) => {
    console.log(id, typeof id);
    photoId === id ? setPhotoId(0) : setPhotoId(id);
  };

  return (
    <>
      <h1>Portfolio page</h1>
      {photos.slice(0, 10).map((photo) => (
        <div key={photo.id}>
          <div style={{ display: "flex" }}>
            <img
              src={photo.url}
              alt={photo.title}
              style={{ width: "200px", height: "200px" }}
            />
            <h2>URL картинки: {photoId === photo.id && photo.url}</h2>
          </div>
          <p>{photo.title}</p>
          <button onClick={() => urlHandler(photo.id)}>Узнать url</button>
          <hr />
        </div>
      ))}
    </>
  );
}
