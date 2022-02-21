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
proto.Softcorp.ConnectPublicServiceClient =
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
proto.Softcorp.ConnectPublicServicePromiseClient =
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
const methodDescriptor_ConnectPublicService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/Ping',
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
proto.Softcorp.ConnectPublicServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_Ping,
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
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_ValidateLoginChallenge = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.validateLoginChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ValidateLoginChallenge,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.validateLoginChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ValidateLoginChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_ValidateUserCredentials = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/ValidateUserCredentials',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.validateUserCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateUserCredentials',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ValidateUserCredentials,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.validateUserCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateUserCredentials',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ValidateUserCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_ValidateConsentChallenge = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.validateConsentChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ValidateConsentChallenge,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.validateConsentChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ValidateConsentChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_GiveConsent = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/GiveConsent',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.giveConsent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_GiveConsent,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.giveConsent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/GiveConsent',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_GiveConsent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_Logout = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/Logout',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/Logout',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_Logout,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/Logout',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_Logout);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_CreateUser = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_CreateUser,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_SendResetEmail = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/SendResetEmail',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.sendResetEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_SendResetEmail,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.sendResetEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/SendResetEmail',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_SendResetEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AuthPublicRequest,
 *   !proto.Softcorp.AuthPublicResponse>}
 */
const methodDescriptor_ConnectPublicService_ResetPassword = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectPublicService/ResetPassword',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AuthPublicRequest,
  proto.Softcorp.AuthPublicResponse,
  /**
   * @param {!proto.Softcorp.AuthPublicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AuthPublicResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AuthPublicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AuthPublicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectPublicServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ResetPassword,
      callback);
};


/**
 * @param {!proto.Softcorp.AuthPublicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AuthPublicResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectPublicServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectPublicService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_ConnectPublicService_ResetPassword);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.ConnectAdminServiceClient =
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
proto.Softcorp.ConnectAdminServicePromiseClient =
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
const methodDescriptor_ConnectAdminService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/Ping',
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
proto.Softcorp.ConnectAdminServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/Ping',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_Ping,
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
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/Ping',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_CreateApp = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/CreateApp',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.createApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/CreateApp',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_CreateApp,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.createApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/CreateApp',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_CreateApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_GetAppById = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/GetAppById',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.getAppById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/GetAppById',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_GetAppById,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.getAppById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/GetAppById',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_GetAppById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_UpdateAppDetails = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/UpdateAppDetails',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.updateAppDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppDetails',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_UpdateAppDetails,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.updateAppDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppDetails',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_UpdateAppDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_UpdateAppOAuth = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/UpdateAppOAuth',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.updateAppOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppOAuth',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_UpdateAppOAuth,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.updateAppOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppOAuth',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_UpdateAppOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_ResetAppOAuth = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/ResetAppOAuth',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.resetAppOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/ResetAppOAuth',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_ResetAppOAuth,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.resetAppOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/ResetAppOAuth',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_ResetAppOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_UpdateAppSecurity = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/UpdateAppSecurity',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.updateAppSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppSecurity',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_UpdateAppSecurity,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.updateAppSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppSecurity',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_UpdateAppSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_GetAppMetrics = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/GetAppMetrics',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.getAppMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_GetAppMetrics,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.getAppMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_GetAppMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.ConnectAdminRequest,
 *   !proto.Softcorp.ConnectAdminResponse>}
 */
