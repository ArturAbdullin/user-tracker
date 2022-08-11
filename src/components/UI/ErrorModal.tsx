import React, { FC } from "react";
import RDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

type ErrorModalProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

type BackdropProps = Pick<ErrorModalProps, "onConfirm">;

const Backdrop: FC<BackdropProps> = (props) => (
  <div className={styles.backdrop} onClick={props.onConfirm}></div>
);

const ModalOverlay: FC<ErrorModalProps> = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
};

const ErrorModal: FC<ErrorModalProps> = (props) => {
  return (
    <>
      {RDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {RDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};

export default ErrorModal;
