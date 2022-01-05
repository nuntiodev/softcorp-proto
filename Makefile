.PHONY: build-go-proto
build-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./softcorp.proto
	
.PHONY: build-dart-proto
build-dart-proto:
	protoc -I. --dart_out=grpc:./dart_softcorp/lib/ ./softcorp.proto google/protobuf/timestamp.proto

.PHONY: build-js-proto
build-js-proto:
	protoc -I. softcorp.proto --js_out=import_style=commonjs+dts:./js_softcorp --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./js_softcorp

.PHONY: build-proto
build-proto:
	make build-go-proto && \
	make build-dart-proto && \
	make build-js-proto