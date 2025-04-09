import { create } from 'domain';
import { createGreeterClient, GreeterClient } from './clients/greeter-client';
import { createPostingClient, PostingClient } from './clients/posting-client';
import { createOmikujiClient, OmikujiClient } from './clients/omikuji-client';
// import { createUserClient, UserClient } from './clients/user-client';

export interface GrpcClients {
    greeter: GreeterClient;
    posting: PostingClient;
    omikuji: OmikujiClient;
    // user: UserClient; 
}

// クライアント作成関数の型
type ClientCreator<T> = (serverAddress: string) => T;

// クライアントタイプを解決するためのマップ
const clientCreators = {
    'GreeterClient': createGreeterClient,
    'PostingClient': createPostingClient,
    'OmikujiClient': createOmikujiClient,
} as const;

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
        // user: createUserClient(serverAddress), // 将来的に追加する可能性のあるクライアント
    };
}

/**
 * 特定のgRPCクライアントを取得する関数
 * @param clientType クライアントタイプ
 * @param serverAddress gRPCサーバーのアドレス
 * @returns 指定されたタイプのクライアントインスタンス
 */
export function getClient<T>(clientType: any, serverAddress: string): T {
    const clientName = clientType.name;
    if (clientName === 'GreeterClient') {
        return createGreeterClient(serverAddress) as unknown as T;
    } else if (clientName === 'PostingClient') {
        return createPostingClient(serverAddress) as unknown as T;
    } else if (clientName === 'OmikujiClient') {
        return createOmikujiClient(serverAddress) as unknown as T;
    }

    throw new Error(`Unknown client type: ${clientName}`);
}