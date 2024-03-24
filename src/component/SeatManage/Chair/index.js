import React from "react";

export default function Chair(props) {
  const { horizontal, vertical, lyingHorizontally } = props;
  return (
    <div className="d-flex justify-content-center">
      <img
        src={require("../../../assets/chair.jpg")}
        style={{
          width: "70%",
          transform:
            (horizontal && "rotate(0deg)") ||
            (lyingHorizontally && "rotate(180deg)") ||
            (vertical && "rotate(90deg)"),
        }}
        alt=""
      />
    </div>
  );
}
