
import { configApp, configSequelize, configSocket, ENV } from "./config";
import express, { Application } from "express";
import { connectionSocket } from "./utilities";
import http from "http";

const app: Application = express();
const server = http.createServer(app);
const serverSocket = configSocket(server);

// configSequelize();
connectionSocket(serverSocket);
// configApp(app)

server.listen(ENV.PORT);
console.log("DATA SERVER RUNNING", ENV.PORT);