import { useContext } from "react";
import { JobContext } from "../context/JobContext";

function JobCard({ job }) {
  const { addJob } = useContext(JobContext);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold text-black dark:text-white">
        {job.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">
        {job.company}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {job.location}
      </p>

      <button
        onClick={() => addJob(job)}
        className="mt-3 bg-green-500 text-white px-4 py-1 rounded"
      >
        Save Job
      </button>
    </div>
  );
}

export default JobCard;