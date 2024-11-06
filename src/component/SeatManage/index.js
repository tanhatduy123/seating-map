import React, { useState } from "react";
import Chair from "./Chair";
import Table from "./Table";
import ModalAddInfo from "../Modal";

export default function SeatManage(props) {
  const { horizontal, vertical, lyingHorizontally, dataUser } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      {horizontal && (
        <div
          className="w-100 d-flex flex-column align-items-center position-relative"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        >
          {dataUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataUser?.user?.avatar}`}
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
          {dataUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataUser?.user?.avatar}`}
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
          {dataUser?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataUser?.user?.avatar}`}
              className="img-avatar-bod-vertical"
              alt="avatar"
            />
          )}

          <Table nameUser={dataUser?.name} vertical />
          <Chair vertical />
        </div>
      )}
      <ModalAddInfo
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataDetailUser={dataUser}
      />
    </div>
  );
}
