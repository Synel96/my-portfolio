import axios from "axios";

const API_BASE_URL =
  "https://myportfolio-falling-mountain-4284.fly.dev/portfolio/api/projects/";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};
