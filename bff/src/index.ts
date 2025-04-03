import express from 'express';
import { createGreeterClient } from './client';

const app = express();
app.use(express.json());

const grpcServerAddr = 'backend:50051';
const greeterClient = createGreeterClient(grpcServerAddr);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.post('/api/hello', async (req, res) => {
    try {
        const { name } = req.body;
        const result = await greeterClient.sayHello({ name });
        res.json(result);
    } catch (error) {
        console.error('Error calling gRPC service:', error);
        res.status(500).json({ error: 'Failed to call gRPC service' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`BFF server running at http://localhost:${port}`);
});