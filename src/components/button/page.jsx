import React from "react";

export default function Button({ type,children }) {
  return <button type={type} className="custom-btn">{children}</button>;
}