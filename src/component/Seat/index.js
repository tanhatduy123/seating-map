import React, { useState } from "react";
import HorizontalTable from "./Table/HorizontalTable";
import HorizontalChair from "./Chair/HorizontalChair";
import VerticalTable from "./Table/VerticalTable";
import VerticalChair from "./Chair/VerticalChair";
import ModalAddInfo from "../Modal";

export default function Seat(props) {
  const {
    horizontal,
    vertical,
    lyingHorizontally,
    lyingVertically,
    width,
    nameUser,
    imgage,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container-seat">
      {horizontal && (
        <div
          className="horizontal-container"
          onClick={() => setIsModalOpen(true)}
        >
          {imgage && <img src={imgage} className="img-avatar" alt="avatar" />}

          <HorizontalTable width={width} nameUser={nameUser} />
          <HorizontalChair />
        </div>
      )}
      {vertical && (
        <div
          className="container-vertical"
          onClick={() => setIsModalOpen(true)}
        >
          {imgage && (
            <img src={imgage} className="img-avatar-vertical" alt="avatar" />
          )}

          <VerticalTable nameUser={nameUser} />
          <VerticalChair />
        </div>
      )}
      {lyingHorizontally && (
        <div
          className="horizontal-container"
          onClick={() => setIsModalOpen(true)}
        >
          {imgage && <img src={imgage} className="img-avatar" alt="avatar" />}

          <HorizontalChair lyingHorizontally />
          <HorizontalTable width={width} nameUser={nameUser} />
        </div>
      )}
      {lyingVertically && (
        <div
          className="container-vertical"
          onClick={() => setIsModalOpen(true)}
        >
          {imgage && (
            <img src={imgage} className="img-avatar-vertical" alt="avatar" />
          )}

          <VerticalChair lyingVertically />
          <VerticalTable nameUser={nameUser} />
        </div>
      )}
      <ModalAddInfo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
