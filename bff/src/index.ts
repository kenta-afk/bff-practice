import express from 'express';
import cors from 'cors';
import { createGrpcClients } from './grpc';
import { ApolloServer } from '@apollo/server';
import { schema } from './graphql/schema';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();
app.use(express.json());

const grpcServerAddr = 'backend:50051';

const grpcClients = createGrpcClients(grpcServerAddr);

app.use(cors({
    origin: 'http://localhost:5173'
}));

async function startApolloServer() {
    const server = new ApolloServer({
        schema,
    });

    await server.start();

    app.use('/graphql',
        cors({
            origin: 'http://localhost:5173'
        }),
        express.json(),
        expressMiddleware(server, {
            context: async () => ({
                grpcClients,
            }),
        })
    );
    
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Express server running on port ${PORT}`);
    });
}

startApolloServer().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});