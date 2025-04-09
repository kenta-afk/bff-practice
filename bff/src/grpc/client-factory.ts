import { create } from 'domain';
import { createGreeterClient, GreeterClient } from './clients/greeter-client';
import { createPostingClient, PostingClient } from './clients/posting-client';
import { createOmikujiClient, OmikujiClient } from './clients/omikuji-client';

export interface GrpcClients {
    greeter: GreeterClient;
    posting: PostingClient;
    omikuji: OmikujiClient;
}

/**
 * すべてのgRPCクライアントを一度に作成するファクトリー関数
 * @param serverAddress gRPCサーバーのアドレス
 * @returns 利用可能なすべてのgRPCクライアントを含むオブジェクト
 */
export function createGrpcClients(serverAddress: string): GrpcClients {
    return {
        greeter: createGreeterClient(serverAddress),
        posting: createPostingClient(serverAddress),
        omikuji: createOmikujiClient(serverAddress),
    };
}

