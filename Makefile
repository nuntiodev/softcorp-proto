.PHONY: build-go-proto
build-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./softcorp.proto
	
.PHONY: build-dart-proto
build-dart-proto:
	protoc -I. --dart_out=grpc:./dart_softcorp/lib/ ./softcorp.proto google/protobuf/timestamp.proto

.PHONY: build-proto
build-proto:
	make build-go-proto && \
	make build-dart-proto