import { Request, Response } from "express"
import { User } from "../../../models"


export const login = async (req: Request, res: Response) => {
	let user = User.findOne({
		where: {
			uid: req.body.uid
		}
	})
	if(!user) {
		user = User.create({
			uid: req.body.uid,
			name: req.body.name,
			providerId: req.body.providerId
		})
	}
	return user
}