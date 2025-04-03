use tonic::{Request, Response, Status};
use crate::proto::posting::posting_server::Posting;
use crate::proto::posting::{PostingRequest, PostingResponse};

#[derive(Debug, Default)]
pub struct PostingService {}

#[tonic::async_trait]
impl Posting for PostingService {
    async fn create_post(
        &self,
        request: Request<PostingRequest>,
    ) -> Result<Response<PostingResponse>, Status> {
        let req = request.into_inner();
        let reply = PostingResponse {
            title: req.title,
            message: req.message,
        };

        Ok(Response::new(reply))
    } 
} 