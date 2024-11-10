import React, { useState } from "react";
import Chair from "./Chair";
import Table from "./Table";
import ModalAddInfo from "../Modal";
import { useLocation } from "react-router-dom";

export default function SeatManage(props) {
  const { horizontal, vertical, lyingHorizontally, dataUser } = props;
  const location = useLocation();
  const path = location?.pathname?.slice(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      {horizontal && (
        <div
          className="w-100 d-flex flex-column align-items-center position-relative"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        >
          {dataUser?.avatar && (
            <img
              src={dataUser?.avatar}
              className="img-avatar-bod-horizontal"
              alt="avatar"
            />
          )}

          <Chair horizontal />
          <Table nameUser={dataUser?.name} horizontal />
        </div>
      )}
      {lyingHorizontally && (
        <div
          className="w-100 d-flex flex-column align-items-center position-relative"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        >
          {dataUser?.avatar && (
            <img
              src={dataUser?.avatar}
              className="img-avatar-bod-lyingHorizontally"
              alt="avatar"
            />
          )}

          <Table nameUser={dataUser?.name} horizontal />
          <Chair lyingHorizontally />
        </div>
      )}
      {vertical && (
        <div
          className="d-flex align-items-center position-relative"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        >
          {dataUser?.avatar && (
            <img
              src={dataUser?.avatar}
              className="img-avatar-bod-vertical"
              alt="avatar"
            />
          )}

          <Table nameUser={dataUser?.name} vertical />
          <Chair vertical />
        </div>
      )}
      <ModalAddInfo
        floor={path}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataDetailUser={dataUser}
      />
    </div>
  );
}
