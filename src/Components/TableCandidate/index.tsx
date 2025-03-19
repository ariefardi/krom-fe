import React from 'react';
import { Candidate } from '../../Interfaces/candidate.interface';
import Pagination from '../../Components/Pagination';
interface TableCandidateProps {
  candidates?: Candidate[];
  candidate?: Candidate;
  totalPages: number;
  currentPage: number;
  handleCandidateDetail: (candidate: Candidate) => void;
  handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePagechange: (v: number) => void;
}
const TableCandidate = ({
  candidates,
  candidate,
  totalPages,
  currentPage,
  handleCandidateDetail,
  handleKeywordChange,
  handlePagechange,
}: TableCandidateProps): JSX.Element => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-row">
        <div className="flex-1">
          <input
            onChange={handleKeywordChange}
            placeholder="Search"
            className="w-[250px] border py-1 px-2"
          />
        </div>
        <Pagination
          onPageChange={handlePagechange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      <table className="min-w-full table-auto border-collapse shadow-lg mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Applied Role</th>
            <th className="px-4 py-2 border">Application Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates?.map((c, index) => (
            <tr
              onClick={() => handleCandidateDetail(c)}
              key={index}
              className={`hover:bg-green-100 cursor-pointer ${
                c.id == candidate?.id && 'bg-green-200'
              }`}
            >
              <td className="px-4 py-2 border">{c.candidate_full_name}</td>
              <td className="px-4 py-2 border">{c.candidate_email_address}</td>
              <td className="px-4 py-2 border">{c.candidate_role_name}</td>
              <td className="px-4 py-2 border">
                {c.candidate_application_status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCandidate;
