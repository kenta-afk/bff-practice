import * as grpc from '@grpc/grpc-js';
import { loadProto } from '../proto-loader';

export interface PostingRequest {
    title: string;
    message: string;
}

export interface PostingResponse {
    title: string;
    message: string;
}

export interface PostingClient {
    createPost(request: PostingRequest): Promise<PostingResponse>;
}

export function createPostingClient(address: string): PostingClient {
    
    const proto = loadProto('posting');

    const client = new (proto.posting as any).Posting(
        address,
        grpc.credentials.createInsecure()
    );
    return {
        createPost(request: PostingRequest): Promise<PostingResponse> {
            return new Promise((resolve, reject) => {
                client.createPost(request, (err: Error | null, response: PostingResponse) => {
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