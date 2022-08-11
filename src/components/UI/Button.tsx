import React, { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type?: "submit" | "button";
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
