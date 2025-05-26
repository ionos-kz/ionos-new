import express from 'express';

const app = express();

app.use(express.json());

app.use('/api/', (req, res) => {
    res.send('This is node server');
});

export default app;
