use tonic::transport::Server;
use backend::proto::helloworld::greeter_server::GreeterServer;
use backend::services::greeter::GreeterService;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50051".parse()?;
    let greeter_service = GreeterService::default();
    
    println!("gRPC サーバーを起動中...");

    Server::builder()
        .add_service(GreeterServer::new(greeter_service))
        .serve(addr)
        .await?;

    Ok(())
}