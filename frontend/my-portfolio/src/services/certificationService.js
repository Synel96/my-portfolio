import axios from "axios";

const API_URL =
  "https://myportfolio-falling-mountain-4284.fly.dev/portfolio/api/certifications/";

export const getCertifications = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch certifications:", error);
    throw error;
  }
};
