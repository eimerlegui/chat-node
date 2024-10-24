import { Request, Response } from "express";
import { User } from "../../../models";
import { TQueryLogin } from "../validators";

export const login = async (req: Request<unknown, unknown, unknown, TQueryLogin>, res: Response) => {
	try {
        let user = await User.findOne({
            where: {
                uid: req.query.uid
            }
        });

		if (user) res.json(user);
		else res.json({ message: "User not found" });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const register = async (req: Request, res: Response) => {
	try {
		const user = await User.create({
			uid: req.body.uid,
			username: req.body.username,
			providerId: req.body.providerId
		});
		return res.json(user);
	} catch (error) {
		console.error("Error during register: ", error);
		return res.status;
	}
}