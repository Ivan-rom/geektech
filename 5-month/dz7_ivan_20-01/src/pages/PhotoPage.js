import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhoto } from "../store/photoSlice";
import Loader from "../UI/Loader/Loader";

function PhotoPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { photo, preloader } = useSelector((state) => state.photoReducer);

  useEffect(() => {
    if (photo.id != id) {
      dispatch(getPhoto(id));
    }
  }, []);

  return (
    <>
      {preloader ? (
        <Loader />
      ) : (
        <>
          <img src={photo.url} alt={photo.title} />
          <h1>{photo.title}</h1>
        </>
      )}
    </>
  );
}

export default PhotoPage;
