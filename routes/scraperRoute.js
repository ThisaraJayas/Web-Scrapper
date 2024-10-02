import express from 'express';
import { scrapListing } from '../controllers/ScraperController.js';

const router = express.Router();

router.get('/', scrapListing);

export default router;