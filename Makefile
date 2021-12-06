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

PHONY: update-pubdev-version
update-pubdev-version: echo " name: dart_softcorp
	description: Dart Proto files for internal Softcorp Projects
	version: 0.0.1
	homepage: https://github.com/softcorp-io/softcorp-proto

	environment:
	sdk: ">=2.12.0 <3.0.0"
	flutter: ">=1.17.0"

	dependencies:
	flutter:
		sdk: flutter
	protobuf: ^2.0.0
	grpc: ^3.0.2
	fixnum: ^1.0.0

	dev_dependencies:
	flutter_test:
		sdk: flutter
	flutter_lints: ^1.0.0
	flutter: " >> test.yaml
	