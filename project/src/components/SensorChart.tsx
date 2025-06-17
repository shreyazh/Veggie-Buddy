import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { SensorData } from '../services/sensorService';

interface Props {
  data: SensorData[];
}

const SensorChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-10">
      {/* Temperature & Humidity Chart */}
      <div className="w-full h-[320px] bg-white p-4 rounded-xl shadow mb-10">
        <h3 className="text-lg font-semibold mb-2">🌡 Temperature & 💧 Humidity Trends</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 40 }} // extra bottom margin
          >
            <XAxis
              dataKey="timestamp"
              tickFormatter={(val) => new Date(val).toLocaleTimeString()}
            />
            <YAxis />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#f87171"
              name="🌡 Temp (°C)"
            />
            <Line
              type="monotone"
              dataKey="humidity"
              stroke="#60a5fa"
              name="💧 Humidity (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Moisture Chart */}
      <div className="w-full h-[320px] bg-white p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-2">🪴 Soil Moisture Trend</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 40 }} // extra bottom margin
          >
            <XAxis
              dataKey="timestamp"
              tickFormatter={(val) => new Date(val).toLocaleTimeString()}
            />
            <YAxis />
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            <Line
              type="monotone"
              dataKey="moisture"
              stroke="#34d399"
              name="🪴 Moisture (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SensorChart;
