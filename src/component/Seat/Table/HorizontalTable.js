import React from "react";

export default function HorizontalTable(props) {
  const { width = 100 } = props;
  return (
    <div style={{ width: `${width}px` }} className="horizontal-table">
      <p>An vy</p>
    </div>
  );
}
