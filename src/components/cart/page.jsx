import Image from "next/image";
import React from "react";
import Header from "../header/page";
import styles from "./styles.module.css";

export default function Cart({imgUrl,children}) {
  return (
    <div className=" d-flex flex-row gap-5 align-items-center">
      <div className={`position-relative ${styles[`image1`]}`}>
        <Image src={imgUrl} alt="" fill unoptimized/>
      </div>
      <Header item={`fs-4 fw-bolder`}>{children}</Header>
    </div>
  );
}
