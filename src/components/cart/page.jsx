import React from "react";
import Header from "../header/page";
import styles from "./styles.module.css";

export default function Cart({children,props}) {
  return (
    <div className=" d-flex flex-row gap-5 align-items-center">
      <div className={`position-relative d-inline-flex align-items-center justify-center ${styles[`image1`]} variant--cart res--image`}>  
        {children}
      </div>
      <Header item={`fs-4 fw-bolder`} props={props}/>
    </div>
  );
}
