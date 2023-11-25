import React from "react";

export default function HorizontalChair(props) {
  const { lyingHorizontally } = props;
  return (
    <div className="chair">
      <img
        width={70}
        src={
          lyingHorizontally
            ? require("../../../assets/chair2.png")
            : require("../../../assets/chair1.png")
        }
        alt=""
      />
    </div>
  );
}
