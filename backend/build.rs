fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::compile_protos("proto/helloworld.proto")?;
    tonic_build::compile_protos("proto/posting.proto")?;
    tonic_build::compile_protos("proto/omikuji.proto")?;
    Ok(())
}