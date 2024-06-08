import React from "react";

export default function Button({ type,arr, children }) {
  return <button type={type} className=" custom-btn" disabled={arr?false: true}>{children}</button>;
}