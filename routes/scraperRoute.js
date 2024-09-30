import express from 'express';
import { scrapListing } from '../controllers/scraperController.js';

const router = express.Router();

router.get('/', scrapListing);

export default router;