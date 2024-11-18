
import { Request, Response } from "express";
import { User } from "../../../models";
import { Op } from "sequelize";

export const searchUsers = async (req: Request, res: Response) => {
	try {
		if (!req.query.search) return res.json({ message: "No search" });

		const users = await User.findAll({
			where: {
				username: {
					[Op.like]: `%${req.query.search}%`
				}
			}
		});
		return res.json({ data: users });
	} catch (error) {
		return res.status(500).json({ message: "Internal server error" });
	}
}