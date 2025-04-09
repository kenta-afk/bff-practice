import * as grpc from '@grpc/grpc-js';
import { loadProto } from '../proto-loader';

export interface HelloRequest {
    name: string;
}

export interface HelloResponse {
    message: string;
}

export interface GreeterClient {
    sayHello(request: HelloRequest): Promise<HelloResponse>;
}

export function createGreeterClient(address: string): GreeterClient {
    
    const proto = loadProto('helloworld');

    const client = new (proto.helloworld as any).Greeter(
        address,
        grpc.credentials.createInsecure()
    );
    return {
        sayHello(request: HelloRequest): Promise<HelloResponse> {
            return new Promise((resolve, reject) => {
                client.sayHello(request, (err: Error | null, response: HelloResponse) => {
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