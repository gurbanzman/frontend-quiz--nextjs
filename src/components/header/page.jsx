import React from "react";
import styles from "./styles.module.css";

export default function Header({item,props}) {
  return <h1 className={`${styles[`font1`]} ${item}`}>{props}</h1>;
}
