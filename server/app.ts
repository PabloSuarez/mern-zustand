import cors from 'cors';
import express from 'express';
import authRoutes from './routers/auth.routes';

const app = express();
app.use(cors({
	origin: 'http://localhost:5173'
}));
app.use(authRoutes);

export default app;
