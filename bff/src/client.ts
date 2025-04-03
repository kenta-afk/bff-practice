import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.resolve(__dirname, './proto/helloworld.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const helloworld = protoDescriptor.helloworld as any;

export interface GreeterClient {
    sayHello(request: { name: string }): Promise<{ message: string }>;
}

export function createGreeterClient(address: string): GreeterClient {
    const client = new helloworld.Greeter(address, grpc.credentials.createInsecure());

    return {
        sayHello(request: { name: string }): Promise<{ message: string }> {
            return new Promise((resolve, reject) => {
                client.sayHello(request, (err: Error | null, response: { message: string }) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response);
                    }
                });
            });
        }
    };
}