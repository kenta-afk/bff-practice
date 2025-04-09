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
        let req = request.into_inner();

        let reply = HelloResponse {
            message: req.name,
        };

        Ok(Response::new(reply))
    }
}