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
const UsersTranNaoCollectionV2Ref = collection(db, "user-floor-trannao-v2");
const UsersAll = collection(db, "user-company");

export const getListAllUser = async () => {
  try {
    const data = await getDocs(UsersAll);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};
export const updateUserTableList = async (props) => {
  try {
    const dataList = await getListAllUser();

    const dataUser = dataList.find((item) => item?.name === props?.name);
    if (dataUser) {
      const newParams = {
        ...dataUser,
        seat: props?.seat,
      };
      await updateDoc(doc(db, "user-company", dataUser?.id), newParams);
      return {
        status: 200,
        message: "Update success",
      };
    }
  } catch (error) {
    console.log(error);
  }
};

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
export const getListUserFloorTranNaoV2 = async () => {
  try {
    const data = await getDocs(UsersTranNaoCollectionV2Ref);

    const filterData = data.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    return filterData;
  } catch (error) {
    console.log(error);
  }
};
export const APIDeleteSeatSourceAdmin = async (seat) => {
  const listUserSourceAdmin = await getListAllUser();
  const dataUserSourceAdmin = listUserSourceAdmin.find(
    (item) => item.seat === seat
  );
  if (dataUserSourceAdmin && Object.keys(dataUserSourceAdmin)?.length > 0) {
    await updateDoc(doc(db, "user-company", dataUserSourceAdmin?.id), {
      ...dataUserSourceAdmin,
      seat: "",
    });
    return {
      status: 200,
      message: "Update success",
    };
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
  if (floor === "tran-nao-version2") {
    const dataList = await getListUserFloorTranNaoV2();
    const idUser = dataList.find((item) => item?.id === props?.id)?.id;
    if (idUser) {
      await updateDoc(doc(db, "user-floor-trannao-v2", idUser), props);
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

  const floorServiceMap = {
    1: getListUserFloorTranNao,
    2: getListUserFloorTranNaoV2,
    3: getListUserFloorSix,
    4: getListUserFloorSeven,
    5: getListUserFloorEight,
    6: getListUserFloorNine,
    7: getListUserFloorTen,
  };

  const getUserDetail = async (floorValue, matchFn) => {
    const floor = dataAllFloor.find((item) => item.value === floorValue);
    const floorId = floor?.id;
    const fetchFunction = floorServiceMap[floorId];

    if (!fetchFunction) return null;

    const users = await fetchFunction();
    return users.find(matchFn) || null;
  };

  const dataUserCurrent =
    idCurrent && floorCurrent
      ? await getUserDetail(floorCurrent, (user) => user.id === idCurrent)
      : null;

  const dataUserChange =
    idChange && floorChange
      ? await getUserDetail(idChange, (user) => user.seat === floorChange)
      : null;

  if (dataUserCurrent && dataUserChange) {
    const newDataUserCurrent = {
      ...dataUserCurrent,
      id: dataUserChange.id,
      id_seat: dataUserChange.id_seat,
      seat: dataUserChange.seat,
    };

    const newDataUserChange = {
      ...dataUserChange,
      id: dataUserCurrent.id,
      id_seat: dataUserCurrent.id_seat,
      seat: dataUserCurrent.seat,
    };

    await Promise.all([
      updateUser(idChange, newDataUserCurrent),
      updateUser(floorCurrent, newDataUserChange),
    ]);
  }

  return {
    status: 200,
    message: "Update success",
  };
};
