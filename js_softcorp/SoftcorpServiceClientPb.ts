/**
 * @fileoverview gRPC-Web generated client stub for Softcorp
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as softcorp_pb from './softcorp_pb';


export class ConnectPublicServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoValidateLoginChallenge = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  validateLoginChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  validateLoginChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  validateLoginChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
        request,
        metadata || {},
        this.methodInfoValidateLoginChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
    request,
    metadata || {},
    this.methodInfoValidateLoginChallenge);
  }

  methodInfoValidateUserCredentials = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/ValidateUserCredentials',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  validateUserCredentials(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  validateUserCredentials(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  validateUserCredentials(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/ValidateUserCredentials',
        request,
        metadata || {},
        this.methodInfoValidateUserCredentials,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateUserCredentials',
    request,
    metadata || {},
    this.methodInfoValidateUserCredentials);
  }

  methodInfoValidateConsentChallenge = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  validateConsentChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  validateConsentChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  validateConsentChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
        request,
        metadata || {},
        this.methodInfoValidateConsentChallenge,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
    request,
    metadata || {},
    this.methodInfoValidateConsentChallenge);
  }

  methodInfoGiveConsent = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/GiveConsent',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  giveConsent(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  giveConsent(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  giveConsent(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/GiveConsent',
        request,
        metadata || {},
        this.methodInfoGiveConsent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/GiveConsent',
    request,
    metadata || {},
    this.methodInfoGiveConsent);
  }

  methodInfoLogout = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/Logout',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  logout(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  logout(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  logout(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/Logout',
        request,
        metadata || {},
        this.methodInfoLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/Logout',
    request,
    metadata || {},
    this.methodInfoLogout);
  }

  methodInfoCreateUser = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/CreateUser',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  createUser(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  createUser(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  createUser(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/CreateUser',
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoSendResetEmail = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/SendResetEmail',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  sendResetEmail(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  sendResetEmail(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  sendResetEmail(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/SendResetEmail',
        request,
        metadata || {},
        this.methodInfoSendResetEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/SendResetEmail',
    request,
    metadata || {},
    this.methodInfoSendResetEmail);
  }

  methodInfoResetPassword = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectPublicService/ResetPassword',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AuthPublicRequest,
    softcorp_pb.AuthPublicResponse,
    (request: softcorp_pb.AuthPublicRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AuthPublicResponse.deserializeBinary
  );

  resetPassword(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AuthPublicResponse>;

  resetPassword(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  resetPassword(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectPublicService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectPublicService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

}

export class ConnectAdminServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoCreateApp = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/CreateApp',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  createApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  createApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  createApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/CreateApp',
        request,
        metadata || {},
        this.methodInfoCreateApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/CreateApp',
    request,
    metadata || {},
    this.methodInfoCreateApp);
  }

  methodInfoGetAppById = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/GetAppById',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  getAppById(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  getAppById(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  getAppById(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/GetAppById',
        request,
        metadata || {},
        this.methodInfoGetAppById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/GetAppById',
    request,
    metadata || {},
    this.methodInfoGetAppById);
  }

  methodInfoUpdateAppDetails = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/UpdateAppDetails',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  updateAppDetails(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  updateAppDetails(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  updateAppDetails(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/UpdateAppDetails',
        request,
        metadata || {},
        this.methodInfoUpdateAppDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppDetails',
    request,
    metadata || {},
    this.methodInfoUpdateAppDetails);
  }

  methodInfoUpdateAppOAuth = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/UpdateAppOAuth',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  updateAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  updateAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  updateAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/UpdateAppOAuth',
        request,
        metadata || {},
        this.methodInfoUpdateAppOAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppOAuth',
    request,
    metadata || {},
    this.methodInfoUpdateAppOAuth);
  }

  methodInfoResetAppOAuth = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/ResetAppOAuth',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  resetAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  resetAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  resetAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/ResetAppOAuth',
        request,
        metadata || {},
        this.methodInfoResetAppOAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/ResetAppOAuth',
    request,
    metadata || {},
    this.methodInfoResetAppOAuth);
  }

  methodInfoUpdateAppSecurity = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/UpdateAppSecurity',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  updateAppSecurity(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  updateAppSecurity(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  updateAppSecurity(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/UpdateAppSecurity',
        request,
        metadata || {},
        this.methodInfoUpdateAppSecurity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/UpdateAppSecurity',
    request,
    metadata || {},
    this.methodInfoUpdateAppSecurity);
  }

  methodInfoGetAppMetrics = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/GetAppMetrics',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  getAppMetrics(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  getAppMetrics(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  getAppMetrics(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/GetAppMetrics',
        request,
        metadata || {},
        this.methodInfoGetAppMetrics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/GetAppMetrics',
    request,
    metadata || {},
    this.methodInfoGetAppMetrics);
  }

  methodInfoDeleteApp = new grpcWeb.MethodDescriptor(
    '/Softcorp.ConnectAdminService/DeleteApp',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.ConnectAdminRequest,
    softcorp_pb.ConnectAdminResponse,
    (request: softcorp_pb.ConnectAdminRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.ConnectAdminResponse.deserializeBinary
  );

  deleteApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.ConnectAdminResponse>;

  deleteApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  deleteApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.ConnectAdminService/DeleteApp',
        request,
        metadata || {},
        this.methodInfoDeleteApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.ConnectAdminService/DeleteApp',
    request,
    metadata || {},
    this.methodInfoDeleteApp);
  }

}

export class UserPublicServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserPublicService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserPublicService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserPublicService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoGetUserByToken = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserPublicService/GetUserByToken',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicUserRequest,
    softcorp_pb.PublicUserResponse,
    (request: softcorp_pb.PublicUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicUserResponse.deserializeBinary
  );

  getUserByToken(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicUserResponse>;

  getUserByToken(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  getUserByToken(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserPublicService/GetUserByToken',
        request,
        metadata || {},
        this.methodInfoGetUserByToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserPublicService/GetUserByToken',
    request,
    metadata || {},
    this.methodInfoGetUserByToken);
  }

  methodInfoUpdateUserPassword = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserPublicService/UpdateUserPassword',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicUserRequest,
    softcorp_pb.PublicUserResponse,
    (request: softcorp_pb.PublicUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicUserResponse.deserializeBinary
  );

  updateUserPassword(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicUserResponse>;

  updateUserPassword(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  updateUserPassword(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserPublicService/UpdateUserPassword',
        request,
        metadata || {},
        this.methodInfoUpdateUserPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserPassword',
    request,
    metadata || {},
    this.methodInfoUpdateUserPassword);
  }

  methodInfoUpdateUserEmail = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserPublicService/UpdateUserEmail',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicUserRequest,
    softcorp_pb.PublicUserResponse,
    (request: softcorp_pb.PublicUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicUserResponse.deserializeBinary
  );

  updateUserEmail(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicUserResponse>;

  updateUserEmail(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  updateUserEmail(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserPublicService/UpdateUserEmail',
        request,
        metadata || {},
        this.methodInfoUpdateUserEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserEmail',
    request,
    metadata || {},
    this.methodInfoUpdateUserEmail);
  }

  methodInfoUpdateUserGender = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserPublicService/UpdateUserGender',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicUserRequest,
    softcorp_pb.PublicUserResponse,
    (request: softcorp_pb.PublicUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicUserResponse.deserializeBinary
  );

  updateUserGender(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicUserResponse>;

  updateUserGender(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  updateUserGender(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserPublicService/UpdateUserGender',
        request,
        metadata || {},
        this.methodInfoUpdateUserGender,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserPublicService/UpdateUserGender',
    request,
    metadata || {},
    this.methodInfoUpdateUserGender);
  }

  methodInfoDeleteUser = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserPublicService/DeleteUser',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicUserRequest,
    softcorp_pb.PublicUserResponse,
    (request: softcorp_pb.PublicUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicUserResponse.deserializeBinary
  );

  deleteUser(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicUserResponse>;

  deleteUser(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  deleteUser(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserPublicService/DeleteUser',
        request,
        metadata || {},
        this.methodInfoDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserPublicService/DeleteUser',
    request,
    metadata || {},
    this.methodInfoDeleteUser);
  }

}

export class UserAdminServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserAdminService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserAdminService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserAdminService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoCreateUser = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserAdminService/CreateUser',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminUserRequest,
    softcorp_pb.AdminUserResponse,
    (request: softcorp_pb.AdminUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminUserResponse.deserializeBinary
  );

  createUser(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminUserResponse>;

  createUser(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  createUser(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserAdminService/CreateUser',
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserAdminService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoGetUserById = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserAdminService/GetUserById',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminUserRequest,
    softcorp_pb.AdminUserResponse,
    (request: softcorp_pb.AdminUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminUserResponse.deserializeBinary
  );

  getUserById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminUserResponse>;

  getUserById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getUserById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserAdminService/GetUserById',
        request,
        metadata || {},
        this.methodInfoGetUserById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserAdminService/GetUserById',
    request,
    metadata || {},
    this.methodInfoGetUserById);
  }

  methodInfoGetUserByEmail = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserAdminService/GetUserByEmail',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminUserRequest,
    softcorp_pb.AdminUserResponse,
    (request: softcorp_pb.AdminUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminUserResponse.deserializeBinary
  );

  getUserByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminUserResponse>;

  getUserByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getUserByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserAdminService/GetUserByEmail',
        request,
        metadata || {},
        this.methodInfoGetUserByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserAdminService/GetUserByEmail',
    request,
    metadata || {},
    this.methodInfoGetUserByEmail);
  }

  methodInfoGetBulkUsersById = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserAdminService/GetBulkUsersById',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminUserRequest,
    softcorp_pb.AdminUserResponse,
    (request: softcorp_pb.AdminUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminUserResponse.deserializeBinary
  );

  getBulkUsersById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminUserResponse>;

  getBulkUsersById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getBulkUsersById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserAdminService/GetBulkUsersById',
        request,
        metadata || {},
        this.methodInfoGetBulkUsersById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserAdminService/GetBulkUsersById',
    request,
    metadata || {},
    this.methodInfoGetBulkUsersById);
  }

  methodInfoGetBulkUsersByEmail = new grpcWeb.MethodDescriptor(
    '/Softcorp.UserAdminService/GetBulkUsersByEmail',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminUserRequest,
    softcorp_pb.AdminUserResponse,
    (request: softcorp_pb.AdminUserRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminUserResponse.deserializeBinary
  );

  getBulkUsersByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminUserResponse>;

  getBulkUsersByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getBulkUsersByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.UserAdminService/GetBulkUsersByEmail',
        request,
        metadata || {},
        this.methodInfoGetBulkUsersByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.UserAdminService/GetBulkUsersByEmail',
    request,
    metadata || {},
    this.methodInfoGetBulkUsersByEmail);
  }

}

export class CollaborationPublicServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationPublicService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationPublicService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationPublicService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

}

export class CollaborationAdminServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoInitCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/InitCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  initCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  initCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  initCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/InitCollaboration',
        request,
        metadata || {},
        this.methodInfoInitCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/InitCollaboration',
    request,
    metadata || {},
    this.methodInfoInitCollaboration);
  }

  methodInfoCreateCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/CreateCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  createCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  createCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  createCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/CreateCollaboration',
        request,
        metadata || {},
        this.methodInfoCreateCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/CreateCollaboration',
    request,
    metadata || {},
    this.methodInfoCreateCollaboration);
  }

  methodInfoGetCollaborationById = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/GetCollaborationById',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  getCollaborationById(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationById(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationById(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/GetCollaborationById',
        request,
        metadata || {},
        this.methodInfoGetCollaborationById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetCollaborationById',
    request,
    metadata || {},
    this.methodInfoGetCollaborationById);
  }

  methodInfoGetCollaborationsByObjectId = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  getCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
        request,
        metadata || {},
        this.methodInfoGetCollaborationsByObjectId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
    request,
    metadata || {},
    this.methodInfoGetCollaborationsByObjectId);
  }

  methodInfoGetUserCollaborations = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/GetUserCollaborations',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  getUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  getUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/GetUserCollaborations',
        request,
        metadata || {},
        this.methodInfoGetUserCollaborations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetUserCollaborations',
    request,
    metadata || {},
    this.methodInfoGetUserCollaborations);
  }

  methodInfoGetUserObjectCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  getUserObjectCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  getUserObjectCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getUserObjectCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
        request,
        metadata || {},
        this.methodInfoGetUserObjectCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
    request,
    metadata || {},
    this.methodInfoGetUserObjectCollaboration);
  }

  methodInfoAcceptCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/AcceptCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  acceptCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  acceptCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  acceptCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/AcceptCollaboration',
        request,
        metadata || {},
        this.methodInfoAcceptCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/AcceptCollaboration',
    request,
    metadata || {},
    this.methodInfoAcceptCollaboration);
  }

  methodInfoDeleteCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/DeleteCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  deleteCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/DeleteCollaboration',
        request,
        metadata || {},
        this.methodInfoDeleteCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteCollaboration',
    request,
    metadata || {},
    this.methodInfoDeleteCollaboration);
  }

  methodInfoDeleteCollaborationsByObjectId = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  deleteCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
        request,
        metadata || {},
        this.methodInfoDeleteCollaborationsByObjectId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
    request,
    metadata || {},
    this.methodInfoDeleteCollaborationsByObjectId);
  }

  methodInfoDeleteUserCollaborations = new grpcWeb.MethodDescriptor(
    '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.AdminCollaborationRequest,
    softcorp_pb.AdminCollaborationResponse,
    (request: softcorp_pb.AdminCollaborationRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.AdminCollaborationResponse.deserializeBinary
  );

  deleteUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.AdminCollaborationResponse>;

  deleteUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  deleteUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
        request,
        metadata || {},
        this.methodInfoDeleteUserCollaborations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
    request,
    metadata || {},
    this.methodInfoDeleteUserCollaborations);
  }

}

export class DashboardPublicServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoPing = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/Ping',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.Request,
    softcorp_pb.Response,
    (request: softcorp_pb.Request) => {
      return request.serializeBinary();
    },
    softcorp_pb.Response.deserializeBinary
  );

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/Ping',
        request,
        metadata || {},
        this.methodInfoPing,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/Ping',
    request,
    metadata || {},
    this.methodInfoPing);
  }

  methodInfoCreateOrganization = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/CreateOrganization',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  createOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  createOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  createOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/CreateOrganization',
        request,
        metadata || {},
        this.methodInfoCreateOrganization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/CreateOrganization',
    request,
    metadata || {},
    this.methodInfoCreateOrganization);
  }

  methodInfoGetOrganizations = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/GetOrganizations',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  getOrganizations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  getOrganizations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getOrganizations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/GetOrganizations',
        request,
        metadata || {},
        this.methodInfoGetOrganizations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/GetOrganizations',
    request,
    metadata || {},
    this.methodInfoGetOrganizations);
  }

  methodInfoUpdateOrganizationDetails = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  updateOrganizationDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  updateOrganizationDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateOrganizationDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
        request,
        metadata || {},
        this.methodInfoUpdateOrganizationDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
    request,
    metadata || {},
    this.methodInfoUpdateOrganizationDetails);
  }

  methodInfoDeleteOrganization = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/DeleteOrganization',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  deleteOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  deleteOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  deleteOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/DeleteOrganization',
        request,
        metadata || {},
        this.methodInfoDeleteOrganization,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteOrganization',
    request,
    metadata || {},
    this.methodInfoDeleteOrganization);
  }

  methodInfoCreateConnectApp = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/CreateConnectApp',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  createConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  createConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  createConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/CreateConnectApp',
        request,
        metadata || {},
        this.methodInfoCreateConnectApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/CreateConnectApp',
    request,
    metadata || {},
    this.methodInfoCreateConnectApp);
  }

  methodInfoGetConnectAppsByOrgId = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  getConnectAppsByOrgId(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  getConnectAppsByOrgId(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getConnectAppsByOrgId(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
        request,
        metadata || {},
        this.methodInfoGetConnectAppsByOrgId,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
    request,
    metadata || {},
    this.methodInfoGetConnectAppsByOrgId);
  }

  methodInfoGetConnectAppById = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/GetConnectAppById',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  getConnectAppById(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  getConnectAppById(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getConnectAppById(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/GetConnectAppById',
        request,
        metadata || {},
        this.methodInfoGetConnectAppById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/GetConnectAppById',
    request,
    metadata || {},
    this.methodInfoGetConnectAppById);
  }

  methodInfoUpdateConnectAppDetails = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  updateConnectAppDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
        request,
        metadata || {},
        this.methodInfoUpdateConnectAppDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
    request,
    metadata || {},
    this.methodInfoUpdateConnectAppDetails);
  }

  methodInfoUpdateConnectAppOAuth = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  updateConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
        request,
        metadata || {},
        this.methodInfoUpdateConnectAppOAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
    request,
    metadata || {},
    this.methodInfoUpdateConnectAppOAuth);
  }

  methodInfoResetConnectAppOAuth = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  resetConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  resetConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  resetConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
        request,
        metadata || {},
        this.methodInfoResetConnectAppOAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
    request,
    metadata || {},
    this.methodInfoResetConnectAppOAuth);
  }

  methodInfoUpdateConnectAppSecurity = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  updateConnectAppSecurity(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppSecurity(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppSecurity(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
        request,
        metadata || {},
        this.methodInfoUpdateConnectAppSecurity,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
    request,
    metadata || {},
    this.methodInfoUpdateConnectAppSecurity);
  }

  methodInfoGetAppMetrics = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/GetAppMetrics',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  getAppMetrics(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  getAppMetrics(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getAppMetrics(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/GetAppMetrics',
        request,
        metadata || {},
        this.methodInfoGetAppMetrics,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/GetAppMetrics',
    request,
    metadata || {},
    this.methodInfoGetAppMetrics);
  }

  methodInfoDeleteConnectApp = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/DeleteConnectApp',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  deleteConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  deleteConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  deleteConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/DeleteConnectApp',
        request,
        metadata || {},
        this.methodInfoDeleteConnectApp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteConnectApp',
    request,
    metadata || {},
    this.methodInfoDeleteConnectApp);
  }

  methodInfoInviteCollaborator = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/InviteCollaborator',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  inviteCollaborator(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  inviteCollaborator(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  inviteCollaborator(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/InviteCollaborator',
        request,
        metadata || {},
        this.methodInfoInviteCollaborator,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/InviteCollaborator',
    request,
    metadata || {},
    this.methodInfoInviteCollaborator);
  }

  methodInfoGetCollaborations = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/GetCollaborations',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  getCollaborations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  getCollaborations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getCollaborations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/GetCollaborations',
        request,
        metadata || {},
        this.methodInfoGetCollaborations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/GetCollaborations',
    request,
    metadata || {},
    this.methodInfoGetCollaborations);
  }

  methodInfoAcceptCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/AcceptCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  acceptCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  acceptCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  acceptCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/AcceptCollaboration',
        request,
        metadata || {},
        this.methodInfoAcceptCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/AcceptCollaboration',
    request,
    metadata || {},
    this.methodInfoAcceptCollaboration);
  }

  methodInfoDeleteCollaboration = new grpcWeb.MethodDescriptor(
    '/Softcorp.DashboardPublicService/DeleteCollaboration',
    grpcWeb.MethodType.UNARY,
    softcorp_pb.PublicDashboardRequest,
    softcorp_pb.PublicDashboardResponse,
    (request: softcorp_pb.PublicDashboardRequest) => {
      return request.serializeBinary();
    },
    softcorp_pb.PublicDashboardResponse.deserializeBinary
  );

  deleteCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null): Promise<softcorp_pb.PublicDashboardResponse>;

  deleteCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  deleteCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Softcorp.DashboardPublicService/DeleteCollaboration',
        request,
        metadata || {},
        this.methodInfoDeleteCollaboration,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Softcorp.DashboardPublicService/DeleteCollaboration',
    request,
    metadata || {},
    this.methodInfoDeleteCollaboration);
  }

}

