import { Test } from "../models/test";


export const getTest = async () => {
	return await Test.findAll({
		raw: true
	})
}