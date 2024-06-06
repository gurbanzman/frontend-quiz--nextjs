import React from "react";
import styles from "./styles.module.css";

export default function Header({item,children}) {
  return <h1 className={`${styles[`font1`]} ${item}`}>{children}</h1>;
}
