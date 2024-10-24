
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z, ZodError } from "zod";

export const loginValidator = z.object({
	query: z.object({
		uid: z.string().min(1)
	})
})

export type TQueryLogin = z.infer<typeof loginValidator>["query"];

export const validate = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		schema.parse({
			body: req.body,
			query: req.query,
			params: req.params
		});
		next();
	} catch (error) {
		console.error(error);
		if(error instanceof ZodError) {
			return res.status(400).json({ message: error.issues });
		}
		return res.status(400).json({ message: "Internal server error" });
	}
}