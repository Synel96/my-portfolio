import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/portfolio/api/projects/";
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    throw error;
  }
};
