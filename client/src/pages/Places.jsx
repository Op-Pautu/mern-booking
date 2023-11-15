import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import { Plus, Upload } from "lucide-react";
import axios from "axios";

export default function () {
  const { action } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    address: "",
    addedPhotos: [],
    photoLink: "",
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const inputHeader = (title) => {
    return <h2 className="text-2xl mt-4">{title}</h2>;
  };

  const inputDescription = (desc) => {
    return <p className="text-gray-500 text-sm">{desc}</p>;
  };

  const preInput = (header, description) => {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  };

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: formData.photoLink,
    });
    setFormData((prev) => {
      return {
        ...prev,
        addedPhotos: [...prev.addedPhotos, filename],
        photoLink: "",
      };
    });
  };

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
            {preInput(
              "Title",
              "Title for your place. should be short and catchy."
            )}
            <input
              type="text"
              placeholder="title, for example: My lovely apt"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />

            {preInput("Address", "Address to this place")}
            <input
              type="text"
              placeholder="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />

            {preInput("Photos", "more = better")}

            <div className="flex gap-2">
              <input
                type="text"
                placeholder={"Add using a link...jpg"}
                value={formData.photoLink}
                onChange={(e) => handleChange("photoLink", e.target.value)}
              />
              <button
                className="bg-gray-200 px-4 rounded-2xl"
                onClick={addPhotoByLink}
              >
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2 gap-2">
              {formData.addedPhotos.length &&
                formData.addedPhotos.map((link) => (
                  <div>
                    <img
                      src={"http://localhost:4000/uploads/" + link}
                      alt=""
                      className="rounded-2xl"
                    />
                  </div>
                ))}
              <button className="border bg-transparent rounded-2xl p-2 items-center text-2xl text-gray-600 flex gap-1 justify-center items-center">
                <Upload />
                Upload
              </button>
            </div>
            {preInput("Description", "description of the place")}

            <textarea
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            {preInput("Perks", "select all the perks of your place")}

            <div className="grid grid-cols-2 gap-2 mt-2 md:grid-col-3 lg:grid-cols-6">
              <Perks
                selected={formData.perks}
                onChange={(selected) => handleChange("perks", selected)}
              />
            </div>

            {preInput("Extra Info", "house rules, etc")}

            <textarea
              value={formData.extraInfo}
              onChange={(e) => handleChange("extraInfo", e.target.value)}
            />

            {preInput(
              "Check in & out times",
              "add check in and out times, remember to have some time window for cleaning the room between guests"
            )}

            <div className="grid gap-2 sm:grid-cols-3">
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input
                type="text"
                placeholder="14:00"
                value={formData.checkIn}
                onChange={(e) => handleChange("checkIn", e.target.value)}
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input
                type="text"
                value={formData.checkOut}
                onChange={(e) => handleChange("checkOut", e.target.value)}
                placeholder="20:00"
              />
            </div>
            <div>
              <h3 className="mt-2 -mb-1">Max number of guests</h3>
              <input
                type="number"
                value={formData.maxGuests}
                onChange={(e) => handleChange("maxGuests", e.target.value)}
              />
            </div>

            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
