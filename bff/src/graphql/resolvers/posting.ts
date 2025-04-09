import { GrpcClients } from '../../grpc';

export const postingResolvers = {
    Query: {
        posting: async (
            _: any,
            { title, message }: { title: string; message: string },
            { grpcClients }: { grpcClients: GrpcClients }
        ) => {
            try {
                const response = await grpcClients.posting.createPost({ title, message });
                return JSON.stringify({title: response.title, message: response.message})
            } catch (error) {
                console.error('Error calling greeter service:', error);
                throw new Error('Failed to get greeting from the service');
            }
        }
    }
};