import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import {
  eMailChangeAction,
  nameChangeAction,
  sendFormAction,
  userNameChangeAction,
  webSiteChangeAction,
} from "../../redux/actions";
import styles from "./formPage.module.css";

function FormPage() {
  const {
    nameValue,
    userNameValue,
    eMailValue,
    webSiteValue,
    isOk,
    isShowing,
  } = useSelector((state) => state.formReducer);

  const dispatch = useDispatch();

  const nameChange = (e) => {
    dispatch(nameChangeAction(e.target.value));
  };

  const userNameChange = (e) => {
    dispatch(userNameChangeAction(e.target.value));
  };

  const eMailChange = (e) => {
    dispatch(eMailChangeAction(e.target.value));
  };

  const webSiteChange = (e) => {
    dispatch(webSiteChangeAction(e.target.value));
  };

  const sendForm = (e) => {
    e.preventDefault();
    dispatch(
      sendFormAction({
        name: nameValue,
        username: userNameValue,
        email: eMailValue,
        website: webSiteValue,
      })
    );
  };

  return (
    <>
      <form action="#" onSubmit={sendForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={nameValue} onChange={nameChange} id="name" />
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          value={userNameValue}
          onChange={userNameChange}
          id="userName"
        />
        <label htmlFor="eMail">e-mail:</label>
        <input
          type="e-mail"
          value={eMailValue}
          onChange={eMailChange}
          id="eMail"
        />
        <label htmlFor="webSite">website:</label>
        <input
          type="text"
          value={webSiteValue}
          onChange={webSiteChange}
          id="webSite"
        />
        <input type="submit" />
      </form>
      {isShowing && (
        <Modal>
          {isOk ? (
            <h1 style={{ color: "green" }}>Success</h1>
          ) : (
            <h1 style={{ color: "darkred" }}>Error</h1>
          )}
        </Modal>
      )}
    </>
  );
}

export default FormPage;
