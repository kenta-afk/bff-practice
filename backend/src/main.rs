use tonic::transport::Server;
use backend::proto::helloworld::greeter_server::GreeterServer;
use backend::services::greeter::GreeterService;
use backend::proto::posting::posting_server::PostingServer;
use backend::services::posting::PostingService;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50051".parse()?;
    let greeter_service = GreeterService::default();
    let posting_service = PostingService::default();
    
    println!("gRPC サーバーを起動中...");

    Server::builder()
        .add_service(GreeterServer::new(greeter_service))
        .add_service(PostingServer::new(posting_service))
        .serve(addr)
        .await?;

    Ok(())
}