import React, { useState } from "react";
import HorizontalTable from "./Table/HorizontalTable";
import HorizontalChair from "./Chair/HorizontalChair";
import VerticalTable from "./Table/VerticalTable";
import VerticalChair from "./Chair/VerticalChair";
import ModalAddInfo from "../Modal";

export default function Seat(props) {
  const { horizontal, vertical, lyingHorizontally, lyingVertically, width } =
    props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container-seat">
      {horizontal && (
        <div
          className="horizontal-container"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="https://raonhanh365.vn/pictures/detail/2022/08/16/3858486447586122240.jpg"
            className="img-avatar"
            alt="avatar"
          />
          <HorizontalTable width={width} />
          <HorizontalChair />
        </div>
      )}
      {vertical && (
        <div
          className="container-vertical"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="https://raonhanh365.vn/pictures/detail/2022/08/16/3858486447586122240.jpg"
            className="img-avatar-vertical"
            alt="avatar"
          />
          <VerticalTable />
          <VerticalChair />
        </div>
      )}
      {lyingHorizontally && (
        <div
          className="horizontal-container"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="https://raonhanh365.vn/pictures/detail/2022/08/16/3858486447586122240.jpg"
            className="img-avatar"
            alt="avatar"
          />
          <HorizontalChair lyingHorizontally />
          <HorizontalTable width={width} />
        </div>
      )}
      {lyingVertically && (
        <div
          className="container-vertical"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="https://raonhanh365.vn/pictures/detail/2022/08/16/3858486447586122240.jpg"
            className="img-avatar-vertical"
            alt="avatar"
          />
          <VerticalChair lyingVertically />
          <VerticalTable />
        </div>
      )}
      <ModalAddInfo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
