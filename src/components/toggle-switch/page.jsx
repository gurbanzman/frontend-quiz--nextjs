import React from "react";
import styles from "./styles.module.css";

export default function Switches() {
  return (
    <div className="form-check form-switch">
      <input
        className={`form-check-input ${styles[`form-height`]}`}
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
    </div>
  );
}
