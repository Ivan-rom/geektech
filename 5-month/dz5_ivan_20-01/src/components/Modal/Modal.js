import style from "./modal.module.css";

function Modal({ children }) {
  return (
    <div className={style.modalBack}>
      <div className={style.modalContent}>{children}</div>
    </div>
  );
}

export default Modal;
