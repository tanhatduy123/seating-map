import React, { useState } from "react";
import ModalAddInfo from "../Modal";

export default function Receptionist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className="container-floor"
      style={{ flexDirection: "row", justifyContent: "start", height: "100vh" }}
    >
      <div
        className="w-100 d-flex align-items-center justify-content-end"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <div
            className="vertical-table"
            style={{ width: "100px", height: "200px" }}
          >
            <p
              style={{
                transform: "rotate(270deg)",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Huỳnh Khang
            </p>
          </div>
        </div>
        <div>
          <img width={120} src={require("../../assets/chair4.png")} alt="" />
        </div>
      </div>
      <ModalAddInfo isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
