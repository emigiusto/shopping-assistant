import express from 'express';
import { getUrlInfo } from '../controllers/urlController';

const router = express.Router();

router.post('/getInfo', getUrlInfo);

export default router;