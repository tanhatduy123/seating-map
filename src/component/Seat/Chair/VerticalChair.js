import React from "react";

export default function VerticalChair(props) {
  const { lyingVertically } = props;
  return (
    <div className="chair">
      <img
        width={70}
        src={
          lyingVertically
            ? require("../../../assets/chair3.png")
            : require("../../../assets/chair4.png")
        }
        alt=""
      />
    </div>
  );
}
