import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/portfolio/api/certifications/";

export const getCertifications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/certifications/`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    throw error;
  }
};
