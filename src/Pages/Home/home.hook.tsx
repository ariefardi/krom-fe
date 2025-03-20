import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce'; // Import Lodash debounce

import { getCandidates, getRoles } from '../../Services/candidate.service';
import { Candidate, Role } from '../../Interfaces/candidate.interface';

const useHomeHooks = () => {
  const [candidates, setCandidates] = useState<Candidate[]>();
  const [candidate, setCandidate] = useState<Candidate>();
  const [roles, setRoles] = useState<Role[]>([]);

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  // Filter states
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    jobType: '',
    job: '',
    status: '',
    limit: 14,
    page: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1); // Replace with dynamic value

  const handleChangeLocation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, location: e.target.value, page: 1 })); // Reset page when filtering
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, status: e.target.value, page: 1 })); // Reset page when filtering
  };

  const handleChangeJob = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const find = roles.find(r => r.role_name == e.target.value);
    if (find) {
      setFilters(prev => ({
        ...prev,
        jobType: String(find?.role_name),
        job: String(find?.id),
        page: 1,
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        jobType: '',
        job: '',
        page: 1,
      }));
    }
    // Reset page when filtering
  };

  const handlePagechange = (page: number) => {
    setCurrentPage(page);
    setFilters(prev => ({ ...prev, page })); // Reset page when filtering
  };
  const fetchCandidates = async () => {
    try {
      const queryParams = new URLSearchParams(
        Object.fromEntries(
          Object.entries(filters)
            .filter(([_, value]) => value !== '') // Remove empty values
            .map(([key, value]) => [key, String(value)]) // Convert all values to string
        )
      ).toString();
      const response = await getCandidates(queryParams);

      setCandidates(response?.data);
      setCandidate(response?.data[0]);
      setTotalPages(response?.page?.total);
    } catch (error) {
      console.error('Failed to fetch candidates:', error);
      //   setCandidate(undefined);
      setCandidates(undefined);
    }
  };

  const fetchRoles = useCallback(async () => {
    try {
      const response = await getRoles();

      setRoles(response?.data);
    } catch (error) {}
  }, []);
  useEffect(() => {
    fetchRoles();
  }, []);
  useEffect(() => {
    if (isFirstLoad) {
      fetchCandidates();
      setIsFirstLoad(false);
    } else {
      fetchCandidates(); // Runs only when filters change
    }
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleCandidateDetail = useCallback((candidate: Candidate) => {
    setCandidate(candidate);
  }, []);

  const updateKeyword = useCallback(
    debounce((newKeyword: string) => {
      setFilters(prev => ({ ...prev, keyword: newKeyword, page: 1 })); // Reset page when filtering
    }, 500), // Delay of 500ms
    []
  );

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    updateKeyword(newKeyword); // Call debounced function
  };
  return {
    candidates,
    candidate,
    filters,
    roles,
    totalPages,
    currentPage,
    handleFilterChange,
    handleCandidateDetail,
    handleKeywordChange,
    handleChangeJob,
    handleChangeLocation,
    handleChangeStatus,
    handlePagechange,
  };
};

export default useHomeHooks;
