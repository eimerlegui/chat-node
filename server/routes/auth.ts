
import { Request, Response, Router } from "express";
import passport from "passport";
import { ENV } from "../config/dotenv";


const router = Router();

router.get("/login/success", (req: Request, res: Response) => {
	console.log("/=/=/=/=/=/=/=/=/=/=/=/=/= SUCCESS =/=/=/=/=/=/=/=/=/=/=/=/=/=/=");
	console.log(req.user);
	console.log("/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=");
	
	if(req.user) {
		res.status(200).json({
			success: true,
			message: "Login success",
			user: req.user
		});
	} else {
		res.status(401).json({
			error: true,
			message: "Not Authorized"
		});
	}
})

router.get("/login/failed", (req: Request, res: Response) => {
	console.log("/=/=/=/=/=/=/=/=/=/=/=/=/= FAILED =/=/=/=/=/=/=/=/=/=/=/=/=/=/=");
	console.log(req.user);
	console.log("/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=");
	res.status(401).json({
		error: true,
		message: "Login failed"
	})
})

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: 'http://localhost:5173',
		failureRedirect: "/login/filed"
	})
);


router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email"]
	})
);

router.get("/logout", (req: Request, res: Response) => {
	console.log("/=/=/=/=/=/=/=/=/=/=/=/=/=/= LOGOUT =/=/=/=/=/=/=/=/=/=/=/=/=");
	req.logout((error) => {
		if(error) {
			return res.status(500).json({
				error: true,
				message: "Logout error"
			})
		}
		res.redirect('http://localhost:5173');
	});
	res.redirect('http://localhost:5173/logout');
})

export default router