
import { Server } from "socket.io";
import { ENV } from "./dotenv";
import http from "http";

export function configSocket(server: http.Server) {

	return new Server(server, {
		cors: {
			origin: ENV.URL_FRONT,
			methods: ["GET", "POST", "PUT", "DELETE"],
			credentials: true
		}
	});
}
