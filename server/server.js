import express from 'express';
import router from './routes/yelp.routes.js';
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Welcome to the app');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})