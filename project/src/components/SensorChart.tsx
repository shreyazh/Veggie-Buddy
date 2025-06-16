import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { SensorData } from '../services/sensorService';

interface Props {
  data: SensorData[];
}

const SensorChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-[400px] bg-white p-4 pb-10 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-2">📊 Sensor Trends</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="timestamp" tickFormatter={(val) => new Date(val).toLocaleTimeString()} />
          <YAxis />
          <Tooltip />
          <Legend wrapperStyle={{ marginTop: 20 }} />
          <Line type="monotone" dataKey="temperature" stroke="#f87171" name="🌡 Temp (°C)" />
          <Line type="monotone" dataKey="humidity" stroke="#60a5fa" name="💧 Humidity (%)" />
          <Line type="monotone" dataKey="moisture" stroke="#34d399" name="🪴 Moisture (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SensorChart;
