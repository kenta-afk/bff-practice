export { createGrpcClients } from './client-factory';
export type { GrpcClients } from './client-factory';

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

export {
    createOmikujiClient,
    type OmikujiClient,
    type OmikujiRequest,
    type OmikujiResponse
} from './clients/omikuji-client';
