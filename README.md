build.rs ──生成→ OUT_DIR/helloworld.rs
                   │
                   ↓ include_proto!
lib.rs ───────→ proto/mod.rs ───────→ services/mod.rs
  │               │                     │
  │               │                     │
  ↓               ↓                     ↓
main.rs ←── proto::helloworld     services::greeter
                                    │
                                    ↓
                                  service.rs（実装）