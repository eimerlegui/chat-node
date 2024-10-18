
import { Message } from "../models"

export const getTest = async () => {
	return await Message.findAll({
		raw: true
	})
}