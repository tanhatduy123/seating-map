import React, { useEffect, useState } from "react";
import ModalAddInfo from "../Modal";
import { getListUserReceptionist } from "../../api/route";
const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  const response = await getListUserReceptionist();
  setDataRoom(response[0]);
};

export default function Receptionist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataRoom, setDataRoom] = useState({});
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      getDataRoomFloor({ setIsloading, setDataRoom });
    }
    // eslint-disable-next-line
  }, []);
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
            style={{ width: "100px", height: "200px", cursor: "pointer" }}
          >
            <p
              style={{
                transform: "rotate(270deg)",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {dataRoom?.name}
            </p>
          </div>
        </div>
        <div className="position-relative">
          {dataRoom?.avatar && (
            <img
              src={dataRoom?.avatar}
              className="img-avatar-bod-horizontal"
              alt="avatar"
            />
          )}
          <img width={120} src={require("../../assets/chair4.png")} alt="" />
        </div>
      </div>
      <ModalAddInfo
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataDetailUser={dataRoom}
        floor="receptionist"
      />
    </div>
  );
}
