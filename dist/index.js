import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import aiRoute from './routes/ai.route';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.CORS_URL,
}));
const base = process.env.API_BASE;
// routes
if (base) {
    app.use(base, aiRoute);
}
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
