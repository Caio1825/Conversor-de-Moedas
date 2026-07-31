import axios from "axios";

const API_KEY = "b1cd8add9006e8e66de6657d";

const api = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${API_KEY}`,
});

export async function getRates(baseCurrency: string) {
  try {
    const response = await api.get(`/latest/${baseCurrency}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Erro ao buscar cotações:", error);
    throw error;
  }
}

export default api;

