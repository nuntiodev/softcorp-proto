/**
 * @fileoverview gRPC-Web generated client stub for SoftcorpUser
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
proto.SoftcorpUser = require('./softcorp_user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.SoftcorpUser.ServiceClient =
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
proto.SoftcorpUser.ServicePromiseClient =
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
 *   !proto.SoftcorpUser.Request,
 *   !proto.SoftcorpUser.Response>}
 */
const methodDescriptor_Service_Heartbeat = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/Heartbeat',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.Request,
  proto.SoftcorpUser.Response,
  /**
   * @param {!proto.SoftcorpUser.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.Response.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.heartbeat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Service_Heartbeat,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.Response>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.heartbeat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/Heartbeat',
      request,
      metadata || {},
      methodDescriptor_Service_Heartbeat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_Create = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/Create',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/Create',
      request,
      metadata || {},
      methodDescriptor_Service_Create,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/Create',
      request,
      metadata || {},
      methodDescriptor_Service_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_UpdatePassword = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/UpdatePassword',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_Service_UpdatePassword,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_Service_UpdatePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_UpdateEmail = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/UpdateEmail',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.updateEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdateEmail',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateEmail,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.updateEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdateEmail',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_UpdateProfile = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/UpdateProfile',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.updateProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateProfile,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.updateProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdateProfile',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_UpdateNamespace = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/UpdateNamespace',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.updateNamespace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdateNamespace',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateNamespace,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.updateNamespace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/UpdateNamespace',
      request,
      metadata || {},
      methodDescriptor_Service_UpdateNamespace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_Get = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/Get',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/Get',
      request,
      metadata || {},
      methodDescriptor_Service_Get,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/Get',
      request,
      metadata || {},
      methodDescriptor_Service_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_GetAll = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/GetAll',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/GetAll',
      request,
      metadata || {},
      methodDescriptor_Service_GetAll,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/GetAll',
      request,
      metadata || {},
      methodDescriptor_Service_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_ValidateCredentials = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/ValidateCredentials',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.validateCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/ValidateCredentials',
      request,
      metadata || {},
      methodDescriptor_Service_ValidateCredentials,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.validateCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/ValidateCredentials',
      request,
      metadata || {},
      methodDescriptor_Service_ValidateCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_Delete = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/Delete',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/Delete',
      request,
      metadata || {},
      methodDescriptor_Service_Delete,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/Delete',
      request,
      metadata || {},
      methodDescriptor_Service_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SoftcorpUser.UserRequest,
 *   !proto.SoftcorpUser.UserResponse>}
 */
const methodDescriptor_Service_DeleteNamespace = new grpc.web.MethodDescriptor(
  '/SoftcorpUser.Service/DeleteNamespace',
  grpc.web.MethodType.UNARY,
  proto.SoftcorpUser.UserRequest,
  proto.SoftcorpUser.UserResponse,
  /**
   * @param {!proto.SoftcorpUser.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SoftcorpUser.UserResponse.deserializeBinary
);


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SoftcorpUser.UserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SoftcorpUser.UserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SoftcorpUser.ServiceClient.prototype.deleteNamespace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SoftcorpUser.Service/DeleteNamespace',
      request,
      metadata || {},
      methodDescriptor_Service_DeleteNamespace,
      callback);
};


/**
 * @param {!proto.SoftcorpUser.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SoftcorpUser.UserResponse>}
 *     Promise that resolves to the response
 */
proto.SoftcorpUser.ServicePromiseClient.prototype.deleteNamespace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SoftcorpUser.Service/DeleteNamespace',
      request,
      metadata || {},
      methodDescriptor_Service_DeleteNamespace);
};


module.exports = proto.SoftcorpUser;

