import * as grpc from '@grpc/grpc-js';
import { loadProto } from '../proto-loader';

export interface OmikujiRequest {
}

export interface OmikujiResponse {
    result: string;
}

export interface OmikujiClient {
    GetOmikujiResult(request: OmikujiRequest): Promise<OmikujiResponse>;
}


export function createOmikujiClient(address: string): OmikujiClient {
    
    const proto = loadProto('omikuji');

    const client = new (proto.omikuji as any).Omikuji(
        address,
        grpc.credentials.createInsecure()
    );
    return {
        GetOmikujiResult(request: OmikujiRequest): Promise<OmikujiResponse> {
            return new Promise((resolve, reject) => {
                client.GetOmikujiResult(request, (err: Error | null, response: OmikujiResponse) => {
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