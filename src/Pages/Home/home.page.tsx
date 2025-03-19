import TableCandidate from '../../Components/TableCandidate';
import ApplicantDetail from '../../Components/ApplicantDetail';
import useHomeHooks from './home.hook';

import countryOptions from '../../Constants/country.json';
import { STATUS } from '../../Constants';
import { Link } from 'react-router-dom';
function Home() {
  const {
    candidates,
    candidate,
    filters,
    roles,
    totalPages,
    currentPage,
    handleCandidateDetail,
    handleKeywordChange,
    handleChangeLocation,
    handleChangeStatus,
    handleChangeJob,
    handlePagechange,
  } = useHomeHooks();

  return (
    <div className="flex flex-col container py-4">
      <div className="flex flex-row">
        <div className="flex-1 font-bold text-xl">Applicants</div>
        <div>
          <Link
            to="/create"
            className="border border-green-900 px-6 py-2 rounded-lg text-green-900 cursor-pointer"
          >
            Add Application
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-col flex px-4">
          <div>Location</div>
          <div className="relative  flex flex-row mb-6 mt-2">
            <select
              value={filters.location}
              onChange={handleChangeLocation}
              className="w-[250px] border border-gray-300 p-2 rounded-md appearance-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a option</option>
              {countryOptions.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
              ▼
            </div>
          </div>
        </div>
        <div className="flex flex-col  px-4">
          <div>Job role</div>
          <div className="relative flex flex-row mb-6 mt-2">
            <select
              value={filters.jobType}
              onChange={handleChangeJob}
              className="w-[250px] border border-gray-300 p-2 rounded-md appearance-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a option</option>
              {roles.map((role, index) => (
                <option key={index} value={role.role_name}>
                  {role.role_name}
                </option>
              ))}
            </select>

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
              ▼
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div>Status</div>
          <div className="relative flex flex-row mb-6 mt-2">
            <select
              value={filters.status}
              onChange={handleChangeStatus}
              className="w-[250px] border border-gray-300 p-2 rounded-md appearance-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a option</option>
              {STATUS.map((status, i) => (
                <option key={i} value={status}>
                  {status}
                </option>
              ))}
            </select>

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
              ▼
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex-shrink w-4/6">
          <TableCandidate
            candidate={candidate}
            candidates={candidates}
            handleCandidateDetail={handleCandidateDetail}
            handleKeywordChange={handleKeywordChange}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePagechange={handlePagechange}
          />
        </div>
        <div className="flex-shrink w-2/6 mt-4">
          {candidate && <ApplicantDetail candidate={candidate} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
