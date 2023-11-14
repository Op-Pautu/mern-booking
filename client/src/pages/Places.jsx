import { Plus } from "lucide-react";
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
            <h2>Photos</h2>
            <p>more = better</p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-2">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                +
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
