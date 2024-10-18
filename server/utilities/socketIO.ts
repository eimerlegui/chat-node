

import { Server as IOServer, Socket } from "socket.io";
import { getTest } from "../services/socket.services";

export function connectionSocket(io: IOServer) {
	io.on("connection", (socket: Socket) => {
		socket.on("message", async (data: any) => {
			socket.broadcast.emit("message", { id: socket.id, data })
			// const dataDB = await getTest();
		})
		socket.on("typing", () => {
			socket.broadcast.emit("typing", { id: socket.id })
		})
	})
};