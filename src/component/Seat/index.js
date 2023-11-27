import React from "react";
import HorizontalTable from "./Table/HorizontalTable";
import HorizontalChair from "./Chair/HorizontalChair";
import VerticalTable from "./Table/VerticalTable";
import VerticalChair from "./Chair/VerticalChair";

export default function Seat(props) {
  const { horizontal, vertical, lyingHorizontally, lyingVertically, width } =
    props;
  return (
    <div className="container-seat">
      {horizontal && (
        <div className="horizontal-container">
          <HorizontalTable width={width} />
          <HorizontalChair />
        </div>
      )}
      {vertical && (
        <div className="container-vertical">
          <VerticalTable />
          <VerticalChair />
        </div>
      )}
      {lyingHorizontally && (
        <>
          <HorizontalChair lyingHorizontally />
          <HorizontalTable width={width} />
        </>
      )}
      {lyingVertically && (
        <div className="container-vertical">
          <VerticalChair lyingVertically />
          <VerticalTable />
        </div>
      )}
    </div>
  );
}
