import React from 'react';

interface Props {
  temperature: number;
  humidity: number;
  moisture: number;
}

const AlertBanner: React.FC<Props> = ({ temperature, humidity, moisture }) => {
  const alerts: string[] = [];

  // Moisture check
  if (moisture < 30) {
    alerts.push("🚨 Moisture too low! Water your plant.");
  } else if (moisture > 80) {
    alerts.push("⚠️ Moisture too high! Avoid overwatering.");
  }

  // Temperature check
  if (temperature > 10) {
    alerts.push("❄️ Temperature too low! Protect the plant from cold.");
  } else if (temperature > 35) {
    alerts.push("🔥 Temperature too high! Move plant to a cooler area.");
  }

  // Humidity check
  if (humidity < 30) {
    alerts.push("💧 Humidity too low! Consider misting or humidifier.");
  } else if (humidity > 85) {
    alerts.push("🌫️ Humidity too high! Improve ventilation.");
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {alerts.length > 0 ? (
        <ul className="space-y-2">
          {alerts.map((alert, index) => (
            <li key={index} className="text-red-600 font-semibold">
              {alert}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-green-600 font-medium">
          ✅ All sensor readings are in a healthy range!
        </p>
      )}
    </div>
  );
};

export default AlertBanner;
