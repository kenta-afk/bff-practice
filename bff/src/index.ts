import express from 'express';
import { createGrpcClients } from './grpc';

// Expressアプリケーションの初期化
const app = express();
app.use(express.json());

// gRPCサーバーのアドレスを設定
const grpcServerAddr ='backend:50051';

// すべてのgRPCクライアントを作成
const grpcClients = createGrpcClients(grpcServerAddr);

// CORS設定
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.post('/api/hello', async (req, res) => {
    try {
        const { name } = req.body;
        const result = await grpcClients.greeter.sayHello({ name });
        res.json(result);
    } catch (error) {
        console.error('Error calling gRPC service:', error);
        res.status(500).json({ error: 'Failed to call gRPC service' });
    }
});

app.post('/api/posting', async (req, res) => {
    try {
        const { title, message } = req.body;
        const result = await grpcClients.posting.createPost({ title, message });
        res.json(result);
    } catch (error) {
        console.error('Error calling gRPC service:', error);
        res.status(500).json({ error: 'Failed to call gRPC service' });
    }
});

app.post('/api/omikuji', async (req, res) => {
    try {
        const result = await grpcClients.omikuji.GetOmikujiResult({});
        res.json(result);
    } catch (error) {
        console.error('Error calling gRPC service:', error);
        res.status(500).json({ error: 'Failed to call gRPC service' });
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`BFF server running at http://localhost:${port}`);
    console.log(`Connected to gRPC server at ${grpcServerAddr}`);
});