'use client'

import React from "react";
import styles from "./styles.module.css";
import { useTheme } from 'next-themes';

export default function Switches() {
  const {theme,setTheme} = useTheme();
  function handleMode(){
    setTheme(theme==="light"? "dark": "light");
  }
  return (
    <div className="form-check form-switch">
      <input
        className={`form-check-input ${styles[`form-height`]}`}
        type="checkbox"
        id="flexSwitchCheckDefault"
        onChange={handleMode}
        checked={theme==="light"? false: true}
      />
    </div>
  );
}
