import "./utilities/passport";

import express, { Application } from "express";
import { Server as IOServer } from "socket.io";
// import { connectionDB } from "./config/db";
import { connectionSocket } from "./utilities";
import { ENV } from "./config/dotenv";
import session from "express-session";
// import passport, { Profile } from "passport";
import cors from "cors";
import http from "http";



const app: Application = express();
const server = http.createServer(app);
const io = new IOServer(server, {
	cors: {
		origin: ENV.URL_FRONT,
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true
	}
});

// connectionDB.authenticate()
// 	.catch(err => console.log(err));

// connectionDB.sync()
// 	.then(() => console.log("DATA BASE RUNNING"))
// 	.catch((err) => console.error(err));

connectionSocket(io);


app.use(express.json());
app.use(session({
	secret: ENV.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: { secure: ENV.ENV === "prod", maxAge: 24 * 60 * 60 * 1000 } //Usar True cuando ya se use https en PRODUCCION
}))
// app.use(cors())
app.use(cors({
	origin: ENV.URL_FRONT,
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true
}))

// app.use(passport.initialize());
// app.use(passport.session());


server.listen(ENV.PORT);
console.log("DATA SERVER RUNNING", ENV.PORT);