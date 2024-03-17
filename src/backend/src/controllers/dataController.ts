// src/backend/src/controllers/dataController.ts

import { Request, Response } from 'express';
import { readDataFromFile } from '../services/dataService';

export async function getData(req: Request, res: Response) {
    const filePath = 'src/backend/data/products.json';
    console.log("hits getData");
    try {
        const data = await readDataFromFile(filePath);
        console.log('data', data);
        res.json(data);
    } catch (error) {
        console.error('Error reading data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
