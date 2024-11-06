import { db, storage } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";
const UsersFloorSixCollectionRef = collection(db, "user-floor-six");
const UsersFloorSevenCollectionRef = collection(db, "user-floor-seven");
const UsersFloorEightCollectionRef = collection(db, "user-floor-eight");
const UsersFloorNineCollectionRef = collection(db, "user-floor-nine");
const UsersFloorTenCollectionRef = collection(db, "user-floor-ten");
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
