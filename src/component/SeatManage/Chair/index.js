import React from "react";

export default function Chair(props) {
  const { horizontal, vertical } = props;
  return (
    <div className="w-100 d-flex justify-content-center">
      <img
        src={require("../../../assets/chair.jpg")}
        style={{
          width: "30%",
          transform:
            (horizontal && "rotate(0deg)") || (vertical && "rotate(180deg)"),
        }}
        alt=""
      />
    </div>
  );
}
