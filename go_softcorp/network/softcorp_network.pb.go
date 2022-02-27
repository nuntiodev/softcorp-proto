// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.1
// source: softcorp_network.proto

package network

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NetworkServiceRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Connection *Connection `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty"`
	Accept     bool        `protobuf:"varint,2,opt,name=accept,proto3" json:"accept,omitempty"`
	UserId     string      `protobuf:"bytes,3,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (x *NetworkServiceRequest) Reset() {
	*x = NetworkServiceRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_softcorp_network_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkServiceRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkServiceRequest) ProtoMessage() {}

func (x *NetworkServiceRequest) ProtoReflect() protoreflect.Message {
	mi := &file_softcorp_network_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkServiceRequest.ProtoReflect.Descriptor instead.
func (*NetworkServiceRequest) Descriptor() ([]byte, []int) {
	return file_softcorp_network_proto_rawDescGZIP(), []int{0}
}

func (x *NetworkServiceRequest) GetConnection() *Connection {
	if x != nil {
		return x.Connection
	}
	return nil
}

func (x *NetworkServiceRequest) GetAccept() bool {
	if x != nil {
		return x.Accept
	}
	return false
}

func (x *NetworkServiceRequest) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type NetworkServiceResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Connection *Connection `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty"`
}

func (x *NetworkServiceResponse) Reset() {
	*x = NetworkServiceResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_softcorp_network_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkServiceResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkServiceResponse) ProtoMessage() {}

func (x *NetworkServiceResponse) ProtoReflect() protoreflect.Message {
	mi := &file_softcorp_network_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkServiceResponse.ProtoReflect.Descriptor instead.
func (*NetworkServiceResponse) Descriptor() ([]byte, []int) {
	return file_softcorp_network_proto_rawDescGZIP(), []int{1}
}

func (x *NetworkServiceResponse) GetConnection() *Connection {
	if x != nil {
		return x.Connection
	}
	return nil
}

type Connection struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IdFrom     string                 `protobuf:"bytes,1,opt,name=idFrom,proto3" json:"idFrom,omitempty"`
	IdTo       string                 `protobuf:"bytes,2,opt,name=idTo,proto3" json:"idTo,omitempty"`
	Accepted   bool                   `protobuf:"varint,3,opt,name=accepted,proto3" json:"accepted,omitempty"`
	SendAt     *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=sendAt,proto3" json:"sendAt,omitempty"`
	AcceptedAt *timestamppb.Timestamp `protobuf:"bytes,5,opt,name=acceptedAt,proto3" json:"acceptedAt,omitempty"`
}

func (x *Connection) Reset() {
	*x = Connection{}
	if protoimpl.UnsafeEnabled {
		mi := &file_softcorp_network_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Connection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Connection) ProtoMessage() {}

func (x *Connection) ProtoReflect() protoreflect.Message {
	mi := &file_softcorp_network_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Connection.ProtoReflect.Descriptor instead.
func (*Connection) Descriptor() ([]byte, []int) {
	return file_softcorp_network_proto_rawDescGZIP(), []int{2}
}

func (x *Connection) GetIdFrom() string {
	if x != nil {
		return x.IdFrom
	}
	return ""
}

func (x *Connection) GetIdTo() string {
	if x != nil {
		return x.IdTo
	}
	return ""
}

func (x *Connection) GetAccepted() bool {
	if x != nil {
		return x.Accepted
	}
	return false
}

func (x *Connection) GetSendAt() *timestamppb.Timestamp {
	if x != nil {
		return x.SendAt
	}
	return nil
}

func (x *Connection) GetAcceptedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.AcceptedAt
	}
	return nil
}

type Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Request) Reset() {
	*x = Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_softcorp_network_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

func (x *Request) ProtoReflect() protoreflect.Message {
	mi := &file_softcorp_network_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Request.ProtoReflect.Descriptor instead.
func (*Request) Descriptor() ([]byte, []int) {
	return file_softcorp_network_proto_rawDescGZIP(), []int{3}
}

type Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msg string `protobuf:"bytes,1,opt,name=msg,proto3" json:"msg,omitempty"`
}

func (x *Response) Reset() {
	*x = Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_softcorp_network_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Response) ProtoMessage() {}

func (x *Response) ProtoReflect() protoreflect.Message {
	mi := &file_softcorp_network_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Response.ProtoReflect.Descriptor instead.
func (*Response) Descriptor() ([]byte, []int) {
	return file_softcorp_network_proto_rawDescGZIP(), []int{4}
}

func (x *Response) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

var File_softcorp_network_proto protoreflect.FileDescriptor

var file_softcorp_network_proto_rawDesc = []byte{
	0x0a, 0x16, 0x73, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x5f, 0x6e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f,
	0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c,
	0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x84, 0x01, 0x0a, 0x15, 0x4e,
	0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x3b, 0x0a, 0x0a, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63,
	0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x06, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x22, 0x55, 0x0a, 0x16, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3b, 0x0a, 0x0a, 0x63,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1b, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72,
	0x6b, 0x2e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0a, 0x63, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0xc4, 0x01, 0x0a, 0x0a, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x16, 0x0a, 0x06, 0x69, 0x64, 0x46, 0x72, 0x6f,
	0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x69, 0x64, 0x46, 0x72, 0x6f, 0x6d, 0x12,
	0x12, 0x0a, 0x04, 0x69, 0x64, 0x54, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69,
	0x64, 0x54, 0x6f, 0x12, 0x1a, 0x0a, 0x08, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x12,
	0x32, 0x0a, 0x06, 0x73, 0x65, 0x6e, 0x64, 0x41, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x06, 0x73, 0x65, 0x6e,
	0x64, 0x41, 0x74, 0x12, 0x3a, 0x0a, 0x0a, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x41,
	0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x0a, 0x61, 0x63, 0x63, 0x65, 0x70, 0x74, 0x65, 0x64, 0x41, 0x74, 0x22,
	0x09, 0x0a, 0x07, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x1c, 0x0a, 0x08, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x32, 0xd0, 0x03, 0x0a, 0x0e, 0x4e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x42, 0x0a, 0x09, 0x48,
	0x65, 0x61, 0x72, 0x74, 0x62, 0x65, 0x61, 0x74, 0x12, 0x18, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63,
	0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x19, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x5b, 0x0a, 0x06, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x12, 0x26, 0x2e, 0x53, 0x6f, 0x66, 0x74,
	0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x27, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5b, 0x0a, 0x06,
	0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x12, 0x26, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72,
	0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x27,
	0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x63, 0x0a, 0x0e, 0x47, 0x65, 0x74,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x26, 0x2e, 0x53, 0x6f,
	0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x27, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5b,
	0x0a, 0x06, 0x52, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x12, 0x26, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63,
	0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x27, 0x2e, 0x53, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x4e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x17, 0x5a, 0x15, 0x2e,
	0x2f, 0x67, 0x6f, 0x5f, 0x73, 0x6f, 0x66, 0x74, 0x63, 0x6f, 0x72, 0x70, 0x2f, 0x6e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_softcorp_network_proto_rawDescOnce sync.Once
	file_softcorp_network_proto_rawDescData = file_softcorp_network_proto_rawDesc
)

func file_softcorp_network_proto_rawDescGZIP() []byte {
	file_softcorp_network_proto_rawDescOnce.Do(func() {
		file_softcorp_network_proto_rawDescData = protoimpl.X.CompressGZIP(file_softcorp_network_proto_rawDescData)
	})
	return file_softcorp_network_proto_rawDescData
}

var file_softcorp_network_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_softcorp_network_proto_goTypes = []interface{}{
	(*NetworkServiceRequest)(nil),  // 0: SoftcorpNetwork.NetworkServiceRequest
	(*NetworkServiceResponse)(nil), // 1: SoftcorpNetwork.NetworkServiceResponse
	(*Connection)(nil),             // 2: SoftcorpNetwork.Connection
	(*Request)(nil),                // 3: SoftcorpNetwork.Request
	(*Response)(nil),               // 4: SoftcorpNetwork.Response
	(*timestamppb.Timestamp)(nil),  // 5: google.protobuf.Timestamp
}
var file_softcorp_network_proto_depIdxs = []int32{
	2, // 0: SoftcorpNetwork.NetworkServiceRequest.connection:type_name -> SoftcorpNetwork.Connection
	2, // 1: SoftcorpNetwork.NetworkServiceResponse.connection:type_name -> SoftcorpNetwork.Connection
	5, // 2: SoftcorpNetwork.Connection.sendAt:type_name -> google.protobuf.Timestamp
	5, // 3: SoftcorpNetwork.Connection.acceptedAt:type_name -> google.protobuf.Timestamp
	3, // 4: SoftcorpNetwork.NetworkService.Heartbeat:input_type -> SoftcorpNetwork.Request
	0, // 5: SoftcorpNetwork.NetworkService.Invite:input_type -> SoftcorpNetwork.NetworkServiceRequest
	0, // 6: SoftcorpNetwork.NetworkService.Accept:input_type -> SoftcorpNetwork.NetworkServiceRequest
	0, // 7: SoftcorpNetwork.NetworkService.GetConnections:input_type -> SoftcorpNetwork.NetworkServiceRequest
	0, // 8: SoftcorpNetwork.NetworkService.Remove:input_type -> SoftcorpNetwork.NetworkServiceRequest
	4, // 9: SoftcorpNetwork.NetworkService.Heartbeat:output_type -> SoftcorpNetwork.Response
	1, // 10: SoftcorpNetwork.NetworkService.Invite:output_type -> SoftcorpNetwork.NetworkServiceResponse
	1, // 11: SoftcorpNetwork.NetworkService.Accept:output_type -> SoftcorpNetwork.NetworkServiceResponse
	1, // 12: SoftcorpNetwork.NetworkService.GetConnections:output_type -> SoftcorpNetwork.NetworkServiceResponse
	1, // 13: SoftcorpNetwork.NetworkService.Remove:output_type -> SoftcorpNetwork.NetworkServiceResponse
	9, // [9:14] is the sub-list for method output_type
	4, // [4:9] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_softcorp_network_proto_init() }
func file_softcorp_network_proto_init() {
	if File_softcorp_network_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_softcorp_network_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkServiceRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_softcorp_network_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkServiceResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_softcorp_network_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Connection); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_softcorp_network_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Request); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_softcorp_network_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Response); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_softcorp_network_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_softcorp_network_proto_goTypes,
		DependencyIndexes: file_softcorp_network_proto_depIdxs,
		MessageInfos:      file_softcorp_network_proto_msgTypes,
	}.Build()
	File_softcorp_network_proto = out.File
	file_softcorp_network_proto_rawDesc = nil
	file_softcorp_network_proto_goTypes = nil
	file_softcorp_network_proto_depIdxs = nil
}