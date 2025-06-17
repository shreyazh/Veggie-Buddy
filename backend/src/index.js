import dotenv from "dotenv";

import { DB_NAME } from "./constants.js";

import connectDB from "./db/index.js";
import {app} from './app.js'
import cron from "node-cron";
import { fetchAndStoreSensorData } from "./utils/fetchSensorData.js";




dotenv.config({
    path:'./.env'
})

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 3000, () =>{
        console.log("server is running on port",process.env.PORT);
    })

    cron.schedule("*/1 * * * *", () => {
     console.log("Fetching latest sensor data...");
     fetchAndStoreSensorData();
});

})
.catch((err) =>{
    console.log("Error:" ,err);
})