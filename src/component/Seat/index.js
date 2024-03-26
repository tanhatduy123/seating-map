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
    dataDetailUser,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const admin = sessionStorage.getItem("admin");

  console.log("admi", admin);
  return (
    <div className="container-seat">
      {horizontal && (
        <div
          className="horizontal-container"
          onClick={() => {
            if (admin) {
              setIsModalOpen(true);
            }
          }}
        >
          {dataDetailUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataDetailUser?.user?.avatar}`}
              className="img-avatar"
              alt="avatar"
            />
          )}

          <HorizontalTable
            width={width}
            nameUser={dataDetailUser?.user?.nameUser}
          />
          <HorizontalChair />
        </div>
      )}
      {vertical && (
        <div
          className="container-vertical"
          onClick={() => {
            if (admin) {
              setIsModalOpen(true);
            }
          }}
        >
          {dataDetailUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataDetailUser?.user?.avatar}`}
              className="img-avatar-vertical"
              alt="avatar"
            />
          )}

          <VerticalTable nameUser={dataDetailUser?.user?.nameUser} />
          <VerticalChair />
        </div>
      )}
      {lyingHorizontally && (
        <div
          className="horizontal-container"
          onClick={() => {
            if (admin) {
              setIsModalOpen(true);
            }
          }}
        >
          {dataDetailUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataDetailUser?.user?.avatar}`}
              className="img-avatar"
              alt="avatar"
            />
          )}

          <HorizontalChair lyingHorizontally />
          <HorizontalTable
            width={width}
            nameUser={dataDetailUser?.user?.nameUser}
          />
        </div>
      )}
      {lyingVertically && (
        <div
          className="container-vertical"
          onClick={() => {
            if (admin) {
              setIsModalOpen(true);
            }
          }}
        >
          {dataDetailUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataDetailUser?.user?.avatar}`}
              className="img-avatar-vertical"
              alt="avatar"
            />
          )}

          <VerticalChair lyingVertically />
          <VerticalTable nameUser={dataDetailUser?.user?.nameUser} />
        </div>
      )}
      <ModalAddInfo
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataDetailUser={dataDetailUser}
      />
    </div>
  );
}
