use tonic::{transport::Server, Request, Response, Status};

pub mod helloworld {
    tonic::include_proto!("helloworld");
}
use helloworld::greeter_server::{Greeter, GreeterServer};
use helloworld::{HelloRequest, HelloResponse};

#[derive(Debug, Default)]
pub struct MyGreeter {}

#[tonic::async_trait]
impl Greeter for MyGreeter {
    async fn say_hello(
        &self,
        request: Request<HelloRequest>,
    ) -> Result<Response<HelloResponse>, Status> {
        println!("Got a request: {:?}", request);

        let reply = HelloResponse {
            message: format!("Hello {}!", request.into_inner().name),
        };

        Ok(Response::new(reply))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:50051".parse()?;
    let greeter = MyGreeter::default();

    println!("gRPC サーバーを起動中...");

    Server::builder()
        .add_service(GreeterServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}