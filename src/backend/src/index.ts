import express from 'express';
import cors from 'cors';
import dataRoutes from './routes/dataRoutes';

const app = express();

// Allow all CORS requests (not recommended for production)
app.use(cors());

app.use('/api', dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// ts-node src/backend/src/index.ts
