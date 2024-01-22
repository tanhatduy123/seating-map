import React from "react";
import Seat from "../Seat";

export default function FloorNine() {
  return (
    <div
      className="container-floor position-relative"
      style={{ height: "100vh" }}
    >
      <div className="d-flex flex-column position-absolute top-0 end-0">
        {[...Array(4)].map(() => (
          <div className="cabinet-vertical" />
        ))}
      </div>
      <div className="d-flex" style={{ marginLeft: "20%" }}>
        <div className="d-flex">
          <div className="wardrobe" />
          <div>
            <div className="d-flex">
              {[...Array(6)].map(() => (
                <Seat horizontal />
              ))}
            </div>
          </div>
          <div className="wardrobe" />
        </div>
        <div className="d-flex" style={{ marginLeft: "10%" }}>
          <div className="cabinet" />
          <div className="cabinet" />
        </div>
      </div>
      <div className="d-flex" style={{ marginLeft: "20%", marginBottom: "8%" }}>
        <div>
          <div className="d-flex">
            {[...Array(6)].map(() => (
              <Seat lyingHorizontally />
            ))}
          </div>
          <div className="d-flex">
            {[...Array(6)].map(() => (
              <Seat horizontal />
            ))}
          </div>
        </div>
        <div className="filing-cabinets">
          <span>Bàn tủ hồ sơ</span>
        </div>
      </div>
    </div>
  );
}
