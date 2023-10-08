import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const loginHandler = (req: Request, res: Response) => {
	const token = jwt.sign({
		test: 'test',
	}, 'secret',
	{
		expiresIn: 24 * 60 * 60
	});

	return res.json({token});
};

const profileHandler = (req: Request, res: Response) => {
	return res.json({profile: req.user, message: 'profile_data'});
};

export { loginHandler, profileHandler };