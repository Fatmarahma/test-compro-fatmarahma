import React from "react";
import Link from "next/link";
import Location from "@/components/atoms/Icons/Location";
import Bussines from "@/components/atoms/Icons/Bussines";

const PositionCard = () => {
  return (
    <div className="container mx-auto py-8 flex justify-center">
      <div className="card-style p-6 v-card v-sheet theme--light w-full md:w-3/4 lg:w-1/2">
        <div className="flex items-center">
          {/* Icon and Title */}
          <span className="mr-4">
            <i className="mdi mdi-bag" style={{ fontSize: "30px", color: "#0000F5" }}></i>
          </span>
          <Bussines />
          <span className="px-4 font-bold text-lg text-black">Perawat</span>
          <div className="ml-auto flex items-center">
            <Location />
            <span className="ml-2 text-gray-500">Karawang Barat</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex justify-between mt-4 text-left">
          <div className="flex items-center">
            <span className="px-2 text-sm text-green-600">Keperawatan</span>
          </div>
          {/* Button Detail */}
          <Link href="/detail-perawat">
            <button
              type="button"
              className="py-2 px-4 text-white rounded-md"
              style={{
                backgroundColor: "#febd57",
              }}
            >
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PositionCard;
