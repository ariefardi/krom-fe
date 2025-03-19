import { Candidate } from '../../Interfaces/candidate.interface';

interface ApplicantDetailProps {
  candidate: Candidate;
}
const ApplicantDetail = ({ candidate }: ApplicantDetailProps) => {
  return (
    <div className="shadow-md w-full flex flex-col px-4 py-4 h-full">
      <div className="w-full flex justify-center">
        <div className="w-[90px] h-[100px] bg-red-100">
          <img
            src={candidate?.candidate_image_url} // Use default if missing
            alt={candidate.candidate_full_name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Name:</div>
        <div className="w-5"></div>
        <div className="font-bold">{candidate?.candidate_full_name}</div>
      </div>
      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Email:</div>
        <div className="w-5"></div>
        <a
          className="text-blue-500 font-bold"
          href={`mailto:${candidate?.candidate_email_address}`}
        >
          {candidate?.candidate_email_address}
        </a>
      </div>
      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Years of Experience:</div>
        <div className="w-5"></div>
        <div>{candidate?.candidate_yoe}</div>
      </div>
      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Role Applied For:</div>
        <div className="w-5"></div>
        <div>{candidate?.candidate_role_name}</div>
      </div>
      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Location</div>
        <div className="w-5"></div>
        <div>{candidate?.candidate_location}</div>
      </div>
      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Resume</div>
        <div className="w-5"></div>
        <a
          className="text-blue-500 font-bold"
          href={candidate.candidate_resume_url}
          target="__blank"
        >
          Resume
        </a>
      </div>
      <div className="flex flex-row py-4 items-center">
        <div className="w-2/6">Status</div>
        <div className="w-5"></div>
        <div className="font-bold">
          {candidate?.candidate_application_status}
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="bg-green-700 w-full py-2 text-center text-white cursor-pointer">
          Schedule Interview
        </div>
        <div className="w-4"></div>
        <div className="border border-green-700 w-full py-2 text-center text-green-700 cursor-pointer">
          Review
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
