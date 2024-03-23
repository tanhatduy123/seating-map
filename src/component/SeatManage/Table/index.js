import React from "react";

export default function Table(props) {
  const { nameUser } = props;
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#b2572a",
        width: "70%",
        height: "80px",
      }}
    >
      <span style={{ color: "#fff" }}>{nameUser}</span>
    </div>
  );
}
