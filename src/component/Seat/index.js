import React, { useState } from "react";
import HorizontalTable from "./Table/HorizontalTable";
import HorizontalChair from "./Chair/HorizontalChair";
import VerticalTable from "./Table/VerticalTable";
import VerticalChair from "./Chair/VerticalChair";
import ModalAddInfo from "../Modal";
import { useLocation } from "react-router-dom";

export default function Seat(props) {
  const {
    horizontal,
    vertical,
    lyingHorizontally,
    lyingVertically,
    width,
    dataDetailUser,
  } = props;
  const location = useLocation();
  const path = location?.pathname?.slice(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container-seat">
      {horizontal && (
        <div
          className="horizontal-container"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {dataDetailUser?.avatar && (
            <img
              src={dataDetailUser?.avatar}
              className="img-avatar-horizontal"
              alt="avatar"
            />
          )}

          <HorizontalTable width={width} nameUser={dataDetailUser?.name} />
          <HorizontalChair />
        </div>
      )}
      {vertical && (
        <div
          className="container-vertical"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {dataDetailUser?.avatar && (
            <img
              src={dataDetailUser?.avatar}
              className="img-avatar-vertical"
              alt="avatar"
            />
          )}

          <VerticalTable nameUser={dataDetailUser?.name} />
          <VerticalChair />
        </div>
      )}
      {lyingHorizontally && (
        <div
          className="horizontal-container"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {dataDetailUser?.avatar && (
            <img
              src={dataDetailUser?.avatar}
              className="img-avatar-lyingHorizontally"
              alt="avatar"
            />
          )}

          <HorizontalChair lyingHorizontally />
          <HorizontalTable width={width} nameUser={dataDetailUser?.name} />
        </div>
      )}
      {lyingVertically && (
        <div
          className="container-vertical"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          {dataDetailUser?.avatar && (
            <img
              src={dataDetailUser?.avatar}
              className="img-avatar-lyingVertically"
              alt="avatar"
            />
          )}

          <VerticalChair lyingVertically />
          <VerticalTable nameUser={dataDetailUser?.name} />
        </div>
      )}
      <ModalAddInfo
        floor={path}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataDetailUser={dataDetailUser}
      />
    </div>
  );
}
