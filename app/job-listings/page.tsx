import JobCard from "@/components/JobCard";
import data from "@/app/data/data.json";

const JobsPage = () => {
  return (
    <div className="p-24 ">
      <h1 className="text-4xl font-bold text-center text-violet-600 mb-8">
        Job Listings
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
