import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import fs from 'fs';

const PROTO_DIR = path.resolve(__dirname, '../proto');

// protoファイルをすべて読み込む関数
export function loadProtos() {
    const protos: Record<string, any> = {};

    // protoディレクトリ内のすべての.protoファイルを取得
    const protoFiles = fs.readdirSync(PROTO_DIR).filter(file => file.endsWith('.proto'));

    for (const file of protoFiles) {
        const protoPath = path.join(PROTO_DIR, file);
        const packageName = path.basename(file, '.proto');

        const packageDefinition = protoLoader.loadSync(protoPath, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        });

        const proto = grpc.loadPackageDefinition(packageDefinition);
        protos[packageName] = proto;
    }

    return protos;
}

// 特定のprotoファイルのみ読み込む関数
export function loadProto(protoName: string) {
    const protoPath = path.join(PROTO_DIR, `${protoName}.proto`);

    const packageDefinition = protoLoader.loadSync(protoPath, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });

    return grpc.loadPackageDefinition(packageDefinition);
}