.PHONY: build-user-go-proto
build-user-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./softcorp_user.proto
	
.PHONY: build-user-js-proto
build-user-js-proto:
	protoc -I. softcorp_user.proto --js_out=import_style=commonjs:./js_softcorp/softcorp_user --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_softcorp/softcorp_user

.PHONY: build-network-go-proto
build-network-go-proto:
	protoc -I. --go_out=. --go-grpc_out=require_unimplemented_servers=false:. ./softcorp_network.proto
	
.PHONY: build-network-js-proto
build-network-js-proto:
	protoc -I. softcorp_network.proto --js_out=import_style=commonjs:./js_softcorp/softcorp_network --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./js_softcorp/softcorp_network

.PHONY: build-proto
build-proto:
	make build-user-go-proto && \
	make build-user-js-proto && \
	make build-network-go-proto && \
	make build-network-js-proto
	