import React from "react";

export default function VerticalTable(props) {
  const { nameUser } = props;
  return (
    <div className="vertical-table">
      {nameUser && (
        <p
          style={{
            transform: "rotate(270deg)",
            fontSize: 10,
            textAlign: "center",
          }}
        >
          {nameUser}
        </p>
      )}
    </div>
  );
}
