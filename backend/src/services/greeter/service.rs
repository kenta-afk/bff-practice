use tonic::{Request, Response, Status};
use crate::proto::helloworld::greeter_server::Greeter;
use crate::proto::helloworld::{HelloRequest, HelloResponse};

#[derive(Debug, Default)]
pub struct GreeterService {}

#[tonic::async_trait]
impl Greeter for GreeterService {
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