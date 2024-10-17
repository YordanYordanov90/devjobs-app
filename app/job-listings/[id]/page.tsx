import data from "@/app/data/data.json";
import JobListing from "@/components/jobListing";

const JobDetails = ({ params }: { params: { id: string } }) => {
  const job = data.find((job) => job.id === parseInt(params.id));

  if (!job) {
    return (
      <div className="p-24 text-center text-2xl text-red-600">
        Job not found
      </div>
    );
  }

  return (
    <div className="p-20 ">
      <JobListing {...job} />
    </div>
  );
};

export default JobDetails;
