// ファクトリーをエクスポート
export { createGrpcClients } from './client-factory';
export type { GrpcClients } from './client-factory';

// 各クライアントの型とインターフェースをエクスポート
export {
    createGreeterClient,
    type GreeterClient,
    type HelloRequest,
    type HelloResponse
} from './clients/greeter-client';

export {
    createPostingClient,
    type PostingClient,
    type PostingRequest,
    type PostingResponse
} from './clients/posting-client';
// 将来的に追加する可能性のある他のクライアントもここでエクスポート
// export { createUserClient, type UserClient } from './clients/user-client';