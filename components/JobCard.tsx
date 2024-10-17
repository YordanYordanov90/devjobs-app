// components/JobCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      className="bg-white/90 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
    >
      <div className="p-6 flex items-center">
        <Image
          width={48}
          height={48}
          src={logo}
          alt={`${company} logo`}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{position}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="p-6 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-1">
          {postedAt} • {contract}
        </p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </Link>
  );
};

export default JobCard;
