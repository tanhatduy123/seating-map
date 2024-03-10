import React from "react";

export default function HorizontalTable(props) {
  const { width = 100, nameUser } = props;
  return (
    <div
      style={{ width: `${width}px`, textAlign: "center", fontSize: 13 }}
      className="horizontal-table"
    >
      {nameUser && <p>{nameUser}</p>}
    </div>
  );
}