const methodDescriptor_ConnectAdminService_DeleteApp = new grpc.web.MethodDescriptor(
  '/Softcorp.ConnectAdminService/DeleteApp',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.ConnectAdminRequest,
  proto.Softcorp.ConnectAdminResponse,
  /**
   * @param {!proto.Softcorp.ConnectAdminRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.ConnectAdminResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.ConnectAdminResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.ConnectAdminResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.ConnectAdminServiceClient.prototype.deleteApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_DeleteApp,
      callback);
};


/**
 * @param {!proto.Softcorp.ConnectAdminRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.ConnectAdminResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.ConnectAdminServicePromiseClient.prototype.deleteApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.ConnectAdminService/DeleteApp',
      request,
      metadata || {},
      methodDescriptor_ConnectAdminService_DeleteApp);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.UserPublicServiceClient =
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
proto.Softcorp.UserPublicServicePromiseClient =
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
const methodDescriptor_UserPublicService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.UserPublicService/Ping',
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
proto.Softcorp.UserPublicServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_Ping,
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
proto.Softcorp.UserPublicServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicUserRequest,
 *   !proto.Softcorp.PublicUserResponse>}
 */
const methodDescriptor_UserPublicService_GetUserByToken = new grpc.web.MethodDescriptor(
  '/Softcorp.UserPublicService/GetUserByToken',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicUserRequest,
  proto.Softcorp.PublicUserResponse,
  /**
   * @param {!proto.Softcorp.PublicUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserPublicServiceClient.prototype.getUserByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserPublicService/GetUserByToken',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_GetUserByToken,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserPublicServicePromiseClient.prototype.getUserByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserPublicService/GetUserByToken',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_GetUserByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicUserRequest,
 *   !proto.Softcorp.PublicUserResponse>}
 */
const methodDescriptor_UserPublicService_UpdateUserPassword = new grpc.web.MethodDescriptor(
  '/Softcorp.UserPublicService/UpdateUserPassword',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicUserRequest,
  proto.Softcorp.PublicUserResponse,
  /**
   * @param {!proto.Softcorp.PublicUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserPublicServiceClient.prototype.updateUserPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserPassword',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_UpdateUserPassword,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserPublicServicePromiseClient.prototype.updateUserPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserPassword',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_UpdateUserPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicUserRequest,
 *   !proto.Softcorp.PublicUserResponse>}
 */
const methodDescriptor_UserPublicService_UpdateUserEmail = new grpc.web.MethodDescriptor(
  '/Softcorp.UserPublicService/UpdateUserEmail',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicUserRequest,
  proto.Softcorp.PublicUserResponse,
  /**
   * @param {!proto.Softcorp.PublicUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserPublicServiceClient.prototype.updateUserEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserEmail',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_UpdateUserEmail,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserPublicServicePromiseClient.prototype.updateUserEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserEmail',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_UpdateUserEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicUserRequest,
 *   !proto.Softcorp.PublicUserResponse>}
 */
const methodDescriptor_UserPublicService_UpdateUserGender = new grpc.web.MethodDescriptor(
  '/Softcorp.UserPublicService/UpdateUserGender',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicUserRequest,
  proto.Softcorp.PublicUserResponse,
  /**
   * @param {!proto.Softcorp.PublicUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserPublicServiceClient.prototype.updateUserGender =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserGender',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_UpdateUserGender,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserPublicServicePromiseClient.prototype.updateUserGender =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserGender',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_UpdateUserGender);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicUserRequest,
 *   !proto.Softcorp.PublicUserResponse>}
 */
const methodDescriptor_UserPublicService_DeleteUser = new grpc.web.MethodDescriptor(
  '/Softcorp.UserPublicService/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicUserRequest,
  proto.Softcorp.PublicUserResponse,
  /**
   * @param {!proto.Softcorp.PublicUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserPublicServiceClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserPublicService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_DeleteUser,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserPublicServicePromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserPublicService/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserPublicService_DeleteUser);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.UserAdminServiceClient =
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
proto.Softcorp.UserAdminServicePromiseClient =
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
const methodDescriptor_UserAdminService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.UserAdminService/Ping',
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
proto.Softcorp.UserAdminServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserAdminService/Ping',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_Ping,
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
proto.Softcorp.UserAdminServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserAdminService/Ping',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminUserRequest,
 *   !proto.Softcorp.AdminUserResponse>}
 */
const methodDescriptor_UserAdminService_CreateUser = new grpc.web.MethodDescriptor(
  '/Softcorp.UserAdminService/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminUserRequest,
  proto.Softcorp.AdminUserResponse,
  /**
   * @param {!proto.Softcorp.AdminUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserAdminServiceClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserAdminService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_CreateUser,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserAdminServicePromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserAdminService/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminUserRequest,
 *   !proto.Softcorp.AdminUserResponse>}
 */
const methodDescriptor_UserAdminService_GetUserById = new grpc.web.MethodDescriptor(
  '/Softcorp.UserAdminService/GetUserById',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminUserRequest,
  proto.Softcorp.AdminUserResponse,
  /**
   * @param {!proto.Softcorp.AdminUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserAdminServiceClient.prototype.getUserById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetUserById',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetUserById,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserAdminServicePromiseClient.prototype.getUserById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetUserById',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetUserById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminUserRequest,
 *   !proto.Softcorp.AdminUserResponse>}
 */
const methodDescriptor_UserAdminService_GetUserByEmail = new grpc.web.MethodDescriptor(
  '/Softcorp.UserAdminService/GetUserByEmail',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminUserRequest,
  proto.Softcorp.AdminUserResponse,
  /**
   * @param {!proto.Softcorp.AdminUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserAdminServiceClient.prototype.getUserByEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetUserByEmail',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetUserByEmail,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserAdminServicePromiseClient.prototype.getUserByEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetUserByEmail',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetUserByEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminUserRequest,
 *   !proto.Softcorp.AdminUserResponse>}
 */
const methodDescriptor_UserAdminService_GetBulkUsersById = new grpc.web.MethodDescriptor(
  '/Softcorp.UserAdminService/GetBulkUsersById',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminUserRequest,
  proto.Softcorp.AdminUserResponse,
  /**
   * @param {!proto.Softcorp.AdminUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserAdminServiceClient.prototype.getBulkUsersById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetBulkUsersById',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetBulkUsersById,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserAdminServicePromiseClient.prototype.getBulkUsersById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetBulkUsersById',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetBulkUsersById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminUserRequest,
 *   !proto.Softcorp.AdminUserResponse>}
 */
const methodDescriptor_UserAdminService_GetBulkUsersByEmail = new grpc.web.MethodDescriptor(
  '/Softcorp.UserAdminService/GetBulkUsersByEmail',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminUserRequest,
  proto.Softcorp.AdminUserResponse,
  /**
   * @param {!proto.Softcorp.AdminUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminUserResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.UserAdminServiceClient.prototype.getBulkUsersByEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetBulkUsersByEmail',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetBulkUsersByEmail,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminUserResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.UserAdminServicePromiseClient.prototype.getBulkUsersByEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.UserAdminService/GetBulkUsersByEmail',
      request,
      metadata || {},
      methodDescriptor_UserAdminService_GetBulkUsersByEmail);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.CollaborationPublicServiceClient =
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
proto.Softcorp.CollaborationPublicServicePromiseClient =
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
const methodDescriptor_CollaborationPublicService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationPublicService/Ping',
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
proto.Softcorp.CollaborationPublicServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_CollaborationPublicService_Ping,
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
proto.Softcorp.CollaborationPublicServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_CollaborationPublicService_Ping);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.CollaborationAdminServiceClient =
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
proto.Softcorp.CollaborationAdminServicePromiseClient =
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
const methodDescriptor_CollaborationAdminService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/Ping',
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
proto.Softcorp.CollaborationAdminServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/Ping',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_Ping,
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
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/Ping',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_InitCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/InitCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.initCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/InitCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_InitCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.initCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/InitCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_InitCollaboration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_CreateCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/CreateCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.createCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/CreateCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_CreateCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.createCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/CreateCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_CreateCollaboration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_GetCollaborationById = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/GetCollaborationById',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.getCollaborationById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetCollaborationById',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetCollaborationById,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.getCollaborationById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetCollaborationById',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetCollaborationById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_GetCollaborationsByObjectId = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.getCollaborationsByObjectId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetCollaborationsByObjectId,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.getCollaborationsByObjectId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetCollaborationsByObjectId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_GetUserCollaborations = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/GetUserCollaborations',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.getUserCollaborations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetUserCollaborations',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetUserCollaborations,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.getUserCollaborations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetUserCollaborations',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetUserCollaborations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_GetUserObjectCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.getUserObjectCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetUserObjectCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.getUserObjectCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_GetUserObjectCollaboration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_AcceptCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/AcceptCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.acceptCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/AcceptCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_AcceptCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.acceptCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/AcceptCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_AcceptCollaboration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_DeleteCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/DeleteCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.deleteCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_DeleteCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.deleteCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteCollaboration',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_DeleteCollaboration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_DeleteCollaborationsByObjectId = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.deleteCollaborationsByObjectId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_DeleteCollaborationsByObjectId,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.deleteCollaborationsByObjectId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_DeleteCollaborationsByObjectId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.AdminCollaborationRequest,
 *   !proto.Softcorp.AdminCollaborationResponse>}
 */
const methodDescriptor_CollaborationAdminService_DeleteUserCollaborations = new grpc.web.MethodDescriptor(
  '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.AdminCollaborationRequest,
  proto.Softcorp.AdminCollaborationResponse,
  /**
   * @param {!proto.Softcorp.AdminCollaborationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.AdminCollaborationResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.AdminCollaborationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.AdminCollaborationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.CollaborationAdminServiceClient.prototype.deleteUserCollaborations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_DeleteUserCollaborations,
      callback);
};


/**
 * @param {!proto.Softcorp.AdminCollaborationRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.AdminCollaborationResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.CollaborationAdminServicePromiseClient.prototype.deleteUserCollaborations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
      request,
      metadata || {},
      methodDescriptor_CollaborationAdminService_DeleteUserCollaborations);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.Softcorp.DashboardPublicServiceClient =
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
proto.Softcorp.DashboardPublicServicePromiseClient =
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
const methodDescriptor_DashboardPublicService_Ping = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/Ping',
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
proto.Softcorp.DashboardPublicServiceClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_Ping,
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
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/Ping',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_Ping);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/CreateOrganization',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_GetOrganizations = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/GetOrganizations',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.getOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetOrganizations',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetOrganizations,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.getOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetOrganizations',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_UpdateOrganizationDetails = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.updateOrganizationDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateOrganizationDetails,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.updateOrganizationDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateOrganizationDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_DeleteOrganization = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/DeleteOrganization',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.deleteOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_DeleteOrganization,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.deleteOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_DeleteOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_CreateConnectApp = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/CreateConnectApp',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.createConnectApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/CreateConnectApp',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_CreateConnectApp,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.createConnectApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/CreateConnectApp',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_CreateConnectApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_GetConnectAppsByOrgId = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.getConnectAppsByOrgId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetConnectAppsByOrgId,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.getConnectAppsByOrgId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetConnectAppsByOrgId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_GetConnectAppById = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/GetConnectAppById',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.getConnectAppById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetConnectAppById',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetConnectAppById,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.getConnectAppById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetConnectAppById',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetConnectAppById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_UpdateConnectAppDetails = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.updateConnectAppDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateConnectAppDetails,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.updateConnectAppDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateConnectAppDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_UpdateConnectAppOAuth = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.updateConnectAppOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateConnectAppOAuth,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.updateConnectAppOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateConnectAppOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_ResetConnectAppOAuth = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.resetConnectAppOAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_ResetConnectAppOAuth,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.resetConnectAppOAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_ResetConnectAppOAuth);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_UpdateConnectAppSecurity = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.updateConnectAppSecurity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateConnectAppSecurity,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.updateConnectAppSecurity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_UpdateConnectAppSecurity);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_GetAppMetrics = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/GetAppMetrics',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.getAppMetrics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetAppMetrics,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.getAppMetrics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetAppMetrics',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetAppMetrics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_DeleteConnectApp = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/DeleteConnectApp',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.deleteConnectApp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteConnectApp',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_DeleteConnectApp,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.deleteConnectApp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteConnectApp',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_DeleteConnectApp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_InviteCollaborator = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/InviteCollaborator',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.inviteCollaborator =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/InviteCollaborator',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_InviteCollaborator,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.inviteCollaborator =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/InviteCollaborator',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_InviteCollaborator);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_GetCollaborations = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/GetCollaborations',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.getCollaborations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetCollaborations',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetCollaborations,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.getCollaborations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/GetCollaborations',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_GetCollaborations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_AcceptCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/AcceptCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.acceptCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/AcceptCollaboration',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_AcceptCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.acceptCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/AcceptCollaboration',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_AcceptCollaboration);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Softcorp.PublicDashboardRequest,
 *   !proto.Softcorp.PublicDashboardResponse>}
 */
const methodDescriptor_DashboardPublicService_DeleteCollaboration = new grpc.web.MethodDescriptor(
  '/Softcorp.DashboardPublicService/DeleteCollaboration',
  grpc.web.MethodType.UNARY,
  proto.Softcorp.PublicDashboardRequest,
  proto.Softcorp.PublicDashboardResponse,
  /**
   * @param {!proto.Softcorp.PublicDashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Softcorp.PublicDashboardResponse.deserializeBinary
);


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Softcorp.PublicDashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Softcorp.PublicDashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Softcorp.DashboardPublicServiceClient.prototype.deleteCollaboration =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteCollaboration',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_DeleteCollaboration,
      callback);
};


/**
 * @param {!proto.Softcorp.PublicDashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Softcorp.PublicDashboardResponse>}
 *     Promise that resolves to the response
 */
proto.Softcorp.DashboardPublicServicePromiseClient.prototype.deleteCollaboration =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteCollaboration',
      request,
      metadata || {},
      methodDescriptor_DashboardPublicService_DeleteCollaboration);
};


module.exports = proto.Softcorp;

