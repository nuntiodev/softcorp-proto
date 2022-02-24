/**
 * @fileoverview gRPC-Web generated client stub for Softcorp
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
proto.Softcorp = require('./softcorp_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.UserServiceClient =
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
proto.Softcorp.UserServicePromiseClient =
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
 *   !proto.Softcorp.Request,
 *   !proto.Softcorp.Response>}
 */
const methodDescriptor_UserService_Liveness = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/Liveness',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.Request,
  proto.Softcorp.Response,
  /**
   * @param {!proto.Softcorp.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.Response.deserializeBinary
);


/**
 * @param {!proto.Softcorp.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.liveness =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/Liveness',
      request,
      metadata || {},
      methodDescriptor_UserService_Liveness,
      callback);
};


/**
 * @param {!proto.Softcorp.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.Response>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.liveness =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/Liveness',
      request,
      metadata || {},
      methodDescriptor_UserService_Liveness);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_Get = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/Get',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_GetAll = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/GetAll',
      request,
      metadata || {},
      methodDescriptor_UserService_GetAll,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/GetAll',
      request,
      metadata || {},
      methodDescriptor_UserService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_UpdatePassword = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/UpdatePassword',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_UpdateEmail = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/UpdateEmail',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.updateEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/UpdateEmail',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateEmail,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.updateEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/UpdateEmail',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_UpdateProfile = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/UpdateProfile',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.updateProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateProfile,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.updateProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_ValidateCredentials = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/ValidateCredentials',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.validateCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/ValidateCredentials',
      request,
      metadata || {},
      methodDescriptor_UserService_ValidateCredentials,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.validateCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/ValidateCredentials',
      request,
      metadata || {},
      methodDescriptor_UserService_ValidateCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.UserRequest,
 *   !proto.Softcorp.UserResponse>}
 */
const methodDescriptor_UserService_Delete = new grpc.web.MethodDescriptor(
  '/Softcorp.UserService/Delete',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.UserRequest,
  proto.Softcorp.UserResponse,
  /**
   * @param {!proto.Softcorp.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.UserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete,
      callback);
};


/**
 * @param {!proto.Softcorp.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.UserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete);
};


module.exports = proto.Softcorp;

