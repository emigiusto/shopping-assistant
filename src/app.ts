import express from 'express';
import urlRoutes from './routes/urlRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/url', urlRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;