// models/SensorData.js
import mongoose from "mongoose";

const sensorDataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  timestamp: Date,
});

export const SensorData = mongoose.model("SensorData", sensorDataSchema);
