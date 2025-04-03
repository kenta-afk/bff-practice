FROM rust:slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    protobuf-compiler \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY . .

RUN cargo build --release

EXPOSE 50051

CMD ["/app/target/release/grpc-server"]