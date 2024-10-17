
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type JobListingProps = {
    company: string;
    logo: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements: {
        content: string;
        items: string[];
    };
    role: {
        content: string;
        items: string[];
    };
}

const JobListing = ({
  company,
  logo,
  
  position,
  postedAt,
  contract,
  location,
  website,
  apply,
  description,
  requirements,
  role
}: JobListingProps) => {
  return (
    <div className="bg-white/90 shadow-lg rounded-lg  mb-8">
      {/* Company Header */}
      <div
        className="flex items-center p-6"
        
      >
        <Image width={64} height={64} src={logo} alt={`${company} logo`} className="h-16 w-16 rounded-full" />
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-gray-800">{company}</h2>
          <Link
            href={website}
            className="text-violet-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Link>
        </div>
      </div>

      {/* Job Details */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{position}</h3>
          <span className="text-sm text-gray-500">
            {postedAt} • {contract}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-800 mb-4">{description}</p>

        {/* Requirements */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900">Requirements</h4>
          <p className="text-gray-600 mb-2">{requirements.content}</p>
          <ul className="list-disc list-inside text-gray-600">
            {requirements.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Role */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900">Role</h4>
          <p className="text-gray-600 mb-2">{role.content}</p>
          <ul className="list-disc list-inside text-gray-600">
            {role.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="text-center mt-6">
          <Link
            href={apply}
            className="bg-violet-600 text-white px-6 py-3 rounded-full inline-block transition hover:bg-violet-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
