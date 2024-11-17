import { db, storage } from "../firebase/config";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { dataAllFloor } from "../helpers/dataHelper";
const UsersFloorSixCollectionRef = collection(db, "user-floor-six");
const UsersFloorSevenCollectionRef = collection(db, "user-floor-seven");
const UsersFloorEightCollectionRef = collection(db, "user-floor-eight");
const UsersFloorNineCollectionRef = collection(db, "user-floor-nine");
const UsersFloorTenCollectionRef = collection(db, "user-floor-ten");
const UsersReceptionistCollectionRef = collection(db, "user-letan");
const UsersTranNaoCollectionRef = collection(db, "user-floor-trannao");
export const getListUserReceptionist = async () => {
  try {
    const data = await getDocs(UsersReceptionistCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};

export const getListUserFloorSix = async () => {
  try {
    const data = await getDocs(UsersFloorSixCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};

export const getListUserFloorSeven = async () => {
  try {
    const data = await getDocs(UsersFloorSevenCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};
export const getListUserFloorEight = async () => {
  try {
    const data = await getDocs(UsersFloorEightCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};
export const getListUserFloorNine = async () => {
  try {
    const data = await getDocs(UsersFloorNineCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};
export const getListUserFloorTen = async () => {
  try {
    const data = await getDocs(UsersFloorTenCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};
export const getListUserFloorTranNao = async () => {
  try {
    const data = await getDocs(UsersTranNaoCollectionRef);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (floor, props) => {
  if (floor === "receptionist") {
    const dataList = await getListUserReceptionist();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-letan", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }

  if (floor === "tran-nao") {
    const dataList = await getListUserFloorTranNao();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-floor-trannao", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }
  if (floor === "floor-six") {
    const dataList = await getListUserFloorSix();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-floor-six", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }
  if (floor === "floor-seven") {
    const dataList = await getListUserFloorSeven();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-floor-seven", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }
  if (floor === "floor-eighth") {
    const dataList = await getListUserFloorEight();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-floor-eight", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }
  if (floor === "floor-ninth") {
    const dataList = await getListUserFloorNine();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-floor-nine", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }
  if (floor === "floor-ten") {
    const dataList = await getListUserFloorTen();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;

    if (idUser) {
      await updateDoc(doc(db, "user-floor-ten", idUser), props);
      return {
        status: 200,
        message: "Update success",
      };
    }
  }
  return {
    status: 404,
    message: "Not found",
  };
};
export const UploadImges = async (base64) => {
  try {
    const storageRef = ref(storage, `image/${Math.random()}`);
    const metadata = {
      contentType: "image/png",
    };

    // Tải lên hình ảnh và đợi cho việc tải lên hoàn thành
    await uploadString(storageRef, base64?.split(",")[1], "base64", metadata);

    // Lấy URL của hình ảnh đã tải lên và trả về
    const url = await getDownloadURL(storageRef);
    return {
      status: 200,
      url: url,
    };
  } catch (error) {
    console.log("error", error);
    return null; // Trả về null trong trường hợp có lỗi
  }
};

export const ChangeSeat = async (props) => {
  const { idCurrent, idChange, floorCurrent, floorChange } = props;
  let dataUserCurrent = {};
  let dataUserChange = {};
  // get Detail User Room Current
  if (idCurrent && floorCurrent) {
    const id = dataAllFloor.find((item) => item.value === floorCurrent)?.id;
    if (id == 1) {
      const response = await getListUserFloorTranNao();
      dataUserCurrent = response.find((item) => item.id === idCurrent);
    }
    if (id == 2) {
      const response = await getListUserFloorSix();
      dataUserCurrent = response.find((item) => item.id === idCurrent);
    }
    if (id == 3) {
      const response = await getListUserFloorSeven();
      dataUserCurrent = response.find((item) => item.id === idCurrent);
    }
    if (id == 4) {
      const response = await getListUserFloorEight();
      dataUserCurrent = response.find((item) => item.id === idCurrent);
    }
    if (id == 5) {
      const response = await getListUserFloorNine();
      dataUserCurrent = response.find((item) => item.id === idCurrent);
    }
    if (id == 6) {
      const response = await getListUserFloorTen();
      dataUserCurrent = response.find((item) => item.id === idCurrent);
    }
  }
  //get Detail User Change
  if (idChange && floorChange) {
    const id = dataAllFloor.find((item) => item.value === idChange)?.id;
    if (id == 1) {
      const response = await getListUserFloorTranNao();
      dataUserChange = response.find((item) => item.seat === floorChange);
    }
    if (id == 2) {
      const response = await getListUserFloorSix();
      dataUserChange = response.find((item) => item.seat === floorChange);
    }
    if (id == 3) {
      const response = await getListUserFloorSeven();
      dataUserChange = response.find((item) => item.seat === floorChange);
    }
    if (id == 4) {
      const response = await getListUserFloorEight();
      dataUserChange = response.find((item) => item.seat === floorChange);
    }
    if (id == 5) {
      const response = await getListUserFloorNine();
      dataUserChange = response.find((item) => item.seat === floorChange);
    }
    if (id == 6) {
      const response = await getListUserFloorTen();
      dataUserChange = response.find((item) => item.seat === floorChange);
    }
  }
  if (dataUserCurrent && Object.keys(dataUserCurrent).length > 0) {
    const dataUser = {
      ...dataUserCurrent,
      id: dataUserChange?.id,
      id_seat: dataUserChange?.id_seat,
      seat: dataUserChange?.seat,
    };

    await updateUser(idChange, dataUser);
  }
  if (dataUserChange && Object.keys(dataUserChange).length > 0) {
    const dataUser = {
      ...dataUserChange,
      id: dataUserCurrent?.id,
      id_seat: dataUserCurrent?.id_seat,
      seat: dataUserCurrent?.seat,
    };

    await updateUser(floorCurrent, dataUser);
  }
  return {
    status: 200,
    message: "Update success",
  };
};
