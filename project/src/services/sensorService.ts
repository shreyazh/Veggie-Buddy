import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/sensor';

export interface SensorData {
  temperature: number;
  humidity: number;
  moisture: number;
  timestamp: string;
}

export const getLatestSensorData = async (): Promise<SensorData> => {
  const response = await axios.get(`${BASE_URL}/latest`);
  return response.data;
};

export const getSensorHistory = async (limit = 50): Promise<SensorData[]> => {
  const res = await axios.get(`${BASE_URL}/history?limit=${limit}`);
  return res.data;
};
