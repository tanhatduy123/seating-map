import { db, storage } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";
const UsersFloorSixCollectionRef = collection(db, "user-floor-six");
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
