export interface Candidate {
    id: number;
    candidate_full_name: string;
    candidate_email_address: string;
    candidate_yoe: number;
    candidate_phone_number: string;
    candidate_role_id: number;
    candidate_location: string;
    candidate_application_status:
      | "Applied"
      | "Contacted"
      | "Interview Scheduled"
      | "Candidate Rejected"
      | "Offer Made"
      | "Offer Accepted"
      | "Offer Rejected"
      | "Interview Done"
      | "Hired";
    candidate_resume_url: string;
    candidate_role_name: string;
    candidate_image_url: string;
    createdAt: Date;
    updatedAt: Date;
  }
  

  export interface Role {
    id: number;
    role_name: string
  }

  export interface CreateCandidate {
    candidate_full_name: string;
    candidate_email_address: string;
    candidate_yoe: string;
    candidate_phone_number: string;
    candidate_role_id: string | number;
    candidate_location: string;
    candidate_resume_url: string;
  }