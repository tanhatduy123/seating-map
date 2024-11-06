// func return seat

export const SeatUser = (seat, dataFloor) => {
  if (seat && dataFloor?.length > 0) {
    const dataFind = dataFloor?.find((item) => item.id_seat === seat);
    return dataFind;
  }
  return {};
};
