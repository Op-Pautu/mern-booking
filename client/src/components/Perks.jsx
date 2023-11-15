import React from "react";
import { Bath, Car, Dog, DoorOpen, Tv2, Wifi } from "lucide-react";
const Perks = ({ selected, onChange }) => {
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <Wifi />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <Car />
        <span>Free parking spot</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <Tv2 />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <Bath />
        <span>Shower</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <Dog />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <DoorOpen />
        <span>Private entrance</span>
      </label>
    </>
  );
};

export default Perks;
