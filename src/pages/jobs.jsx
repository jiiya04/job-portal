import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        // convert fake data into job format
        const formatted = data.slice(0, 9).map((item, index) => ({
  id: item.id,
  title: `Software Developer ${index + 1}`,
  company: "Demo Company",
  location: "India"
}));

        setJobs(formatted);
        setLoading(false);
      });
  }, []);

  // SEARCH FILTER
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Jobs</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search jobs..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* LOADING */}
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;