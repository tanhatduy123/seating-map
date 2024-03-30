import React, { useEffect, useState } from "react";
import ModalAddInfo from "../Modal";
import axios from "axios";
import { API_URL } from "../../config/indext";
const getDataRoomFloor = async (props) => {
  const { setIsloading, setDataRoom } = props;
  setIsloading(true);
  await axios
    .get(`${API_URL}/seat/floor-receptionist`)
    .then((res) => {
      setIsloading(false);
      const response = res.data.data;
      setDataRoom(response);
    })
    .catch((error) => {
      setIsloading(false);
      console.log(error);
    });
};

export default function Receptionist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataRoom, setDataRoom] = useState([]);
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
            style={{ width: "100px", height: "200px" }}
          >
            <p
              style={{
                transform: "rotate(270deg)",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {dataRoom?.user?.nameUser}
            </p>
          </div>
        </div>
        <div className="position-relative">
          {dataRoom?.user?.avatar && (
            <img
              src={`https://drive.google.com/thumbnail?id=${dataRoom?.user?.avatar}`}
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
      />
    </div>
  );
}
