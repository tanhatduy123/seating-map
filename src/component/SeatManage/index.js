import React, { useState } from "react";
import Chair from "./Chair";
import Table from "./Table";
import ModalAddInfo from "../Modal";

export default function SeatManage(props) {
  const { horizontal, vertical, lyingHorizontally } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      {horizontal && (
        <div
          className="w-100 d-flex flex-column align-items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <Chair horizontal />
          <Table nameUser="Cô Vân" horizontal />
        </div>
      )}
      {lyingHorizontally && (
        <div
          className="w-100 d-flex flex-column align-items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <Table nameUser="Cô Vân" horizontal />
          <Chair lyingHorizontally />
        </div>
      )}
      {vertical && (
        <div
          className="d-flex align-items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <Table nameUser="Cô Vân" vertical />
          <Chair vertical />
        </div>
      )}
      <ModalAddInfo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
