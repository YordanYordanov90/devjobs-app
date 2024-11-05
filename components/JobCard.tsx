import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaRegClock, FaBriefcase } from "react-icons/fa";

type JobCardProps = {
  id: number;
  company: string;
  logo: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
};

const JobCard = ({
  id,
  company,
  logo,
  position,
  postedAt,
  contract,
  location,
}: JobCardProps) => {
  return (
    <Link
      href={`/job-listings/${id}`}
      className="bg-slate-200 max-w-5xl mx-auto shadow-lg rounded-lg mb-6 flex items-center p-5 hover:bg-gray-300 hover:shadow-xl transition duration-300 ease-in-out"
    >
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <Image
          width={60}
          height={60}
          src={logo}
          alt={`${company} logo`}
          className="rounded-lg  bg-transparent "
        />
      </div>

      {/* Job Details */}
      <div className="ml-5 flex flex-col justify-between w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">{position}</h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {contract}
          </span>
        </div>
        <p className="text-sm text-gray-600">{company}</p>

        {/* Additional Info */}
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <FaRegClock className="mr-2 text-gray-400" />
          <p className="mr-4">{postedAt}</p>
          <FaBriefcase className="mr-2 text-gray-400" />
          <p className="mr-4">{contract}</p>
          <FaMapMarkerAlt className="mr-2 text-gray-400" />
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
