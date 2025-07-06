import axios from "axios";

const API_URL = "http://localhost:8000/portfolio/api/certifications/";

export const getCertifications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    throw error;
  }
};
