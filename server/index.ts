import "./utilities/passport";

import express, { Application } from "express";
import { Server as IOServer } from "socket.io";
import { connectionDB } from "./config/db";
import { connectionSocket } from "./utilities";
import session from "express-session";
import passport, { Profile } from "passport";
import authRoutes from "./routes/auth";
import cors from "cors";
import http from "http";



const app: Application = express();
const server = http.createServer(app);
const io = new IOServer(server);

connectionDB.authenticate()
	.catch(err => console.log(err));

connectionDB.sync()
	.then(() => console.log("DATA BASE RUNNING"))
	.catch((err) => console.error(err));

connectionSocket(io);


app.use(express.json());
app.use(session({
	secret: "g5bDQV_LZY9j7Xk2A5AY8paG6eEUCaEEQEs4tAvFj0E",
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } //Usar True cuando ya se use https en PRODUCCION
}))
// app.use(cors())
app.use(cors({
	origin: "http://localhost:5173",
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);


server.listen(3000);
console.log("DATA SERVER RUNNING", 3000);