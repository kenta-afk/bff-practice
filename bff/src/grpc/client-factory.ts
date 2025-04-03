import { createGreeterClient, GreeterClient } from './clients/greeter-client';
// import { createUserClient, UserClient } from './clients/user-client';

export interface GrpcClients {
    greeter: GreeterClient;
    // user: UserClient; 
}

/**
 * すべてのgRPCクライアントを一度に作成するファクトリー関数
 * @param serverAddress gRPCサーバーのアドレス
 * @returns 利用可能なすべてのgRPCクライアントを含むオブジェクト
 */
export function createGrpcClients(serverAddress: string): GrpcClients {
    return {
        greeter: createGreeterClient(serverAddress),
        // user: createUserClient(serverAddress), // 将来的に追加する可能性のあるクライアント
    };
}