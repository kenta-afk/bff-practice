use tonic::transport::Server;
use backend::proto::helloworld::greeter_server::GreeterServer;
use backend::services::greeter::GreeterService;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50051".parse()?;
    
    // Greeterサービスのインスタンスを作成
    let greeter_service = GreeterService::default();
    
    println!("gRPC サーバーを起動中...");

    // サーバーに各サービスを追加
    Server::builder()
        .add_service(GreeterServer::new(greeter_service))
        // 新しいサービスを追加する場合:
        // .add_service(UserServer::new(user_service))
        .serve(addr)
        .await?;

    Ok(())
}