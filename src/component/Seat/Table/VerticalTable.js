import React from "react";

export default function VerticalTable(props) {
  const { nameUser } = props;
  return (
    <div className="vertical-table">
      {nameUser && (
        <p
          style={{
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {nameUser}
        </p>
      )}
    </div>
  );
}
