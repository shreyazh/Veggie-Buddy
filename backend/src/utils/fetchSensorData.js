import axios from "axios";
import { SensorData } from "../models/SensorData.model.js";

const CHANNEL_ID = process.env.THINGSPEAK_CHANNEL_ID;
const API_KEY = process.env.THINGSPEAK_READ_API_KEY;
const URL = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${API_KEY}&results=2`;
console.log(URL)
export const fetchAndStoreSensorData = async () => {
  try {
    const res = await axios.get(URL);
    const latest = res.data.feeds[0];

    if (!latest) return console.log("No data from ThingSpeak.");

    const data = new SensorData({
      temperature: parseFloat(latest.field1),
      humidity: parseFloat(latest.field2),
      timestamp: new Date(latest.created_at),
    });

    await data.save();
    console.log("Sensor data saved:", data);
  } catch (err) {
    console.error("Failed to fetch sensor data:", err.message);
  }
};
