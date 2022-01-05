import * as grpcWeb from 'grpc-web';

import * as softcorp_pb from './softcorp_pb';


export class ConnectPublicServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  validateLoginChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  validateUserCredentials(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  validateConsentChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  giveConsent(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  logout(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  createUser(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  sendResetEmail(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

  resetPassword(
    request: softcorp_pb.AuthPublicRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AuthPublicResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AuthPublicResponse>;

}

export class ConnectAdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  createApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  getAppById(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  updateAppDetails(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  updateAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  resetAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  updateAppSecurity(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  getAppMetrics(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

  deleteApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.ConnectAdminResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.ConnectAdminResponse>;

}

export class UserPublicServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  getUserByToken(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  updateUserPassword(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  updateUserEmail(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  updateUserGender(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

  deleteUser(
    request: softcorp_pb.PublicUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicUserResponse>;

}

export class UserAdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  createUser(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getUserById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getUserByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getBulkUsersById(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

  getBulkUsersByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminUserResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminUserResponse>;

}

export class CollaborationPublicServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

}

export class CollaborationAdminServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  initCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  createCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationById(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  getUserObjectCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  acceptCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

  deleteUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.AdminCollaborationResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.AdminCollaborationResponse>;

}

export class DashboardPublicServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.Response) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.Response>;

  createOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getOrganizations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateOrganizationDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  deleteOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  createConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getConnectAppsByOrgId(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getConnectAppById(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  resetConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppSecurity(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getAppMetrics(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  deleteConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  inviteCollaborator(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  getCollaborations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  acceptCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

  deleteCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: softcorp_pb.PublicDashboardResponse) => void
  ): grpcWeb.ClientReadableStream<softcorp_pb.PublicDashboardResponse>;

}

export class ConnectPublicServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

  validateLoginChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  validateUserCredentials(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  validateConsentChallenge(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  giveConsent(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  logout(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  createUser(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  sendResetEmail(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

  resetPassword(
    request: softcorp_pb.AuthPublicRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AuthPublicResponse>;

}

export class ConnectAdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

  createApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  getAppById(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  updateAppDetails(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  updateAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  resetAppOAuth(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  updateAppSecurity(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  getAppMetrics(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

  deleteApp(
    request: softcorp_pb.ConnectAdminRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.ConnectAdminResponse>;

}

export class UserPublicServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

  getUserByToken(
    request: softcorp_pb.PublicUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicUserResponse>;

  updateUserPassword(
    request: softcorp_pb.PublicUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicUserResponse>;

  updateUserEmail(
    request: softcorp_pb.PublicUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicUserResponse>;

  updateUserGender(
    request: softcorp_pb.PublicUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicUserResponse>;

  deleteUser(
    request: softcorp_pb.PublicUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicUserResponse>;

}

export class UserAdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

  createUser(
    request: softcorp_pb.AdminUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminUserResponse>;

  getUserById(
    request: softcorp_pb.AdminUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminUserResponse>;

  getUserByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminUserResponse>;

  getBulkUsersById(
    request: softcorp_pb.AdminUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminUserResponse>;

  getBulkUsersByEmail(
    request: softcorp_pb.AdminUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminUserResponse>;

}

export class CollaborationPublicServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

}

export class CollaborationAdminServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

  initCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  createCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationById(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  getCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  getUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  getUserObjectCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  acceptCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaboration(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  deleteCollaborationsByObjectId(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

  deleteUserCollaborations(
    request: softcorp_pb.AdminCollaborationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.AdminCollaborationResponse>;

}

export class DashboardPublicServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ping(
    request: softcorp_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.Response>;

  createOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  getOrganizations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  updateOrganizationDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  deleteOrganization(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  createConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  getConnectAppsByOrgId(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  getConnectAppById(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppDetails(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  resetConnectAppOAuth(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  updateConnectAppSecurity(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  getAppMetrics(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  deleteConnectApp(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  inviteCollaborator(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  getCollaborations(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  acceptCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

  deleteCollaboration(
    request: softcorp_pb.PublicDashboardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<softcorp_pb.PublicDashboardResponse>;

}

