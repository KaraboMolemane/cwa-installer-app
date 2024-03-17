import express from 'express';
import { getData } from '../controllers/dataController';

export const router = express.Router(); 

router.get('/data', getData);

export default router; 
