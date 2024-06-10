import React from "react";
import Switches from "../toggle-switch/page";
import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import styles from "./styles.module.css";


export default function Navbar({ children }) {
  return (
    <nav className=" container-md py-5 position-relative z-3">
      <div className={`d-flex items-center justify-content-between ${children? "flex-row": "flex-row-reverse"}`}>
        {children}
        <div className={` d-flex align-items-center gap-4 ${styles[`custom--toggle_section`]}`}>
          <IoSunnyOutline />
          <Switches />
          <GoMoon />
        </div>
      </div>
    </nav>
  );
}