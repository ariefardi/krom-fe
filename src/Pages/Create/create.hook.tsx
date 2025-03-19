import { useCallback, useEffect, useState } from 'react';
import { getRoles, postCandidate } from '../../Services/candidate.service';
import { CreateCandidate, Role } from '../../Interfaces/candidate.interface';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export const validationSchema = Yup.object({
  candidate_full_name: Yup.string().required('Full name is required'),
  candidate_phone_number: Yup.string()
    .matches(/^\d+$/, 'Phone number must be only digits')
    .min(10, 'Must be at least 10 digits')
    .required('Phone number is required'),
  candidate_email_address: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  candidate_yoe: Yup.number()
    .min(0, 'Cannot be negative')
    .required('Years of experience is required'),
  candidate_role_id: Yup.string().required('Role is required'),
  candidate_location: Yup.string().required('Location is required'),
  candidate_resume_url: Yup.string()
    .url('Must be a valid URL')
    .required('Resume URL is required'),
});
const useCreateHooks = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const navigate = useNavigate();
  const fetchRoles = useCallback(async () => {
    try {
      const response = await getRoles();
      setRoles(response?.data);
    } catch (error) {}
  }, []);
  useEffect(() => {
    fetchRoles();
  }, []);
  const handleSubmit = async (
    values: CreateCandidate,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      await postCandidate({
        ...values,
        candidate_role_id: Number(values.candidate_role_id),
      });

      resetForm();
      navigate('/');
    } catch (error) {
      console.error('Failed to submit:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  return {
    roles,
    handleSubmit,
  };
};

export default useCreateHooks;
