// models/SensorData.js
import mongoose from "mongoose";

const SensorDataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  moisture: Number,
  motorStatus: Boolean, // new field
  timestamp: Date,
});

export const SensorData = mongoose.model("SensorData", SensorDataSchema);
