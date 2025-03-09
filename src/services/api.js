import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Ambil dari .env
});

export const getAllContent = async () => {
  try {
    const response = await api.get("/content/all");
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil konten:", error);
    return [];
  }
};
