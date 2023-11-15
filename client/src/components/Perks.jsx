import React from "react";
import { Bath, Car, Dog, DoorOpen, Tv2, Wifi } from "lucide-react";
const Perks = ({ selected, onChange }) => {
  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="wifi" onChange={handleCbClick} />
        <Wifi />
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="parking" onChange={handleCbClick} />
        <Car />
        <span>Free parking spot</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="tv" onChange={handleCbClick} />
        <Tv2 />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="shower" onChange={handleCbClick} />
        <Bath />
        <span>Shower</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="pets" onChange={handleCbClick} />
        <Dog />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="entrance" onChange={handleCbClick} />
        <DoorOpen />
        <span>Private entrance</span>
      </label>
    </>
  );
};

export default Perks;
