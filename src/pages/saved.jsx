import { useContext } from "react";
import { JobContext } from "../context/JobContext";

function Saved() {
  const { savedJobs, removeJob } = useContext(JobContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p>No saved jobs</p>
      ) : (
        <div className="space-y-3">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-black dark:text-white">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {job.company}
                </p>
              </div>

              <button
                onClick={() => removeJob(job.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Saved;