import express from 'express';
const router = express.Router();

import {search, getReviews} from '../controllers/yelp.controller.js';


router.get('/search/:term/:location', search);
router.get('/reviews/:id', getReviews);

export default router;