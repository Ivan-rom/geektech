import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Photo from "../components/Photo/Photo";
import { getPhotos } from "../store/photosSlice";
import Loader from "../UI/Loader/Loader";

function PhotosPage() {
  const dispatch = useDispatch();
  const { photos, preloader } = useSelector((state) => state.photosReducer);

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <>
      {preloader ? (
        <Loader style={{ minHeight: "100vh" }} />
      ) : (
        <ul>
          {photos.map((photo) => (
            <Photo photo={photo} key={photo.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default PhotosPage;
