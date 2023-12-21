import { Router } from 'express';
import * as aiController from '../controllers/ai.controller';
const router = Router();
router.post('/ai', aiController.postMessage);
export default router;
