import { createGreeterClient } from '../../grpc/clients/greeter-client';


export const greeterResolvers = {
    Query: {
        greeting: async (_: any, { name }: { name: string }) => {
            try {
                const client = createGreeterClient('backend:50051');

                const response = await client.sayHello({ name: name });
                return response.message;
            } catch (error) {
                console.error('Error calling greeter service:', error);
                throw new Error('Failed to get greeting from the service');
            }
        }
    }
};