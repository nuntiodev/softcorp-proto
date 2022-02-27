/**
 * @fileoverview gRPC-Web generated client stub for SoftcorpNetwork
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.SoftcorpNetwork = require('./softcorp_network_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.SoftcorpNetwork.NetworkServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.SoftcorpNetwork.NetworkServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpNetwork.Request,
 *   !proto.SoftcorpNetwork.Response>}
 */
const methodDescriptor_NetworkService_Heartbeat = new grpc.web.MethodDescriptor(
  '/SoftcorpNetwork.NetworkService/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpNetwork.Request,
  proto.SoftcorpNetwork.Response,
  /**
   * @param {!proto.SoftcorpNetwork.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpNetwork.Response.deserializeBinary
);


/**
 * @param {!proto.SoftcorpNetwork.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpNetwork.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpNetwork.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpNetwork.NetworkServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Heartbeat,
      callback);
};


/**
 * @param {!proto.SoftcorpNetwork.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpNetwork.Response>}
 *     Promise that resolves to the response
 */
proto.SoftcorpNetwork.NetworkServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpNetwork.NetworkServiceRequest,
 *   !proto.SoftcorpNetwork.NetworkServiceResponse>}
 */
const methodDescriptor_NetworkService_Invite = new grpc.web.MethodDescriptor(
  '/SoftcorpNetwork.NetworkService/Invite',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpNetwork.NetworkServiceRequest,
  proto.SoftcorpNetwork.NetworkServiceResponse,
  /**
   * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpNetwork.NetworkServiceResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpNetwork.NetworkServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpNetwork.NetworkServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpNetwork.NetworkServiceClient.prototype.invite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Invite',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Invite,
      callback);
};


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpNetwork.NetworkServiceResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpNetwork.NetworkServicePromiseClient.prototype.invite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Invite',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Invite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpNetwork.NetworkServiceRequest,
 *   !proto.SoftcorpNetwork.NetworkServiceResponse>}
 */
const methodDescriptor_NetworkService_Accept = new grpc.web.MethodDescriptor(
  '/SoftcorpNetwork.NetworkService/Accept',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpNetwork.NetworkServiceRequest,
  proto.SoftcorpNetwork.NetworkServiceResponse,
  /**
   * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpNetwork.NetworkServiceResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpNetwork.NetworkServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpNetwork.NetworkServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpNetwork.NetworkServiceClient.prototype.accept =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Accept',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Accept,
      callback);
};


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpNetwork.NetworkServiceResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpNetwork.NetworkServicePromiseClient.prototype.accept =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Accept',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Accept);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpNetwork.NetworkServiceRequest,
 *   !proto.SoftcorpNetwork.NetworkServiceResponse>}
 */
const methodDescriptor_NetworkService_GetConnections = new grpc.web.MethodDescriptor(
  '/SoftcorpNetwork.NetworkService/GetConnections',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpNetwork.NetworkServiceRequest,
  proto.SoftcorpNetwork.NetworkServiceResponse,
  /**
   * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpNetwork.NetworkServiceResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpNetwork.NetworkServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpNetwork.NetworkServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpNetwork.NetworkServiceClient.prototype.getConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/GetConnections',
      request,
      metadata || {},
      methodDescriptor_NetworkService_GetConnections,
      callback);
};


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpNetwork.NetworkServiceResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpNetwork.NetworkServicePromiseClient.prototype.getConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/GetConnections',
      request,
      metadata || {},
      methodDescriptor_NetworkService_GetConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpNetwork.NetworkServiceRequest,
 *   !proto.SoftcorpNetwork.NetworkServiceResponse>}
 */
const methodDescriptor_NetworkService_Remove = new grpc.web.MethodDescriptor(
  '/SoftcorpNetwork.NetworkService/Remove',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpNetwork.NetworkServiceRequest,
  proto.SoftcorpNetwork.NetworkServiceResponse,
  /**
   * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpNetwork.NetworkServiceResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpNetwork.NetworkServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpNetwork.NetworkServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpNetwork.NetworkServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Remove',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Remove,
      callback);
};


/**
 * @param {!proto.SoftcorpNetwork.NetworkServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpNetwork.NetworkServiceResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpNetwork.NetworkServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpNetwork.NetworkService/Remove',
      request,
      metadata || {},
      methodDescriptor_NetworkService_Remove);
};


module.exports = proto.SoftcorpNetwork;

