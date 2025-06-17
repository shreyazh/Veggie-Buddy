import React, { useEffect, useState } from 'react';
import { getLatestSensorData, getSensorHistory, SensorData } from '../services/sensorService';
import SensorCard from '../components/SensorCard';
import AlertBanner from '../components/AlertBanner';
import SensorChart from '../components/SensorChart';

const DashboardPage: React.FC = () => {
  const [data, setData] = useState<SensorData | null>(null);
  const [history, setHistory] = useState<SensorData[]>([]);

  const fetchData = async () => {
    try {
      const latest = await getLatestSensorData();
      setData(latest);
    } catch (err) {
      console.error('Error fetching sensor data:', err);
    }
  };

  const fetchHistory = async () => {
    try {
      const hist = await getSensorHistory(50);
      setHistory(hist);
    } catch (err) {
      console.error('Error fetching sensor history:', err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchHistory();

    const interval = setInterval(() => {
      fetchData();
      fetchHistory();
    }, 10000); // refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 space-y-6">
      <SensorCard data={data} />
      <AlertBanner
        temperature={data.temperature}
        humidity={data.humidity}
        moisture={data.moisture}
        motorStatus={data.motorStatus}
      />

      <SensorChart data={history} />
    </div>
  );
};

export default DashboardPage;
