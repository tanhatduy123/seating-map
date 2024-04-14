import React, { useEffect, useState } from "react";
import { Modal, Select } from "antd";
import axios from "axios";
import { API_URL } from "../../config/indext";

const ModalChange = (props) => {
  const { setOpenModalChange, openModalChange, idRoom } = props;
  const [dataFloor, setDataFloor] = useState([]);
  const [defautFloors, setDefaultFloors]=useState(null)

  const ApiGetAllFloor = async () => {
    try {
      await axios.get(`${API_URL}/floor`).then((res) => {
        if (res) {
          setDataFloor(res.data.data);
          setDefaultFloors(res.data.idFloor.toString())
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setOpenModalChange(false);
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  useEffect(() => {
    ApiGetAllFloor();
  }, []);



  return (
    <Modal
      open={openModalChange}
      closeIcon={
        <img
          width={20}
          src={require("../../assets/icon-close.png")}
          alt=""
          onClick={handleCancel}
        />
      }
    >
      <div>change</div>

      <Select
        showSearch
        defaultValue={defautFloors}
        placeholder="Chọn Tầng"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={dataFloor.map((element) => {
          return {
            value: element.idFloor,
            label: element.nameFloor,
          };
        })}
      />
    </Modal>
  );
};

export default ModalChange;
