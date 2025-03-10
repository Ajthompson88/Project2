import express from 'express';
import apiRoutes from './routes/api/index';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount API routes under /api
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});