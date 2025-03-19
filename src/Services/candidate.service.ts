import { CreateCandidate } from "../Interfaces/candidate.interface";
import apiClient from "./axiosInstance";

export const getCandidates = async (queryParams: string) => {
  try {
    const response = await apiClient.get("/candidates?" + queryParams);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRoles = async () => {
  try {
    const response = await apiClient.get("/roles");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const postCandidate = async (body: CreateCandidate) => {
  try {
    const response = await apiClient.post('/candidates', body);
    return response
  } catch (error) {
    throw error;
  }
}