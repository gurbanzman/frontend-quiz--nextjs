'use client'

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useTheme } from 'next-themes';

export default function Switches() {
  const {theme,setTheme} = useTheme();
  const [mounted,setMounted] = useState(false);
  const base = localStorage.getItem("theme");
  useEffect(()=> base==="light"? setMounted(false): setMounted(true),[]);
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
        checked={mounted? true: false}
      />
    </div>
  );
}
