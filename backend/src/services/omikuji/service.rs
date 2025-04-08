use tonic::{Request, Response, Status};
use rand::prelude::*;
use crate::proto::omikuji::omikuji_server::Omikuji;
use crate::proto::omikuji::{OmikujiRequest, OmikujiResponse};

#[derive(Debug, Default)]
pub struct OmikujiService {}

#[tonic::async_trait]
impl Omikuji for OmikujiService {
    async fn get_omikuji_result(
        &self,
        request:Request<OmikujiRequest>,
    ) -> Result<Response<OmikujiResponse>, Status> {
        let mut rng = rand::thread_rng();
        let fortune = match rng.gen_range(0..=5) {
            0 => "大吉".to_string(),
            1 => "中吉".to_string(),
            2 => "小吉".to_string(),
            3 => "吉".to_string(),
            4 => "凶".to_string(),
            _ => "大凶".to_string(),
        };

        let reply = OmikujiResponse {
            result: format!("あなたの運勢は「{}」です。", fortune),
        };

        Ok(Response::new(reply))
        
    }
}