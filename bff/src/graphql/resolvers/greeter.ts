import { createGreeterClient } from '../../grpc/clients/greeter-client';
import { GrpcClients } from '../../grpc';

export const greeterResolvers = {
    Query: {
        greeting: async (_: any, { name }: { name: string }, { grpcClients }: { grpcClients: GrpcClients }) => {
            try {
                const response = await grpcClients.greeter.sayHello({ name: name });
                return response.message;
            } catch (error) {
                console.error('Error calling greeter service:', error);
                throw new Error('Failed to get greeting from the service');
            }
        }
    }
};