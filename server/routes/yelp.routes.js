import express from 'express';
const router = express.Router();

import {search, getReviews, getBusinessDetails} from '../controllers/yelp.controller.js';

router.get('/search/:id', getBusinessDetails);
router.get('/search/:term/:location', search);
router.get('/reviews/:id', getReviews);

export default router;