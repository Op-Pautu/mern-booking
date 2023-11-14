import {
  Bath,
  Car,
  Dog,
  DoorOpen,
  Plus,
  Tv2,
  Upload,
  Wifi,
} from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function () {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            to={"/account/places/new"}
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          >
            <Plus />
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for your place. should be short and catchy.
            </p>
            <input
              type="text"
              placeholder="title, for example: My lovely apt"
            />
            <h2 className="text-2xl mt-4">Address</h2>
            <p>Address to this place</p>
            <input type="text" placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">more = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link...jpg"} />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 flex gap-1 justify-center items-center">
                <Upload />
                Upload
              </button>
            </div>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">description of the place</p>
            <textarea />
            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              select all the perks of your place
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2 md:grid-col-3 lg:grid-cols-6">
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
            </div>

            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">house rules, etc</p>
            <textarea />

            <h2 className="text-2xl mt-4">Check in & out times</h2>
            <p className="text-gray-500 text-sm">
              add check in and out times, remember to have some time window for
              cleaning the room between guests
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input type="text" placeholder="14:00" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input type="text" />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input type="text" />
            </div>

            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
