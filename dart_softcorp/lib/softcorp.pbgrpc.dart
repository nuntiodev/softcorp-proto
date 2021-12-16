///
//  Generated code. Do not modify.
//  source: softcorp.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:async' as $async;

import 'dart:core' as $core;

import 'package:grpc/service_api.dart' as $grpc;
import 'softcorp.pb.dart' as $0;
export 'softcorp.pb.dart';

class ConnectPublicServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.ConnectPublicService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));
  static final _$validateLoginChallenge =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/ValidateLoginChallenge',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$validateUserCredentials =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/ValidateUserCredentials',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$validateConsentChallenge =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/ValidateConsentChallenge',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$giveConsent =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/GiveConsent',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$logout =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/Logout',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$createUser =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/CreateUser',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$sendResetEmail =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/SendResetEmail',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));
  static final _$resetPassword =
      $grpc.ClientMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
          '/Softcorp.ConnectPublicService/ResetPassword',
          ($0.AuthPublicRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AuthPublicResponse.fromBuffer(value));

  ConnectPublicServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> validateLoginChallenge(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validateLoginChallenge, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> validateUserCredentials(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validateUserCredentials, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> validateConsentChallenge(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$validateConsentChallenge, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> giveConsent(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$giveConsent, request, options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> logout(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$logout, request, options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> createUser(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createUser, request, options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> sendResetEmail(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$sendResetEmail, request, options: options);
  }

  $grpc.ResponseFuture<$0.AuthPublicResponse> resetPassword(
      $0.AuthPublicRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$resetPassword, request, options: options);
  }
}

abstract class ConnectPublicServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.ConnectPublicService';

  ConnectPublicServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'ValidateLoginChallenge',
        validateLoginChallenge_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'ValidateUserCredentials',
        validateUserCredentials_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'ValidateConsentChallenge',
        validateConsentChallenge_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'GiveConsent',
        giveConsent_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'Logout',
        logout_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'CreateUser',
        createUser_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'SendResetEmail',
        sendResetEmail_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AuthPublicRequest, $0.AuthPublicResponse>(
        'ResetPassword',
        resetPassword_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AuthPublicRequest.fromBuffer(value),
        ($0.AuthPublicResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> validateLoginChallenge_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return validateLoginChallenge(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> validateUserCredentials_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return validateUserCredentials(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> validateConsentChallenge_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return validateConsentChallenge(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> giveConsent_Pre($grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return giveConsent(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> logout_Pre($grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return logout(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> createUser_Pre($grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return createUser(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> sendResetEmail_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return sendResetEmail(call, await request);
  }

  $async.Future<$0.AuthPublicResponse> resetPassword_Pre($grpc.ServiceCall call,
      $async.Future<$0.AuthPublicRequest> request) async {
    return resetPassword(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
  $async.Future<$0.AuthPublicResponse> validateLoginChallenge(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> validateUserCredentials(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> validateConsentChallenge(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> giveConsent(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> logout(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> createUser(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> sendResetEmail(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
  $async.Future<$0.AuthPublicResponse> resetPassword(
      $grpc.ServiceCall call, $0.AuthPublicRequest request);
}

class ConnectAdminServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.ConnectAdminService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));
  static final _$createApp =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/CreateApp',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$getAppById =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/GetAppById',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$updateAppDetails =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/UpdateAppDetails',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$updateAppOAuth =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/UpdateAppOAuth',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$resetAppOAuth =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/ResetAppOAuth',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$updateAppSecurity =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/UpdateAppSecurity',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$getAppMetrics =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/GetAppMetrics',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));
  static final _$deleteApp =
      $grpc.ClientMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
          '/Softcorp.ConnectAdminService/DeleteApp',
          ($0.ConnectAdminRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.ConnectAdminResponse.fromBuffer(value));

  ConnectAdminServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> createApp(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createApp, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> getAppById(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getAppById, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> updateAppDetails(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateAppDetails, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> updateAppOAuth(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateAppOAuth, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> resetAppOAuth(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$resetAppOAuth, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> updateAppSecurity(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateAppSecurity, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> getAppMetrics(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getAppMetrics, request, options: options);
  }

  $grpc.ResponseFuture<$0.ConnectAdminResponse> deleteApp(
      $0.ConnectAdminRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteApp, request, options: options);
  }
}

abstract class ConnectAdminServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.ConnectAdminService';

  ConnectAdminServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'CreateApp',
            createApp_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'GetAppById',
            getAppById_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'UpdateAppDetails',
            updateAppDetails_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'UpdateAppOAuth',
            updateAppOAuth_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'ResetAppOAuth',
            resetAppOAuth_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'UpdateAppSecurity',
            updateAppSecurity_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'GetAppMetrics',
            getAppMetrics_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
    $addMethod(
        $grpc.ServiceMethod<$0.ConnectAdminRequest, $0.ConnectAdminResponse>(
            'DeleteApp',
            deleteApp_Pre,
            false,
            false,
            ($core.List<$core.int> value) =>
                $0.ConnectAdminRequest.fromBuffer(value),
            ($0.ConnectAdminResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> createApp_Pre($grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return createApp(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> getAppById_Pre($grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return getAppById(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> updateAppDetails_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return updateAppDetails(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> updateAppOAuth_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return updateAppOAuth(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> resetAppOAuth_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return resetAppOAuth(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> updateAppSecurity_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return updateAppSecurity(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> getAppMetrics_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return getAppMetrics(call, await request);
  }

  $async.Future<$0.ConnectAdminResponse> deleteApp_Pre($grpc.ServiceCall call,
      $async.Future<$0.ConnectAdminRequest> request) async {
    return deleteApp(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
  $async.Future<$0.ConnectAdminResponse> createApp(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> getAppById(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> updateAppDetails(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> updateAppOAuth(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> resetAppOAuth(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> updateAppSecurity(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> getAppMetrics(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
  $async.Future<$0.ConnectAdminResponse> deleteApp(
      $grpc.ServiceCall call, $0.ConnectAdminRequest request);
}

class UserPublicServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.UserPublicService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));
  static final _$getUserByToken =
      $grpc.ClientMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
          '/Softcorp.UserPublicService/GetUserByToken',
          ($0.PublicUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicUserResponse.fromBuffer(value));
  static final _$updateUserPassword =
      $grpc.ClientMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
          '/Softcorp.UserPublicService/UpdateUserPassword',
          ($0.PublicUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicUserResponse.fromBuffer(value));
  static final _$updateUserEmail =
      $grpc.ClientMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
          '/Softcorp.UserPublicService/UpdateUserEmail',
          ($0.PublicUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicUserResponse.fromBuffer(value));
  static final _$updateUserGender =
      $grpc.ClientMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
          '/Softcorp.UserPublicService/UpdateUserGender',
          ($0.PublicUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicUserResponse.fromBuffer(value));
  static final _$deleteUser =
      $grpc.ClientMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
          '/Softcorp.UserPublicService/DeleteUser',
          ($0.PublicUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicUserResponse.fromBuffer(value));

  UserPublicServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicUserResponse> getUserByToken(
      $0.PublicUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserByToken, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicUserResponse> updateUserPassword(
      $0.PublicUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateUserPassword, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicUserResponse> updateUserEmail(
      $0.PublicUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateUserEmail, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicUserResponse> updateUserGender(
      $0.PublicUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateUserGender, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicUserResponse> deleteUser(
      $0.PublicUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteUser, request, options: options);
  }
}

abstract class UserPublicServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.UserPublicService';

  UserPublicServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
        'GetUserByToken',
        getUserByToken_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.PublicUserRequest.fromBuffer(value),
        ($0.PublicUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
        'UpdateUserPassword',
        updateUserPassword_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.PublicUserRequest.fromBuffer(value),
        ($0.PublicUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
        'UpdateUserEmail',
        updateUserEmail_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.PublicUserRequest.fromBuffer(value),
        ($0.PublicUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
        'UpdateUserGender',
        updateUserGender_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.PublicUserRequest.fromBuffer(value),
        ($0.PublicUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicUserRequest, $0.PublicUserResponse>(
        'DeleteUser',
        deleteUser_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.PublicUserRequest.fromBuffer(value),
        ($0.PublicUserResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.PublicUserResponse> getUserByToken_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicUserRequest> request) async {
    return getUserByToken(call, await request);
  }

  $async.Future<$0.PublicUserResponse> updateUserPassword_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicUserRequest> request) async {
    return updateUserPassword(call, await request);
  }

  $async.Future<$0.PublicUserResponse> updateUserEmail_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicUserRequest> request) async {
    return updateUserEmail(call, await request);
  }

  $async.Future<$0.PublicUserResponse> updateUserGender_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicUserRequest> request) async {
    return updateUserGender(call, await request);
  }

  $async.Future<$0.PublicUserResponse> deleteUser_Pre($grpc.ServiceCall call,
      $async.Future<$0.PublicUserRequest> request) async {
    return deleteUser(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
  $async.Future<$0.PublicUserResponse> getUserByToken(
      $grpc.ServiceCall call, $0.PublicUserRequest request);
  $async.Future<$0.PublicUserResponse> updateUserPassword(
      $grpc.ServiceCall call, $0.PublicUserRequest request);
  $async.Future<$0.PublicUserResponse> updateUserEmail(
      $grpc.ServiceCall call, $0.PublicUserRequest request);
  $async.Future<$0.PublicUserResponse> updateUserGender(
      $grpc.ServiceCall call, $0.PublicUserRequest request);
  $async.Future<$0.PublicUserResponse> deleteUser(
      $grpc.ServiceCall call, $0.PublicUserRequest request);
}

class UserAdminServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.UserAdminService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));
  static final _$createUser =
      $grpc.ClientMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
          '/Softcorp.UserAdminService/CreateUser',
          ($0.AdminUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AdminUserResponse.fromBuffer(value));
  static final _$getUserById =
      $grpc.ClientMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
          '/Softcorp.UserAdminService/GetUserById',
          ($0.AdminUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AdminUserResponse.fromBuffer(value));
  static final _$getUserByEmail =
      $grpc.ClientMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
          '/Softcorp.UserAdminService/GetUserByEmail',
          ($0.AdminUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AdminUserResponse.fromBuffer(value));
  static final _$getBulkUsersById =
      $grpc.ClientMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
          '/Softcorp.UserAdminService/GetBulkUsersById',
          ($0.AdminUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AdminUserResponse.fromBuffer(value));
  static final _$getBulkUsersByEmail =
      $grpc.ClientMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
          '/Softcorp.UserAdminService/GetBulkUsersByEmail',
          ($0.AdminUserRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.AdminUserResponse.fromBuffer(value));

  UserAdminServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminUserResponse> createUser(
      $0.AdminUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createUser, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminUserResponse> getUserById(
      $0.AdminUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserById, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminUserResponse> getUserByEmail(
      $0.AdminUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserByEmail, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminUserResponse> getBulkUsersById(
      $0.AdminUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getBulkUsersById, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminUserResponse> getBulkUsersByEmail(
      $0.AdminUserRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getBulkUsersByEmail, request, options: options);
  }
}

abstract class UserAdminServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.UserAdminService';

  UserAdminServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
        'CreateUser',
        createUser_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AdminUserRequest.fromBuffer(value),
        ($0.AdminUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
        'GetUserById',
        getUserById_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AdminUserRequest.fromBuffer(value),
        ($0.AdminUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
        'GetUserByEmail',
        getUserByEmail_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AdminUserRequest.fromBuffer(value),
        ($0.AdminUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
        'GetBulkUsersById',
        getBulkUsersById_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AdminUserRequest.fromBuffer(value),
        ($0.AdminUserResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminUserRequest, $0.AdminUserResponse>(
        'GetBulkUsersByEmail',
        getBulkUsersByEmail_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.AdminUserRequest.fromBuffer(value),
        ($0.AdminUserResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.AdminUserResponse> createUser_Pre($grpc.ServiceCall call,
      $async.Future<$0.AdminUserRequest> request) async {
    return createUser(call, await request);
  }

  $async.Future<$0.AdminUserResponse> getUserById_Pre($grpc.ServiceCall call,
      $async.Future<$0.AdminUserRequest> request) async {
    return getUserById(call, await request);
  }

  $async.Future<$0.AdminUserResponse> getUserByEmail_Pre($grpc.ServiceCall call,
      $async.Future<$0.AdminUserRequest> request) async {
    return getUserByEmail(call, await request);
  }

  $async.Future<$0.AdminUserResponse> getBulkUsersById_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminUserRequest> request) async {
    return getBulkUsersById(call, await request);
  }

  $async.Future<$0.AdminUserResponse> getBulkUsersByEmail_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminUserRequest> request) async {
    return getBulkUsersByEmail(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
  $async.Future<$0.AdminUserResponse> createUser(
      $grpc.ServiceCall call, $0.AdminUserRequest request);
  $async.Future<$0.AdminUserResponse> getUserById(
      $grpc.ServiceCall call, $0.AdminUserRequest request);
  $async.Future<$0.AdminUserResponse> getUserByEmail(
      $grpc.ServiceCall call, $0.AdminUserRequest request);
  $async.Future<$0.AdminUserResponse> getBulkUsersById(
      $grpc.ServiceCall call, $0.AdminUserRequest request);
  $async.Future<$0.AdminUserResponse> getBulkUsersByEmail(
      $grpc.ServiceCall call, $0.AdminUserRequest request);
}

class CollaborationPublicServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.CollaborationPublicService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));

  CollaborationPublicServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }
}

abstract class CollaborationPublicServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.CollaborationPublicService';

  CollaborationPublicServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
}

class CollaborationAdminServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.CollaborationAdminService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));
  static final _$initCollaboration = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/InitCollaboration',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$createCollaboration = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/CreateCollaboration',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$getCollaborationById = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/GetCollaborationById',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$getCollaborationsByObjectId = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/GetCollaborationsByObjectId',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$getUserCollaborations = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/GetUserCollaborations',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$getUserObjectCollaboration = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/GetUserObjectCollaboration',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$acceptCollaboration = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/AcceptCollaboration',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$deleteCollaboration = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/DeleteCollaboration',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$deleteCollaborationsByObjectId = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/DeleteCollaborationsByObjectId',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));
  static final _$deleteUserCollaborations = $grpc.ClientMethod<
          $0.AdminCollaborationRequest, $0.AdminCollaborationResponse>(
      '/Softcorp.CollaborationAdminService/DeleteUserCollaborations',
      ($0.AdminCollaborationRequest value) => value.writeToBuffer(),
      ($core.List<$core.int> value) =>
          $0.AdminCollaborationResponse.fromBuffer(value));

  CollaborationAdminServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> initCollaboration(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$initCollaboration, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> createCollaboration(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createCollaboration, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> getCollaborationById(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getCollaborationById, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse>
      getCollaborationsByObjectId($0.AdminCollaborationRequest request,
          {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getCollaborationsByObjectId, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> getUserCollaborations(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserCollaborations, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse>
      getUserObjectCollaboration($0.AdminCollaborationRequest request,
          {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getUserObjectCollaboration, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> acceptCollaboration(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$acceptCollaboration, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> deleteCollaboration(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteCollaboration, request, options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse>
      deleteCollaborationsByObjectId($0.AdminCollaborationRequest request,
          {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteCollaborationsByObjectId, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.AdminCollaborationResponse> deleteUserCollaborations(
      $0.AdminCollaborationRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteUserCollaborations, request,
        options: options);
  }
}

abstract class CollaborationAdminServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.CollaborationAdminService';

  CollaborationAdminServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'InitCollaboration',
        initCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'CreateCollaboration',
        createCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'GetCollaborationById',
        getCollaborationById_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'GetCollaborationsByObjectId',
        getCollaborationsByObjectId_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'GetUserCollaborations',
        getUserCollaborations_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'GetUserObjectCollaboration',
        getUserObjectCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'AcceptCollaboration',
        acceptCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'DeleteCollaboration',
        deleteCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'DeleteCollaborationsByObjectId',
        deleteCollaborationsByObjectId_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.AdminCollaborationRequest,
            $0.AdminCollaborationResponse>(
        'DeleteUserCollaborations',
        deleteUserCollaborations_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.AdminCollaborationRequest.fromBuffer(value),
        ($0.AdminCollaborationResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> initCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return initCollaboration(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> createCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return createCollaboration(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> getCollaborationById_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return getCollaborationById(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> getCollaborationsByObjectId_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return getCollaborationsByObjectId(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> getUserCollaborations_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return getUserCollaborations(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> getUserObjectCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return getUserObjectCollaboration(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> acceptCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return acceptCollaboration(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> deleteCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return deleteCollaboration(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse>
      deleteCollaborationsByObjectId_Pre($grpc.ServiceCall call,
          $async.Future<$0.AdminCollaborationRequest> request) async {
    return deleteCollaborationsByObjectId(call, await request);
  }

  $async.Future<$0.AdminCollaborationResponse> deleteUserCollaborations_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.AdminCollaborationRequest> request) async {
    return deleteUserCollaborations(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
  $async.Future<$0.AdminCollaborationResponse> initCollaboration(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> createCollaboration(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> getCollaborationById(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> getCollaborationsByObjectId(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> getUserCollaborations(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> getUserObjectCollaboration(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> acceptCollaboration(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> deleteCollaboration(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> deleteCollaborationsByObjectId(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
  $async.Future<$0.AdminCollaborationResponse> deleteUserCollaborations(
      $grpc.ServiceCall call, $0.AdminCollaborationRequest request);
}

class DashboardPublicServiceClient extends $grpc.Client {
  static final _$ping = $grpc.ClientMethod<$0.Request, $0.Response>(
      '/Softcorp.DashboardPublicService/Ping',
      ($0.Request value) => value.writeToBuffer(),
      ($core.List<$core.int> value) => $0.Response.fromBuffer(value));
  static final _$createOrganization =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/CreateOrganization',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$getOrganizations =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/GetOrganizations',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$updateOrganizationDetails =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/UpdateOrganizationDetails',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$deleteOrganization =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/DeleteOrganization',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$createConnectApp =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/CreateConnectApp',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$getConnectAppsByOrgId =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/GetConnectAppsByOrgId',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$getConnectAppById =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/GetConnectAppById',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$updateConnectAppDetails =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/UpdateConnectAppDetails',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$updateConnectAppOAuth =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/UpdateConnectAppOAuth',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$resetConnectAppOAuth =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/ResetConnectAppOAuth',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$updateConnectAppSecurity =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/UpdateConnectAppSecurity',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$getAppMetrics =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/GetAppMetrics',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$deleteConnectApp =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/DeleteConnectApp',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$inviteCollaborator =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/InviteCollaborator',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$getCollaborations =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/GetCollaborations',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$acceptCollaboration =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/AcceptCollaboration',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));
  static final _$deleteCollaboration =
      $grpc.ClientMethod<$0.PublicDashboardRequest, $0.PublicDashboardResponse>(
          '/Softcorp.DashboardPublicService/DeleteCollaboration',
          ($0.PublicDashboardRequest value) => value.writeToBuffer(),
          ($core.List<$core.int> value) =>
              $0.PublicDashboardResponse.fromBuffer(value));

  DashboardPublicServiceClient($grpc.ClientChannel channel,
      {$grpc.CallOptions? options,
      $core.Iterable<$grpc.ClientInterceptor>? interceptors})
      : super(channel, options: options, interceptors: interceptors);

  $grpc.ResponseFuture<$0.Response> ping($0.Request request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$ping, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> createOrganization(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createOrganization, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> getOrganizations(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getOrganizations, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> updateOrganizationDetails(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateOrganizationDetails, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> deleteOrganization(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteOrganization, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> createConnectApp(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$createConnectApp, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> getConnectAppsByOrgId(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getConnectAppsByOrgId, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> getConnectAppById(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getConnectAppById, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> updateConnectAppDetails(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateConnectAppDetails, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> updateConnectAppOAuth(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateConnectAppOAuth, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> resetConnectAppOAuth(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$resetConnectAppOAuth, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> updateConnectAppSecurity(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$updateConnectAppSecurity, request,
        options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> getAppMetrics(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getAppMetrics, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> deleteConnectApp(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteConnectApp, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> inviteCollaborator(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$inviteCollaborator, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> getCollaborations(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$getCollaborations, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> acceptCollaboration(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$acceptCollaboration, request, options: options);
  }

  $grpc.ResponseFuture<$0.PublicDashboardResponse> deleteCollaboration(
      $0.PublicDashboardRequest request,
      {$grpc.CallOptions? options}) {
    return $createUnaryCall(_$deleteCollaboration, request, options: options);
  }
}

abstract class DashboardPublicServiceBase extends $grpc.Service {
  $core.String get $name => 'Softcorp.DashboardPublicService';

  DashboardPublicServiceBase() {
    $addMethod($grpc.ServiceMethod<$0.Request, $0.Response>(
        'Ping',
        ping_Pre,
        false,
        false,
        ($core.List<$core.int> value) => $0.Request.fromBuffer(value),
        ($0.Response value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'CreateOrganization',
        createOrganization_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'GetOrganizations',
        getOrganizations_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'UpdateOrganizationDetails',
        updateOrganizationDetails_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'DeleteOrganization',
        deleteOrganization_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'CreateConnectApp',
        createConnectApp_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'GetConnectAppsByOrgId',
        getConnectAppsByOrgId_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'GetConnectAppById',
        getConnectAppById_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'UpdateConnectAppDetails',
        updateConnectAppDetails_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'UpdateConnectAppOAuth',
        updateConnectAppOAuth_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'ResetConnectAppOAuth',
        resetConnectAppOAuth_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'UpdateConnectAppSecurity',
        updateConnectAppSecurity_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'GetAppMetrics',
        getAppMetrics_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'DeleteConnectApp',
        deleteConnectApp_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'InviteCollaborator',
        inviteCollaborator_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'GetCollaborations',
        getCollaborations_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'AcceptCollaboration',
        acceptCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
    $addMethod($grpc.ServiceMethod<$0.PublicDashboardRequest,
            $0.PublicDashboardResponse>(
        'DeleteCollaboration',
        deleteCollaboration_Pre,
        false,
        false,
        ($core.List<$core.int> value) =>
            $0.PublicDashboardRequest.fromBuffer(value),
        ($0.PublicDashboardResponse value) => value.writeToBuffer()));
  }

  $async.Future<$0.Response> ping_Pre(
      $grpc.ServiceCall call, $async.Future<$0.Request> request) async {
    return ping(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> createOrganization_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return createOrganization(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> getOrganizations_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return getOrganizations(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> updateOrganizationDetails_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return updateOrganizationDetails(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> deleteOrganization_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return deleteOrganization(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> createConnectApp_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return createConnectApp(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> getConnectAppsByOrgId_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return getConnectAppsByOrgId(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> getConnectAppById_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return getConnectAppById(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> updateConnectAppDetails_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return updateConnectAppDetails(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> updateConnectAppOAuth_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return updateConnectAppOAuth(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> resetConnectAppOAuth_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return resetConnectAppOAuth(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> updateConnectAppSecurity_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return updateConnectAppSecurity(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> getAppMetrics_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return getAppMetrics(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> deleteConnectApp_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return deleteConnectApp(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> inviteCollaborator_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return inviteCollaborator(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> getCollaborations_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return getCollaborations(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> acceptCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return acceptCollaboration(call, await request);
  }

  $async.Future<$0.PublicDashboardResponse> deleteCollaboration_Pre(
      $grpc.ServiceCall call,
      $async.Future<$0.PublicDashboardRequest> request) async {
    return deleteCollaboration(call, await request);
  }

  $async.Future<$0.Response> ping($grpc.ServiceCall call, $0.Request request);
  $async.Future<$0.PublicDashboardResponse> createOrganization(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> getOrganizations(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> updateOrganizationDetails(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> deleteOrganization(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> createConnectApp(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> getConnectAppsByOrgId(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> getConnectAppById(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> updateConnectAppDetails(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> updateConnectAppOAuth(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> resetConnectAppOAuth(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> updateConnectAppSecurity(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> getAppMetrics(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> deleteConnectApp(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> inviteCollaborator(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> getCollaborations(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> acceptCollaboration(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
  $async.Future<$0.PublicDashboardResponse> deleteCollaboration(
      $grpc.ServiceCall call, $0.PublicDashboardRequest request);
}
