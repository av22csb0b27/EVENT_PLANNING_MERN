import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv, { config } from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin: 'https://aayojan-event-planning.netlify.app',
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/message",messageRouter);

dbConnection();
export default app;
