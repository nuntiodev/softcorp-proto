///
//  Generated code. Do not modify.
//  source: softcorp.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'google/protobuf/timestamp.pb.dart' as $1;

import 'softcorp.pbenum.dart';

export 'softcorp.pbenum.dart';

class ConnectMetric extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ConnectMetric', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<$1.Timestamp>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'date', subBuilder: $1.Timestamp.create)
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfRequests', $pb.PbFieldType.O3, protoName: 'numberOfRequests')
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfConsentTrue', $pb.PbFieldType.O3, protoName: 'numberOfConsentTrue')
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfConsentFalse', $pb.PbFieldType.O3, protoName: 'numberOfConsentFalse')
    ..a<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup1To12', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup1To12')
    ..a<$core.int>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup13To19', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup13To19')
    ..a<$core.int>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup20To29', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup20To29')
    ..a<$core.int>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup30To39', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup30To39')
    ..a<$core.int>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup40To49', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup40To49')
    ..a<$core.int>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup50To59', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup50To59')
    ..a<$core.int>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup60To69', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup60To69')
    ..a<$core.int>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup70To79', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup70To79')
    ..a<$core.int>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup80To89', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup80To89')
    ..a<$core.int>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup90To99', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup90To99')
    ..a<$core.int>(15, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfAgeGroup100To120', $pb.PbFieldType.O3, protoName: 'numberOfAgeGroup100To120')
    ..a<$core.int>(16, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfFemales', $pb.PbFieldType.O3, protoName: 'numberOfFemales')
    ..a<$core.int>(17, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfMales', $pb.PbFieldType.O3, protoName: 'numberOfMales')
    ..a<$core.int>(18, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'numberOfOthers', $pb.PbFieldType.O3, protoName: 'numberOfOthers')
    ..a<$core.int>(19, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amountFromDk', $pb.PbFieldType.O3, protoName: 'amountFromDk')
    ..a<$core.int>(20, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amountFromNo', $pb.PbFieldType.O3, protoName: 'amountFromNo')
    ..a<$core.int>(21, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amountFromDe', $pb.PbFieldType.O3, protoName: 'amountFromDe')
    ..hasRequiredFields = false
  ;

  ConnectMetric._() : super();
  factory ConnectMetric({
    $1.Timestamp? date,
    $core.int? numberOfRequests,
    $core.int? numberOfConsentTrue,
    $core.int? numberOfConsentFalse,
    $core.int? numberOfAgeGroup1To12,
    $core.int? numberOfAgeGroup13To19,
    $core.int? numberOfAgeGroup20To29,
    $core.int? numberOfAgeGroup30To39,
    $core.int? numberOfAgeGroup40To49,
    $core.int? numberOfAgeGroup50To59,
    $core.int? numberOfAgeGroup60To69,
    $core.int? numberOfAgeGroup70To79,
    $core.int? numberOfAgeGroup80To89,
    $core.int? numberOfAgeGroup90To99,
    $core.int? numberOfAgeGroup100To120,
    $core.int? numberOfFemales,
    $core.int? numberOfMales,
    $core.int? numberOfOthers,
    $core.int? amountFromDk,
    $core.int? amountFromNo,
    $core.int? amountFromDe,
  }) {
    final _result = create();
    if (date != null) {
      _result.date = date;
    }
    if (numberOfRequests != null) {
      _result.numberOfRequests = numberOfRequests;
    }
    if (numberOfConsentTrue != null) {
      _result.numberOfConsentTrue = numberOfConsentTrue;
    }
    if (numberOfConsentFalse != null) {
      _result.numberOfConsentFalse = numberOfConsentFalse;
    }
    if (numberOfAgeGroup1To12 != null) {
      _result.numberOfAgeGroup1To12 = numberOfAgeGroup1To12;
    }
    if (numberOfAgeGroup13To19 != null) {
      _result.numberOfAgeGroup13To19 = numberOfAgeGroup13To19;
    }
    if (numberOfAgeGroup20To29 != null) {
      _result.numberOfAgeGroup20To29 = numberOfAgeGroup20To29;
    }
    if (numberOfAgeGroup30To39 != null) {
      _result.numberOfAgeGroup30To39 = numberOfAgeGroup30To39;
    }
    if (numberOfAgeGroup40To49 != null) {
      _result.numberOfAgeGroup40To49 = numberOfAgeGroup40To49;
    }
    if (numberOfAgeGroup50To59 != null) {
      _result.numberOfAgeGroup50To59 = numberOfAgeGroup50To59;
    }
    if (numberOfAgeGroup60To69 != null) {
      _result.numberOfAgeGroup60To69 = numberOfAgeGroup60To69;
    }
    if (numberOfAgeGroup70To79 != null) {
      _result.numberOfAgeGroup70To79 = numberOfAgeGroup70To79;
    }
    if (numberOfAgeGroup80To89 != null) {
      _result.numberOfAgeGroup80To89 = numberOfAgeGroup80To89;
    }
    if (numberOfAgeGroup90To99 != null) {
      _result.numberOfAgeGroup90To99 = numberOfAgeGroup90To99;
    }
    if (numberOfAgeGroup100To120 != null) {
      _result.numberOfAgeGroup100To120 = numberOfAgeGroup100To120;
    }
    if (numberOfFemales != null) {
      _result.numberOfFemales = numberOfFemales;
    }
    if (numberOfMales != null) {
      _result.numberOfMales = numberOfMales;
    }
    if (numberOfOthers != null) {
      _result.numberOfOthers = numberOfOthers;
    }
    if (amountFromDk != null) {
      _result.amountFromDk = amountFromDk;
    }
    if (amountFromNo != null) {
      _result.amountFromNo = amountFromNo;
    }
    if (amountFromDe != null) {
      _result.amountFromDe = amountFromDe;
    }
    return _result;
  }
  factory ConnectMetric.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ConnectMetric.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ConnectMetric clone() => ConnectMetric()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ConnectMetric copyWith(void Function(ConnectMetric) updates) => super.copyWith((message) => updates(message as ConnectMetric)) as ConnectMetric; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ConnectMetric create() => ConnectMetric._();
  ConnectMetric createEmptyInstance() => create();
  static $pb.PbList<ConnectMetric> createRepeated() => $pb.PbList<ConnectMetric>();
  @$core.pragma('dart2js:noInline')
  static ConnectMetric getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ConnectMetric>(create);
  static ConnectMetric? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Timestamp get date => $_getN(0);
  @$pb.TagNumber(1)
  set date($1.Timestamp v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDate() => $_has(0);
  @$pb.TagNumber(1)
  void clearDate() => clearField(1);
  @$pb.TagNumber(1)
  $1.Timestamp ensureDate() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.int get numberOfRequests => $_getIZ(1);
  @$pb.TagNumber(2)
  set numberOfRequests($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNumberOfRequests() => $_has(1);
  @$pb.TagNumber(2)
  void clearNumberOfRequests() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get numberOfConsentTrue => $_getIZ(2);
  @$pb.TagNumber(3)
  set numberOfConsentTrue($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasNumberOfConsentTrue() => $_has(2);
  @$pb.TagNumber(3)
  void clearNumberOfConsentTrue() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get numberOfConsentFalse => $_getIZ(3);
  @$pb.TagNumber(4)
  set numberOfConsentFalse($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasNumberOfConsentFalse() => $_has(3);
  @$pb.TagNumber(4)
  void clearNumberOfConsentFalse() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get numberOfAgeGroup1To12 => $_getIZ(4);
  @$pb.TagNumber(5)
  set numberOfAgeGroup1To12($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasNumberOfAgeGroup1To12() => $_has(4);
  @$pb.TagNumber(5)
  void clearNumberOfAgeGroup1To12() => clearField(5);

  @$pb.TagNumber(6)
  $core.int get numberOfAgeGroup13To19 => $_getIZ(5);
  @$pb.TagNumber(6)
  set numberOfAgeGroup13To19($core.int v) { $_setSignedInt32(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasNumberOfAgeGroup13To19() => $_has(5);
  @$pb.TagNumber(6)
  void clearNumberOfAgeGroup13To19() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get numberOfAgeGroup20To29 => $_getIZ(6);
  @$pb.TagNumber(7)
  set numberOfAgeGroup20To29($core.int v) { $_setSignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasNumberOfAgeGroup20To29() => $_has(6);
  @$pb.TagNumber(7)
  void clearNumberOfAgeGroup20To29() => clearField(7);

  @$pb.TagNumber(8)
  $core.int get numberOfAgeGroup30To39 => $_getIZ(7);
  @$pb.TagNumber(8)
  set numberOfAgeGroup30To39($core.int v) { $_setSignedInt32(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasNumberOfAgeGroup30To39() => $_has(7);
  @$pb.TagNumber(8)
  void clearNumberOfAgeGroup30To39() => clearField(8);

  @$pb.TagNumber(9)
  $core.int get numberOfAgeGroup40To49 => $_getIZ(8);
  @$pb.TagNumber(9)
  set numberOfAgeGroup40To49($core.int v) { $_setSignedInt32(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasNumberOfAgeGroup40To49() => $_has(8);
  @$pb.TagNumber(9)
  void clearNumberOfAgeGroup40To49() => clearField(9);

  @$pb.TagNumber(10)
  $core.int get numberOfAgeGroup50To59 => $_getIZ(9);
  @$pb.TagNumber(10)
  set numberOfAgeGroup50To59($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasNumberOfAgeGroup50To59() => $_has(9);
  @$pb.TagNumber(10)
  void clearNumberOfAgeGroup50To59() => clearField(10);

  @$pb.TagNumber(11)
  $core.int get numberOfAgeGroup60To69 => $_getIZ(10);
  @$pb.TagNumber(11)
  set numberOfAgeGroup60To69($core.int v) { $_setSignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasNumberOfAgeGroup60To69() => $_has(10);
  @$pb.TagNumber(11)
  void clearNumberOfAgeGroup60To69() => clearField(11);

  @$pb.TagNumber(12)
  $core.int get numberOfAgeGroup70To79 => $_getIZ(11);
  @$pb.TagNumber(12)
  set numberOfAgeGroup70To79($core.int v) { $_setSignedInt32(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasNumberOfAgeGroup70To79() => $_has(11);
  @$pb.TagNumber(12)
  void clearNumberOfAgeGroup70To79() => clearField(12);

  @$pb.TagNumber(13)
  $core.int get numberOfAgeGroup80To89 => $_getIZ(12);
  @$pb.TagNumber(13)
  set numberOfAgeGroup80To89($core.int v) { $_setSignedInt32(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasNumberOfAgeGroup80To89() => $_has(12);
  @$pb.TagNumber(13)
  void clearNumberOfAgeGroup80To89() => clearField(13);

  @$pb.TagNumber(14)
  $core.int get numberOfAgeGroup90To99 => $_getIZ(13);
  @$pb.TagNumber(14)
  set numberOfAgeGroup90To99($core.int v) { $_setSignedInt32(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasNumberOfAgeGroup90To99() => $_has(13);
  @$pb.TagNumber(14)
  void clearNumberOfAgeGroup90To99() => clearField(14);

  @$pb.TagNumber(15)
  $core.int get numberOfAgeGroup100To120 => $_getIZ(14);
  @$pb.TagNumber(15)
  set numberOfAgeGroup100To120($core.int v) { $_setSignedInt32(14, v); }
  @$pb.TagNumber(15)
  $core.bool hasNumberOfAgeGroup100To120() => $_has(14);
  @$pb.TagNumber(15)
  void clearNumberOfAgeGroup100To120() => clearField(15);

  @$pb.TagNumber(16)
  $core.int get numberOfFemales => $_getIZ(15);
  @$pb.TagNumber(16)
  set numberOfFemales($core.int v) { $_setSignedInt32(15, v); }
  @$pb.TagNumber(16)
  $core.bool hasNumberOfFemales() => $_has(15);
  @$pb.TagNumber(16)
  void clearNumberOfFemales() => clearField(16);

  @$pb.TagNumber(17)
  $core.int get numberOfMales => $_getIZ(16);
  @$pb.TagNumber(17)
  set numberOfMales($core.int v) { $_setSignedInt32(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasNumberOfMales() => $_has(16);
  @$pb.TagNumber(17)
  void clearNumberOfMales() => clearField(17);

  @$pb.TagNumber(18)
  $core.int get numberOfOthers => $_getIZ(17);
  @$pb.TagNumber(18)
  set numberOfOthers($core.int v) { $_setSignedInt32(17, v); }
  @$pb.TagNumber(18)
  $core.bool hasNumberOfOthers() => $_has(17);
  @$pb.TagNumber(18)
  void clearNumberOfOthers() => clearField(18);

  @$pb.TagNumber(19)
  $core.int get amountFromDk => $_getIZ(18);
  @$pb.TagNumber(19)
  set amountFromDk($core.int v) { $_setSignedInt32(18, v); }
  @$pb.TagNumber(19)
  $core.bool hasAmountFromDk() => $_has(18);
  @$pb.TagNumber(19)
  void clearAmountFromDk() => clearField(19);

  @$pb.TagNumber(20)
  $core.int get amountFromNo => $_getIZ(19);
  @$pb.TagNumber(20)
  set amountFromNo($core.int v) { $_setSignedInt32(19, v); }
  @$pb.TagNumber(20)
  $core.bool hasAmountFromNo() => $_has(19);
  @$pb.TagNumber(20)
  void clearAmountFromNo() => clearField(20);

  @$pb.TagNumber(21)
  $core.int get amountFromDe => $_getIZ(20);
  @$pb.TagNumber(21)
  set amountFromDe($core.int v) { $_setSignedInt32(20, v); }
  @$pb.TagNumber(21)
  $core.bool hasAmountFromDe() => $_has(20);
  @$pb.TagNumber(21)
  void clearAmountFromDe() => clearField(21);
}

class ConnectMetrics extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ConnectMetrics', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..pc<ConnectMetric>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'metrics', $pb.PbFieldType.PM, subBuilder: ConnectMetric.create)
    ..hasRequiredFields = false
  ;

  ConnectMetrics._() : super();
  factory ConnectMetrics({
    $core.Iterable<ConnectMetric>? metrics,
  }) {
    final _result = create();
    if (metrics != null) {
      _result.metrics.addAll(metrics);
    }
    return _result;
  }
  factory ConnectMetrics.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ConnectMetrics.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ConnectMetrics clone() => ConnectMetrics()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ConnectMetrics copyWith(void Function(ConnectMetrics) updates) => super.copyWith((message) => updates(message as ConnectMetrics)) as ConnectMetrics; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ConnectMetrics create() => ConnectMetrics._();
  ConnectMetrics createEmptyInstance() => create();
  static $pb.PbList<ConnectMetrics> createRepeated() => $pb.PbList<ConnectMetrics>();
  @$core.pragma('dart2js:noInline')
  static ConnectMetrics getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ConnectMetrics>(create);
  static ConnectMetrics? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ConnectMetric> get metrics => $_getList(0);
}

class Collaboration extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Collaboration', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'email')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userId', protoName: 'userId')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'objectId', protoName: 'objectId')
    ..e<CollaborationType>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaborationType', $pb.PbFieldType.OE, protoName: 'collaborationType', defaultOrMaker: CollaborationType.INVALID_COLLABORATION, valueOf: CollaborationType.valueOf, enumValues: CollaborationType.values)
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accepted')
    ..aOS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'hashedCode', protoName: 'hashedCode')
    ..e<CollaborationRole>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'role', $pb.PbFieldType.OE, defaultOrMaker: CollaborationRole.INVALID_COLLABORATION_ROLE, valueOf: CollaborationRole.valueOf, enumValues: CollaborationRole.values)
    ..aOM<$1.Timestamp>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', protoName: 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', protoName: 'updatedAt', subBuilder: $1.Timestamp.create)
    ..hasRequiredFields = false
  ;

  Collaboration._() : super();
  factory Collaboration({
    $core.String? id,
    $core.String? email,
    $core.String? name,
    $core.String? userId,
    $core.String? objectId,
    CollaborationType? collaborationType,
    $core.bool? accepted,
    $core.String? hashedCode,
    CollaborationRole? role,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (email != null) {
      _result.email = email;
    }
    if (name != null) {
      _result.name = name;
    }
    if (userId != null) {
      _result.userId = userId;
    }
    if (objectId != null) {
      _result.objectId = objectId;
    }
    if (collaborationType != null) {
      _result.collaborationType = collaborationType;
    }
    if (accepted != null) {
      _result.accepted = accepted;
    }
    if (hashedCode != null) {
      _result.hashedCode = hashedCode;
    }
    if (role != null) {
      _result.role = role;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    return _result;
  }
  factory Collaboration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Collaboration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Collaboration clone() => Collaboration()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Collaboration copyWith(void Function(Collaboration) updates) => super.copyWith((message) => updates(message as Collaboration)) as Collaboration; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Collaboration create() => Collaboration._();
  Collaboration createEmptyInstance() => create();
  static $pb.PbList<Collaboration> createRepeated() => $pb.PbList<Collaboration>();
  @$core.pragma('dart2js:noInline')
  static Collaboration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Collaboration>(create);
  static Collaboration? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get email => $_getSZ(1);
  @$pb.TagNumber(2)
  set email($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEmail() => $_has(1);
  @$pb.TagNumber(2)
  void clearEmail() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get name => $_getSZ(2);
  @$pb.TagNumber(3)
  set name($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasName() => $_has(2);
  @$pb.TagNumber(3)
  void clearName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get userId => $_getSZ(3);
  @$pb.TagNumber(4)
  set userId($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUserId() => $_has(3);
  @$pb.TagNumber(4)
  void clearUserId() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get objectId => $_getSZ(4);
  @$pb.TagNumber(5)
  set objectId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasObjectId() => $_has(4);
  @$pb.TagNumber(5)
  void clearObjectId() => clearField(5);

  @$pb.TagNumber(6)
  CollaborationType get collaborationType => $_getN(5);
  @$pb.TagNumber(6)
  set collaborationType(CollaborationType v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasCollaborationType() => $_has(5);
  @$pb.TagNumber(6)
  void clearCollaborationType() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get accepted => $_getBF(6);
  @$pb.TagNumber(7)
  set accepted($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasAccepted() => $_has(6);
  @$pb.TagNumber(7)
  void clearAccepted() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get hashedCode => $_getSZ(7);
  @$pb.TagNumber(8)
  set hashedCode($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasHashedCode() => $_has(7);
  @$pb.TagNumber(8)
  void clearHashedCode() => clearField(8);

  @$pb.TagNumber(9)
  CollaborationRole get role => $_getN(8);
  @$pb.TagNumber(9)
  set role(CollaborationRole v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasRole() => $_has(8);
  @$pb.TagNumber(9)
  void clearRole() => clearField(9);

  @$pb.TagNumber(10)
  $1.Timestamp get createdAt => $_getN(9);
  @$pb.TagNumber(10)
  set createdAt($1.Timestamp v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasCreatedAt() => $_has(9);
  @$pb.TagNumber(10)
  void clearCreatedAt() => clearField(10);
  @$pb.TagNumber(10)
  $1.Timestamp ensureCreatedAt() => $_ensure(9);

  @$pb.TagNumber(11)
  $1.Timestamp get updatedAt => $_getN(10);
  @$pb.TagNumber(11)
  set updatedAt($1.Timestamp v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasUpdatedAt() => $_has(10);
  @$pb.TagNumber(11)
  void clearUpdatedAt() => clearField(11);
  @$pb.TagNumber(11)
  $1.Timestamp ensureUpdatedAt() => $_ensure(10);
}

class Organization extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Organization', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerId', protoName: 'ownerId')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationName', protoName: 'organizationName')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'contactEmail', protoName: 'contactEmail')
    ..aOM<$1.Timestamp>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', protoName: 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', protoName: 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'isOwner', protoName: 'isOwner')
    ..pc<Collaboration>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaborations', $pb.PbFieldType.PM, subBuilder: Collaboration.create)
    ..hasRequiredFields = false
  ;

  Organization._() : super();
  factory Organization({
    $core.String? id,
    $core.String? ownerId,
    $core.String? organizationName,
    $core.String? contactEmail,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $core.bool? isOwner,
    $core.Iterable<Collaboration>? collaborations,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (ownerId != null) {
      _result.ownerId = ownerId;
    }
    if (organizationName != null) {
      _result.organizationName = organizationName;
    }
    if (contactEmail != null) {
      _result.contactEmail = contactEmail;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (isOwner != null) {
      _result.isOwner = isOwner;
    }
    if (collaborations != null) {
      _result.collaborations.addAll(collaborations);
    }
    return _result;
  }
  factory Organization.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Organization.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Organization clone() => Organization()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Organization copyWith(void Function(Organization) updates) => super.copyWith((message) => updates(message as Organization)) as Organization; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Organization create() => Organization._();
  Organization createEmptyInstance() => create();
  static $pb.PbList<Organization> createRepeated() => $pb.PbList<Organization>();
  @$core.pragma('dart2js:noInline')
  static Organization getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Organization>(create);
  static Organization? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get ownerId => $_getSZ(1);
  @$pb.TagNumber(2)
  set ownerId($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasOwnerId() => $_has(1);
  @$pb.TagNumber(2)
  void clearOwnerId() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get organizationName => $_getSZ(2);
  @$pb.TagNumber(3)
  set organizationName($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasOrganizationName() => $_has(2);
  @$pb.TagNumber(3)
  void clearOrganizationName() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get contactEmail => $_getSZ(3);
  @$pb.TagNumber(4)
  set contactEmail($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasContactEmail() => $_has(3);
  @$pb.TagNumber(4)
  void clearContactEmail() => clearField(4);

  @$pb.TagNumber(5)
  $1.Timestamp get createdAt => $_getN(4);
  @$pb.TagNumber(5)
  set createdAt($1.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearCreatedAt() => clearField(5);
  @$pb.TagNumber(5)
  $1.Timestamp ensureCreatedAt() => $_ensure(4);

  @$pb.TagNumber(6)
  $1.Timestamp get updatedAt => $_getN(5);
  @$pb.TagNumber(6)
  set updatedAt($1.Timestamp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUpdatedAt() => $_has(5);
  @$pb.TagNumber(6)
  void clearUpdatedAt() => clearField(6);
  @$pb.TagNumber(6)
  $1.Timestamp ensureUpdatedAt() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.bool get isOwner => $_getBF(6);
  @$pb.TagNumber(7)
  set isOwner($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasIsOwner() => $_has(6);
  @$pb.TagNumber(7)
  void clearIsOwner() => clearField(7);

  @$pb.TagNumber(8)
  $core.List<Collaboration> get collaborations => $_getList(7);
}

class Scope extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Scope', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..e<ScopeType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'scopeType', $pb.PbFieldType.OE, protoName: 'scopeType', defaultOrMaker: ScopeType.INVALID_SCOPE, valueOf: ScopeType.valueOf, enumValues: ScopeType.values)
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readId', protoName: 'readId')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readEmail', protoName: 'readEmail')
    ..aOB(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readGender', protoName: 'readGender')
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readCreatedAt', protoName: 'readCreatedAt')
    ..aOB(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'offlineAccess', protoName: 'offlineAccess')
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readName', protoName: 'readName')
    ..aOB(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readBirthday', protoName: 'readBirthday')
    ..aOB(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readCountry', protoName: 'readCountry')
    ..aOB(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'readPrefLangauge', protoName: 'readPrefLangauge')
    ..aOS(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key')
    ..hasRequiredFields = false
  ;

  Scope._() : super();
  factory Scope({
    ScopeType? scopeType,
    $core.bool? readId,
    $core.bool? readEmail,
    $core.bool? readGender,
    $core.bool? readCreatedAt,
    $core.bool? offlineAccess,
    $core.bool? readName,
    $core.bool? readBirthday,
    $core.bool? readCountry,
    $core.bool? readPrefLangauge,
    $core.String? name,
    $core.String? key,
  }) {
    final _result = create();
    if (scopeType != null) {
      _result.scopeType = scopeType;
    }
    if (readId != null) {
      _result.readId = readId;
    }
    if (readEmail != null) {
      _result.readEmail = readEmail;
    }
    if (readGender != null) {
      _result.readGender = readGender;
    }
    if (readCreatedAt != null) {
      _result.readCreatedAt = readCreatedAt;
    }
    if (offlineAccess != null) {
      _result.offlineAccess = offlineAccess;
    }
    if (readName != null) {
      _result.readName = readName;
    }
    if (readBirthday != null) {
      _result.readBirthday = readBirthday;
    }
    if (readCountry != null) {
      _result.readCountry = readCountry;
    }
    if (readPrefLangauge != null) {
      _result.readPrefLangauge = readPrefLangauge;
    }
    if (name != null) {
      _result.name = name;
    }
    if (key != null) {
      _result.key = key;
    }
    return _result;
  }
  factory Scope.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Scope.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Scope clone() => Scope()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Scope copyWith(void Function(Scope) updates) => super.copyWith((message) => updates(message as Scope)) as Scope; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Scope create() => Scope._();
  Scope createEmptyInstance() => create();
  static $pb.PbList<Scope> createRepeated() => $pb.PbList<Scope>();
  @$core.pragma('dart2js:noInline')
  static Scope getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Scope>(create);
  static Scope? _defaultInstance;

  @$pb.TagNumber(1)
  ScopeType get scopeType => $_getN(0);
  @$pb.TagNumber(1)
  set scopeType(ScopeType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasScopeType() => $_has(0);
  @$pb.TagNumber(1)
  void clearScopeType() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get readId => $_getBF(1);
  @$pb.TagNumber(2)
  set readId($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasReadId() => $_has(1);
  @$pb.TagNumber(2)
  void clearReadId() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get readEmail => $_getBF(2);
  @$pb.TagNumber(3)
  set readEmail($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasReadEmail() => $_has(2);
  @$pb.TagNumber(3)
  void clearReadEmail() => clearField(3);

  @$pb.TagNumber(4)
  $core.bool get readGender => $_getBF(3);
  @$pb.TagNumber(4)
  set readGender($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasReadGender() => $_has(3);
  @$pb.TagNumber(4)
  void clearReadGender() => clearField(4);

  @$pb.TagNumber(5)
  $core.bool get readCreatedAt => $_getBF(4);
  @$pb.TagNumber(5)
  set readCreatedAt($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasReadCreatedAt() => $_has(4);
  @$pb.TagNumber(5)
  void clearReadCreatedAt() => clearField(5);

  @$pb.TagNumber(6)
  $core.bool get offlineAccess => $_getBF(5);
  @$pb.TagNumber(6)
  set offlineAccess($core.bool v) { $_setBool(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasOfflineAccess() => $_has(5);
  @$pb.TagNumber(6)
  void clearOfflineAccess() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get readName => $_getBF(6);
  @$pb.TagNumber(7)
  set readName($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasReadName() => $_has(6);
  @$pb.TagNumber(7)
  void clearReadName() => clearField(7);

  @$pb.TagNumber(8)
  $core.bool get readBirthday => $_getBF(7);
  @$pb.TagNumber(8)
  set readBirthday($core.bool v) { $_setBool(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasReadBirthday() => $_has(7);
  @$pb.TagNumber(8)
  void clearReadBirthday() => clearField(8);

  @$pb.TagNumber(9)
  $core.bool get readCountry => $_getBF(8);
  @$pb.TagNumber(9)
  set readCountry($core.bool v) { $_setBool(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasReadCountry() => $_has(8);
  @$pb.TagNumber(9)
  void clearReadCountry() => clearField(9);

  @$pb.TagNumber(10)
  $core.bool get readPrefLangauge => $_getBF(9);
  @$pb.TagNumber(10)
  set readPrefLangauge($core.bool v) { $_setBool(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasReadPrefLangauge() => $_has(9);
  @$pb.TagNumber(10)
  void clearReadPrefLangauge() => clearField(10);

  @$pb.TagNumber(11)
  $core.String get name => $_getSZ(10);
  @$pb.TagNumber(11)
  set name($core.String v) { $_setString(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasName() => $_has(10);
  @$pb.TagNumber(11)
  void clearName() => clearField(11);

  @$pb.TagNumber(12)
  $core.String get key => $_getSZ(11);
  @$pb.TagNumber(12)
  set key($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasKey() => $_has(11);
  @$pb.TagNumber(12)
  void clearKey() => clearField(12);
}

class Grant extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Grant', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..e<GrantType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'grantType', $pb.PbFieldType.OE, protoName: 'grantType', defaultOrMaker: GrantType.INVALID_GRANT, valueOf: GrantType.valueOf, enumValues: GrantType.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  Grant._() : super();
  factory Grant({
    GrantType? grantType,
    $core.String? name,
  }) {
    final _result = create();
    if (grantType != null) {
      _result.grantType = grantType;
    }
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory Grant.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Grant.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Grant clone() => Grant()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Grant copyWith(void Function(Grant) updates) => super.copyWith((message) => updates(message as Grant)) as Grant; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Grant create() => Grant._();
  Grant createEmptyInstance() => create();
  static $pb.PbList<Grant> createRepeated() => $pb.PbList<Grant>();
  @$core.pragma('dart2js:noInline')
  static Grant getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Grant>(create);
  static Grant? _defaultInstance;

  @$pb.TagNumber(1)
  GrantType get grantType => $_getN(0);
  @$pb.TagNumber(1)
  set grantType(GrantType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasGrantType() => $_has(0);
  @$pb.TagNumber(1)
  void clearGrantType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);
}

class OauthResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'OauthResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..e<ResponeType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'responseType', $pb.PbFieldType.OE, protoName: 'responseType', defaultOrMaker: ResponeType.INVALID_RESPONSE, valueOf: ResponeType.valueOf, enumValues: ResponeType.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  OauthResponse._() : super();
  factory OauthResponse({
    ResponeType? responseType,
    $core.String? name,
  }) {
    final _result = create();
    if (responseType != null) {
      _result.responseType = responseType;
    }
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory OauthResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory OauthResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  OauthResponse clone() => OauthResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  OauthResponse copyWith(void Function(OauthResponse) updates) => super.copyWith((message) => updates(message as OauthResponse)) as OauthResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static OauthResponse create() => OauthResponse._();
  OauthResponse createEmptyInstance() => create();
  static $pb.PbList<OauthResponse> createRepeated() => $pb.PbList<OauthResponse>();
  @$core.pragma('dart2js:noInline')
  static OauthResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<OauthResponse>(create);
  static OauthResponse? _defaultInstance;

  @$pb.TagNumber(1)
  ResponeType get responseType => $_getN(0);
  @$pb.TagNumber(1)
  set responseType(ResponeType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasResponseType() => $_has(0);
  @$pb.TagNumber(1)
  void clearResponseType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);
}

class LanguageCode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'LanguageCode', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..e<LanguageCodeType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'languageCodeType', $pb.PbFieldType.OE, protoName: 'languageCodeType', defaultOrMaker: LanguageCodeType.INVALID_LANGUAGE, valueOf: LanguageCodeType.valueOf, enumValues: LanguageCodeType.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  LanguageCode._() : super();
  factory LanguageCode({
    LanguageCodeType? languageCodeType,
    $core.String? name,
  }) {
    final _result = create();
    if (languageCodeType != null) {
      _result.languageCodeType = languageCodeType;
    }
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory LanguageCode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory LanguageCode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  LanguageCode clone() => LanguageCode()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  LanguageCode copyWith(void Function(LanguageCode) updates) => super.copyWith((message) => updates(message as LanguageCode)) as LanguageCode; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static LanguageCode create() => LanguageCode._();
  LanguageCode createEmptyInstance() => create();
  static $pb.PbList<LanguageCode> createRepeated() => $pb.PbList<LanguageCode>();
  @$core.pragma('dart2js:noInline')
  static LanguageCode getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<LanguageCode>(create);
  static LanguageCode? _defaultInstance;

  @$pb.TagNumber(1)
  LanguageCodeType get languageCodeType => $_getN(0);
  @$pb.TagNumber(1)
  set languageCodeType(LanguageCodeType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasLanguageCodeType() => $_has(0);
  @$pb.TagNumber(1)
  void clearLanguageCodeType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);
}

class CountryCode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CountryCode', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..e<CountryCodeType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'countryCodeType', $pb.PbFieldType.OE, protoName: 'countryCodeType', defaultOrMaker: CountryCodeType.INVALID_COUNTRY, valueOf: CountryCodeType.valueOf, enumValues: CountryCodeType.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  CountryCode._() : super();
  factory CountryCode({
    CountryCodeType? countryCodeType,
    $core.String? name,
  }) {
    final _result = create();
    if (countryCodeType != null) {
      _result.countryCodeType = countryCodeType;
    }
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory CountryCode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CountryCode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CountryCode clone() => CountryCode()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CountryCode copyWith(void Function(CountryCode) updates) => super.copyWith((message) => updates(message as CountryCode)) as CountryCode; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CountryCode create() => CountryCode._();
  CountryCode createEmptyInstance() => create();
  static $pb.PbList<CountryCode> createRepeated() => $pb.PbList<CountryCode>();
  @$core.pragma('dart2js:noInline')
  static CountryCode getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CountryCode>(create);
  static CountryCode? _defaultInstance;

  @$pb.TagNumber(1)
  CountryCodeType get countryCodeType => $_getN(0);
  @$pb.TagNumber(1)
  set countryCodeType(CountryCodeType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasCountryCodeType() => $_has(0);
  @$pb.TagNumber(1)
  void clearCountryCodeType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);
}

class SsnProvider extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SsnProvider', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..e<SsnProviderType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnProviderType', $pb.PbFieldType.OE, protoName: 'ssnProviderType', defaultOrMaker: SsnProviderType.INVALID, valueOf: SsnProviderType.valueOf, enumValues: SsnProviderType.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  SsnProvider._() : super();
  factory SsnProvider({
    SsnProviderType? ssnProviderType,
    $core.String? name,
  }) {
    final _result = create();
    if (ssnProviderType != null) {
      _result.ssnProviderType = ssnProviderType;
    }
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory SsnProvider.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SsnProvider.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SsnProvider clone() => SsnProvider()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SsnProvider copyWith(void Function(SsnProvider) updates) => super.copyWith((message) => updates(message as SsnProvider)) as SsnProvider; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SsnProvider create() => SsnProvider._();
  SsnProvider createEmptyInstance() => create();
  static $pb.PbList<SsnProvider> createRepeated() => $pb.PbList<SsnProvider>();
  @$core.pragma('dart2js:noInline')
  static SsnProvider getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SsnProvider>(create);
  static SsnProvider? _defaultInstance;

  @$pb.TagNumber(1)
  SsnProviderType get ssnProviderType => $_getN(0);
  @$pb.TagNumber(1)
  set ssnProviderType(SsnProviderType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSsnProviderType() => $_has(0);
  @$pb.TagNumber(1)
  void clearSsnProviderType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);
}

class Ssn extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Ssn', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssn')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnHash', protoName: 'ssnHash')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnIdentifier', protoName: 'ssnIdentifier')
    ..aOM<SsnProvider>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnProvider', protoName: 'ssnProvider', subBuilder: SsnProvider.create)
    ..hasRequiredFields = false
  ;

  Ssn._() : super();
  factory Ssn({
    $core.String? ssn,
    $core.String? ssnHash,
    $core.String? ssnIdentifier,
    SsnProvider? ssnProvider,
  }) {
    final _result = create();
    if (ssn != null) {
      _result.ssn = ssn;
    }
    if (ssnHash != null) {
      _result.ssnHash = ssnHash;
    }
    if (ssnIdentifier != null) {
      _result.ssnIdentifier = ssnIdentifier;
    }
    if (ssnProvider != null) {
      _result.ssnProvider = ssnProvider;
    }
    return _result;
  }
  factory Ssn.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Ssn.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Ssn clone() => Ssn()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Ssn copyWith(void Function(Ssn) updates) => super.copyWith((message) => updates(message as Ssn)) as Ssn; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Ssn create() => Ssn._();
  Ssn createEmptyInstance() => create();
  static $pb.PbList<Ssn> createRepeated() => $pb.PbList<Ssn>();
  @$core.pragma('dart2js:noInline')
  static Ssn getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Ssn>(create);
  static Ssn? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get ssn => $_getSZ(0);
  @$pb.TagNumber(1)
  set ssn($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSsn() => $_has(0);
  @$pb.TagNumber(1)
  void clearSsn() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get ssnHash => $_getSZ(1);
  @$pb.TagNumber(2)
  set ssnHash($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSsnHash() => $_has(1);
  @$pb.TagNumber(2)
  void clearSsnHash() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get ssnIdentifier => $_getSZ(2);
  @$pb.TagNumber(3)
  set ssnIdentifier($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasSsnIdentifier() => $_has(2);
  @$pb.TagNumber(3)
  void clearSsnIdentifier() => clearField(3);

  @$pb.TagNumber(4)
  SsnProvider get ssnProvider => $_getN(3);
  @$pb.TagNumber(4)
  set ssnProvider(SsnProvider v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasSsnProvider() => $_has(3);
  @$pb.TagNumber(4)
  void clearSsnProvider() => clearField(4);
  @$pb.TagNumber(4)
  SsnProvider ensureSsnProvider() => $_ensure(3);
}

class User extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'User', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'email')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'password')
    ..e<Gender>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'gender', $pb.PbFieldType.OE, defaultOrMaker: Gender.INVALID_GENDER, valueOf: Gender.valueOf, enumValues: Gender.values)
    ..aOM<$1.Timestamp>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'birthday', subBuilder: $1.Timestamp.create)
    ..aOM<CountryCode>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'country', subBuilder: CountryCode.create)
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blocked')
    ..aOM<LanguageCode>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'preferredLanguage', protoName: 'preferredLanguage', subBuilder: LanguageCode.create)
    ..aOS(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOM<$1.Timestamp>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', protoName: 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', protoName: 'updatedAt', subBuilder: $1.Timestamp.create)
    ..aOS(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnId', protoName: 'ssnId')
    ..aOS(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnHash', protoName: 'ssnHash')
    ..hasRequiredFields = false
  ;

  User._() : super();
  factory User({
    $core.String? id,
    $core.String? email,
    $core.String? password,
    Gender? gender,
    $1.Timestamp? birthday,
    CountryCode? country,
    $core.bool? blocked,
    LanguageCode? preferredLanguage,
    $core.String? name,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $core.String? ssnId,
    $core.String? ssnHash,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (email != null) {
      _result.email = email;
    }
    if (password != null) {
      _result.password = password;
    }
    if (gender != null) {
      _result.gender = gender;
    }
    if (birthday != null) {
      _result.birthday = birthday;
    }
    if (country != null) {
      _result.country = country;
    }
    if (blocked != null) {
      _result.blocked = blocked;
    }
    if (preferredLanguage != null) {
      _result.preferredLanguage = preferredLanguage;
    }
    if (name != null) {
      _result.name = name;
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (ssnId != null) {
      _result.ssnId = ssnId;
    }
    if (ssnHash != null) {
      _result.ssnHash = ssnHash;
    }
    return _result;
  }
  factory User.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory User.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  User clone() => User()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  User copyWith(void Function(User) updates) => super.copyWith((message) => updates(message as User)) as User; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static User create() => User._();
  User createEmptyInstance() => create();
  static $pb.PbList<User> createRepeated() => $pb.PbList<User>();
  @$core.pragma('dart2js:noInline')
  static User getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<User>(create);
  static User? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get email => $_getSZ(1);
  @$pb.TagNumber(2)
  set email($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEmail() => $_has(1);
  @$pb.TagNumber(2)
  void clearEmail() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get password => $_getSZ(2);
  @$pb.TagNumber(3)
  set password($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPassword() => $_has(2);
  @$pb.TagNumber(3)
  void clearPassword() => clearField(3);

  @$pb.TagNumber(4)
  Gender get gender => $_getN(3);
  @$pb.TagNumber(4)
  set gender(Gender v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGender() => $_has(3);
  @$pb.TagNumber(4)
  void clearGender() => clearField(4);

  @$pb.TagNumber(5)
  $1.Timestamp get birthday => $_getN(4);
  @$pb.TagNumber(5)
  set birthday($1.Timestamp v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasBirthday() => $_has(4);
  @$pb.TagNumber(5)
  void clearBirthday() => clearField(5);
  @$pb.TagNumber(5)
  $1.Timestamp ensureBirthday() => $_ensure(4);

  @$pb.TagNumber(6)
  CountryCode get country => $_getN(5);
  @$pb.TagNumber(6)
  set country(CountryCode v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasCountry() => $_has(5);
  @$pb.TagNumber(6)
  void clearCountry() => clearField(6);
  @$pb.TagNumber(6)
  CountryCode ensureCountry() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.bool get blocked => $_getBF(6);
  @$pb.TagNumber(7)
  set blocked($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasBlocked() => $_has(6);
  @$pb.TagNumber(7)
  void clearBlocked() => clearField(7);

  @$pb.TagNumber(8)
  LanguageCode get preferredLanguage => $_getN(7);
  @$pb.TagNumber(8)
  set preferredLanguage(LanguageCode v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasPreferredLanguage() => $_has(7);
  @$pb.TagNumber(8)
  void clearPreferredLanguage() => clearField(8);
  @$pb.TagNumber(8)
  LanguageCode ensurePreferredLanguage() => $_ensure(7);

  @$pb.TagNumber(9)
  $core.String get name => $_getSZ(8);
  @$pb.TagNumber(9)
  set name($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasName() => $_has(8);
  @$pb.TagNumber(9)
  void clearName() => clearField(9);

  @$pb.TagNumber(10)
  $1.Timestamp get createdAt => $_getN(9);
  @$pb.TagNumber(10)
  set createdAt($1.Timestamp v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasCreatedAt() => $_has(9);
  @$pb.TagNumber(10)
  void clearCreatedAt() => clearField(10);
  @$pb.TagNumber(10)
  $1.Timestamp ensureCreatedAt() => $_ensure(9);

  @$pb.TagNumber(11)
  $1.Timestamp get updatedAt => $_getN(10);
  @$pb.TagNumber(11)
  set updatedAt($1.Timestamp v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasUpdatedAt() => $_has(10);
  @$pb.TagNumber(11)
  void clearUpdatedAt() => clearField(11);
  @$pb.TagNumber(11)
  $1.Timestamp ensureUpdatedAt() => $_ensure(10);

  @$pb.TagNumber(12)
  $core.String get ssnId => $_getSZ(11);
  @$pb.TagNumber(12)
  set ssnId($core.String v) { $_setString(11, v); }
  @$pb.TagNumber(12)
  $core.bool hasSsnId() => $_has(11);
  @$pb.TagNumber(12)
  void clearSsnId() => clearField(12);

  @$pb.TagNumber(13)
  $core.String get ssnHash => $_getSZ(12);
  @$pb.TagNumber(13)
  set ssnHash($core.String v) { $_setString(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasSsnHash() => $_has(12);
  @$pb.TagNumber(13)
  void clearSsnHash() => clearField(13);
}

class ClientMetadata extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ClientMetadata', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'isOpen', protoName: 'isOpen')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'about')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userOwnerId', protoName: 'userOwnerId')
    ..a<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ageLowerLimit', $pb.PbFieldType.O3, protoName: 'ageLowerLimit')
    ..a<$core.int>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ageUpperLimit', $pb.PbFieldType.O3, protoName: 'ageUpperLimit')
    ..pc<CountryCode>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'allowedCountries', $pb.PbFieldType.PM, protoName: 'allowedCountries', subBuilder: CountryCode.create)
    ..pPS(21, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'allowedEmails', protoName: 'allowedEmails')
    ..hasRequiredFields = false
  ;

  ClientMetadata._() : super();
  factory ClientMetadata({
    $core.bool? isOpen,
    $core.String? about,
    $core.String? userOwnerId,
    $core.int? ageLowerLimit,
    $core.int? ageUpperLimit,
    $core.Iterable<CountryCode>? allowedCountries,
    $core.Iterable<$core.String>? allowedEmails,
  }) {
    final _result = create();
    if (isOpen != null) {
      _result.isOpen = isOpen;
    }
    if (about != null) {
      _result.about = about;
    }
    if (userOwnerId != null) {
      _result.userOwnerId = userOwnerId;
    }
    if (ageLowerLimit != null) {
      _result.ageLowerLimit = ageLowerLimit;
    }
    if (ageUpperLimit != null) {
      _result.ageUpperLimit = ageUpperLimit;
    }
    if (allowedCountries != null) {
      _result.allowedCountries.addAll(allowedCountries);
    }
    if (allowedEmails != null) {
      _result.allowedEmails.addAll(allowedEmails);
    }
    return _result;
  }
  factory ClientMetadata.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ClientMetadata.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ClientMetadata clone() => ClientMetadata()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ClientMetadata copyWith(void Function(ClientMetadata) updates) => super.copyWith((message) => updates(message as ClientMetadata)) as ClientMetadata; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ClientMetadata create() => ClientMetadata._();
  ClientMetadata createEmptyInstance() => create();
  static $pb.PbList<ClientMetadata> createRepeated() => $pb.PbList<ClientMetadata>();
  @$core.pragma('dart2js:noInline')
  static ClientMetadata getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ClientMetadata>(create);
  static ClientMetadata? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get isOpen => $_getBF(0);
  @$pb.TagNumber(1)
  set isOpen($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIsOpen() => $_has(0);
  @$pb.TagNumber(1)
  void clearIsOpen() => clearField(1);

  @$pb.TagNumber(3)
  $core.String get about => $_getSZ(1);
  @$pb.TagNumber(3)
  set about($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(3)
  $core.bool hasAbout() => $_has(1);
  @$pb.TagNumber(3)
  void clearAbout() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get userOwnerId => $_getSZ(2);
  @$pb.TagNumber(4)
  set userOwnerId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(4)
  $core.bool hasUserOwnerId() => $_has(2);
  @$pb.TagNumber(4)
  void clearUserOwnerId() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get ageLowerLimit => $_getIZ(3);
  @$pb.TagNumber(5)
  set ageLowerLimit($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(5)
  $core.bool hasAgeLowerLimit() => $_has(3);
  @$pb.TagNumber(5)
  void clearAgeLowerLimit() => clearField(5);

  @$pb.TagNumber(6)
  $core.int get ageUpperLimit => $_getIZ(4);
  @$pb.TagNumber(6)
  set ageUpperLimit($core.int v) { $_setSignedInt32(4, v); }
  @$pb.TagNumber(6)
  $core.bool hasAgeUpperLimit() => $_has(4);
  @$pb.TagNumber(6)
  void clearAgeUpperLimit() => clearField(6);

  @$pb.TagNumber(7)
  $core.List<CountryCode> get allowedCountries => $_getList(5);

  @$pb.TagNumber(21)
  $core.List<$core.String> get allowedEmails => $_getList(6);
}

class ClientApp extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ClientApp', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'password')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'contactEmail', protoName: 'contactEmail')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ownerId', protoName: 'ownerId')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'appWebsite', protoName: 'appWebsite')
    ..aOS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'logoUrl', protoName: 'logoUrl')
    ..aOS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'termsUrl', protoName: 'termsUrl')
    ..aOM<ClientMetadata>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'clientMetadata', protoName: 'clientMetadata', subBuilder: ClientMetadata.create)
    ..pPS(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'audience')
    ..pc<Scope>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'scopes', $pb.PbFieldType.PM, subBuilder: Scope.create)
    ..pc<Grant>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'grants', $pb.PbFieldType.PM, subBuilder: Grant.create)
    ..pc<OauthResponse>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'responses', $pb.PbFieldType.PM, subBuilder: OauthResponse.create)
    ..pPS(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'callbacks')
    ..aOM<$1.Timestamp>(15, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'createdAt', protoName: 'createdAt', subBuilder: $1.Timestamp.create)
    ..aOM<$1.Timestamp>(16, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'updatedAt', protoName: 'updatedAt', subBuilder: $1.Timestamp.create)
    ..pc<Scope>(17, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'availableScopes', $pb.PbFieldType.PM, protoName: 'availableScopes', subBuilder: Scope.create)
    ..pc<Grant>(18, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'availableGrants', $pb.PbFieldType.PM, protoName: 'availableGrants', subBuilder: Grant.create)
    ..pc<OauthResponse>(19, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'availableResponses', $pb.PbFieldType.PM, protoName: 'availableResponses', subBuilder: OauthResponse.create)
    ..pc<CountryCode>(20, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'availableCountries', $pb.PbFieldType.PM, protoName: 'availableCountries', subBuilder: CountryCode.create)
    ..pc<Scope>(21, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'advancedScopes', $pb.PbFieldType.PM, protoName: 'advancedScopes', subBuilder: Scope.create)
    ..pc<Collaboration>(22, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaborations', $pb.PbFieldType.PM, subBuilder: Collaboration.create)
    ..hasRequiredFields = false
  ;

  ClientApp._() : super();
  factory ClientApp({
    $core.String? id,
    $core.String? name,
    $core.String? password,
    $core.String? contactEmail,
    $core.String? ownerId,
    $core.String? appWebsite,
    $core.String? logoUrl,
    $core.String? termsUrl,
    ClientMetadata? clientMetadata,
    $core.Iterable<$core.String>? audience,
    $core.Iterable<Scope>? scopes,
    $core.Iterable<Grant>? grants,
    $core.Iterable<OauthResponse>? responses,
    $core.Iterable<$core.String>? callbacks,
    $1.Timestamp? createdAt,
    $1.Timestamp? updatedAt,
    $core.Iterable<Scope>? availableScopes,
    $core.Iterable<Grant>? availableGrants,
    $core.Iterable<OauthResponse>? availableResponses,
    $core.Iterable<CountryCode>? availableCountries,
    $core.Iterable<Scope>? advancedScopes,
    $core.Iterable<Collaboration>? collaborations,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (name != null) {
      _result.name = name;
    }
    if (password != null) {
      _result.password = password;
    }
    if (contactEmail != null) {
      _result.contactEmail = contactEmail;
    }
    if (ownerId != null) {
      _result.ownerId = ownerId;
    }
    if (appWebsite != null) {
      _result.appWebsite = appWebsite;
    }
    if (logoUrl != null) {
      _result.logoUrl = logoUrl;
    }
    if (termsUrl != null) {
      _result.termsUrl = termsUrl;
    }
    if (clientMetadata != null) {
      _result.clientMetadata = clientMetadata;
    }
    if (audience != null) {
      _result.audience.addAll(audience);
    }
    if (scopes != null) {
      _result.scopes.addAll(scopes);
    }
    if (grants != null) {
      _result.grants.addAll(grants);
    }
    if (responses != null) {
      _result.responses.addAll(responses);
    }
    if (callbacks != null) {
      _result.callbacks.addAll(callbacks);
    }
    if (createdAt != null) {
      _result.createdAt = createdAt;
    }
    if (updatedAt != null) {
      _result.updatedAt = updatedAt;
    }
    if (availableScopes != null) {
      _result.availableScopes.addAll(availableScopes);
    }
    if (availableGrants != null) {
      _result.availableGrants.addAll(availableGrants);
    }
    if (availableResponses != null) {
      _result.availableResponses.addAll(availableResponses);
    }
    if (availableCountries != null) {
      _result.availableCountries.addAll(availableCountries);
    }
    if (advancedScopes != null) {
      _result.advancedScopes.addAll(advancedScopes);
    }
    if (collaborations != null) {
      _result.collaborations.addAll(collaborations);
    }
    return _result;
  }
  factory ClientApp.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ClientApp.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ClientApp clone() => ClientApp()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ClientApp copyWith(void Function(ClientApp) updates) => super.copyWith((message) => updates(message as ClientApp)) as ClientApp; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ClientApp create() => ClientApp._();
  ClientApp createEmptyInstance() => create();
  static $pb.PbList<ClientApp> createRepeated() => $pb.PbList<ClientApp>();
  @$core.pragma('dart2js:noInline')
  static ClientApp getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ClientApp>(create);
  static ClientApp? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get password => $_getSZ(2);
  @$pb.TagNumber(3)
  set password($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPassword() => $_has(2);
  @$pb.TagNumber(3)
  void clearPassword() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get contactEmail => $_getSZ(3);
  @$pb.TagNumber(4)
  set contactEmail($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasContactEmail() => $_has(3);
  @$pb.TagNumber(4)
  void clearContactEmail() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get ownerId => $_getSZ(4);
  @$pb.TagNumber(5)
  set ownerId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasOwnerId() => $_has(4);
  @$pb.TagNumber(5)
  void clearOwnerId() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get appWebsite => $_getSZ(5);
  @$pb.TagNumber(6)
  set appWebsite($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasAppWebsite() => $_has(5);
  @$pb.TagNumber(6)
  void clearAppWebsite() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get logoUrl => $_getSZ(6);
  @$pb.TagNumber(7)
  set logoUrl($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasLogoUrl() => $_has(6);
  @$pb.TagNumber(7)
  void clearLogoUrl() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get termsUrl => $_getSZ(7);
  @$pb.TagNumber(8)
  set termsUrl($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasTermsUrl() => $_has(7);
  @$pb.TagNumber(8)
  void clearTermsUrl() => clearField(8);

  @$pb.TagNumber(9)
  ClientMetadata get clientMetadata => $_getN(8);
  @$pb.TagNumber(9)
  set clientMetadata(ClientMetadata v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasClientMetadata() => $_has(8);
  @$pb.TagNumber(9)
  void clearClientMetadata() => clearField(9);
  @$pb.TagNumber(9)
  ClientMetadata ensureClientMetadata() => $_ensure(8);

  @$pb.TagNumber(10)
  $core.List<$core.String> get audience => $_getList(9);

  @$pb.TagNumber(11)
  $core.List<Scope> get scopes => $_getList(10);

  @$pb.TagNumber(12)
  $core.List<Grant> get grants => $_getList(11);

  @$pb.TagNumber(13)
  $core.List<OauthResponse> get responses => $_getList(12);

  @$pb.TagNumber(14)
  $core.List<$core.String> get callbacks => $_getList(13);

  @$pb.TagNumber(15)
  $1.Timestamp get createdAt => $_getN(14);
  @$pb.TagNumber(15)
  set createdAt($1.Timestamp v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasCreatedAt() => $_has(14);
  @$pb.TagNumber(15)
  void clearCreatedAt() => clearField(15);
  @$pb.TagNumber(15)
  $1.Timestamp ensureCreatedAt() => $_ensure(14);

  @$pb.TagNumber(16)
  $1.Timestamp get updatedAt => $_getN(15);
  @$pb.TagNumber(16)
  set updatedAt($1.Timestamp v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasUpdatedAt() => $_has(15);
  @$pb.TagNumber(16)
  void clearUpdatedAt() => clearField(16);
  @$pb.TagNumber(16)
  $1.Timestamp ensureUpdatedAt() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.List<Scope> get availableScopes => $_getList(16);

  @$pb.TagNumber(18)
  $core.List<Grant> get availableGrants => $_getList(17);

  @$pb.TagNumber(19)
  $core.List<OauthResponse> get availableResponses => $_getList(18);

  @$pb.TagNumber(20)
  $core.List<CountryCode> get availableCountries => $_getList(19);

  @$pb.TagNumber(21)
  $core.List<Scope> get advancedScopes => $_getList(20);

  @$pb.TagNumber(22)
  $core.List<Collaboration> get collaborations => $_getList(21);
}

class PublicUserRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PublicUserRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token')
    ..hasRequiredFields = false
  ;

  PublicUserRequest._() : super();
  factory PublicUserRequest({
    $core.String? token,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    return _result;
  }
  factory PublicUserRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PublicUserRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PublicUserRequest clone() => PublicUserRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PublicUserRequest copyWith(void Function(PublicUserRequest) updates) => super.copyWith((message) => updates(message as PublicUserRequest)) as PublicUserRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PublicUserRequest create() => PublicUserRequest._();
  PublicUserRequest createEmptyInstance() => create();
  static $pb.PbList<PublicUserRequest> createRepeated() => $pb.PbList<PublicUserRequest>();
  @$core.pragma('dart2js:noInline')
  static PublicUserRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PublicUserRequest>(create);
  static PublicUserRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get token => $_getSZ(0);
  @$pb.TagNumber(1)
  set token($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class PublicUserResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PublicUserResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<User>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: User.create)
    ..hasRequiredFields = false
  ;

  PublicUserResponse._() : super();
  factory PublicUserResponse({
    User? user,
  }) {
    final _result = create();
    if (user != null) {
      _result.user = user;
    }
    return _result;
  }
  factory PublicUserResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PublicUserResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PublicUserResponse clone() => PublicUserResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PublicUserResponse copyWith(void Function(PublicUserResponse) updates) => super.copyWith((message) => updates(message as PublicUserResponse)) as PublicUserResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PublicUserResponse create() => PublicUserResponse._();
  PublicUserResponse createEmptyInstance() => create();
  static $pb.PbList<PublicUserResponse> createRepeated() => $pb.PbList<PublicUserResponse>();
  @$core.pragma('dart2js:noInline')
  static PublicUserResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PublicUserResponse>(create);
  static PublicUserResponse? _defaultInstance;

  @$pb.TagNumber(1)
  User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user(User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  User ensureUser() => $_ensure(0);
}

class AdminUserRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AdminUserRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userId', protoName: 'userId')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'email')
    ..pPS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ids')
    ..pPS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'emails')
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'decrypt')
    ..aOM<User>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: User.create)
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'overwriteId', protoName: 'overwriteId')
    ..hasRequiredFields = false
  ;

  AdminUserRequest._() : super();
  factory AdminUserRequest({
    $core.String? userId,
    $core.String? email,
    $core.Iterable<$core.String>? ids,
    $core.Iterable<$core.String>? emails,
    $core.bool? decrypt,
    User? user,
    $core.bool? overwriteId,
  }) {
    final _result = create();
    if (userId != null) {
      _result.userId = userId;
    }
    if (email != null) {
      _result.email = email;
    }
    if (ids != null) {
      _result.ids.addAll(ids);
    }
    if (emails != null) {
      _result.emails.addAll(emails);
    }
    if (decrypt != null) {
      _result.decrypt = decrypt;
    }
    if (user != null) {
      _result.user = user;
    }
    if (overwriteId != null) {
      _result.overwriteId = overwriteId;
    }
    return _result;
  }
  factory AdminUserRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AdminUserRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AdminUserRequest clone() => AdminUserRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AdminUserRequest copyWith(void Function(AdminUserRequest) updates) => super.copyWith((message) => updates(message as AdminUserRequest)) as AdminUserRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AdminUserRequest create() => AdminUserRequest._();
  AdminUserRequest createEmptyInstance() => create();
  static $pb.PbList<AdminUserRequest> createRepeated() => $pb.PbList<AdminUserRequest>();
  @$core.pragma('dart2js:noInline')
  static AdminUserRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AdminUserRequest>(create);
  static AdminUserRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get userId => $_getSZ(0);
  @$pb.TagNumber(1)
  set userId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasUserId() => $_has(0);
  @$pb.TagNumber(1)
  void clearUserId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get email => $_getSZ(1);
  @$pb.TagNumber(2)
  set email($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEmail() => $_has(1);
  @$pb.TagNumber(2)
  void clearEmail() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.String> get ids => $_getList(2);

  @$pb.TagNumber(4)
  $core.List<$core.String> get emails => $_getList(3);

  @$pb.TagNumber(5)
  $core.bool get decrypt => $_getBF(4);
  @$pb.TagNumber(5)
  set decrypt($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasDecrypt() => $_has(4);
  @$pb.TagNumber(5)
  void clearDecrypt() => clearField(5);

  @$pb.TagNumber(6)
  User get user => $_getN(5);
  @$pb.TagNumber(6)
  set user(User v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasUser() => $_has(5);
  @$pb.TagNumber(6)
  void clearUser() => clearField(6);
  @$pb.TagNumber(6)
  User ensureUser() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.bool get overwriteId => $_getBF(6);
  @$pb.TagNumber(7)
  set overwriteId($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasOverwriteId() => $_has(6);
  @$pb.TagNumber(7)
  void clearOverwriteId() => clearField(7);
}

class AdminUserResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AdminUserResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<User>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: User.create)
    ..pc<User>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'users', $pb.PbFieldType.PM, subBuilder: User.create)
    ..hasRequiredFields = false
  ;

  AdminUserResponse._() : super();
  factory AdminUserResponse({
    User? user,
    $core.Iterable<User>? users,
  }) {
    final _result = create();
    if (user != null) {
      _result.user = user;
    }
    if (users != null) {
      _result.users.addAll(users);
    }
    return _result;
  }
  factory AdminUserResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AdminUserResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AdminUserResponse clone() => AdminUserResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AdminUserResponse copyWith(void Function(AdminUserResponse) updates) => super.copyWith((message) => updates(message as AdminUserResponse)) as AdminUserResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AdminUserResponse create() => AdminUserResponse._();
  AdminUserResponse createEmptyInstance() => create();
  static $pb.PbList<AdminUserResponse> createRepeated() => $pb.PbList<AdminUserResponse>();
  @$core.pragma('dart2js:noInline')
  static AdminUserResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AdminUserResponse>(create);
  static AdminUserResponse? _defaultInstance;

  @$pb.TagNumber(1)
  User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user(User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  User ensureUser() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<User> get users => $_getList(1);
}

class AuthPublicRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AuthPublicRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'challenge')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'email')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'password')
    ..e<Gender>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'gender', $pb.PbFieldType.OE, defaultOrMaker: Gender.INVALID_GENDER, valueOf: Gender.valueOf, enumValues: Gender.values)
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'consent')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'jwtIdToken', protoName: 'jwtIdToken')
    ..aOM<SsnProvider>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ssnProvider', protoName: 'ssnProvider', subBuilder: SsnProvider.create)
    ..hasRequiredFields = false
  ;

  AuthPublicRequest._() : super();
  factory AuthPublicRequest({
    $core.String? challenge,
    $core.String? email,
    $core.String? password,
    Gender? gender,
    $core.bool? consent,
    $core.String? jwtIdToken,
    SsnProvider? ssnProvider,
  }) {
    final _result = create();
    if (challenge != null) {
      _result.challenge = challenge;
    }
    if (email != null) {
      _result.email = email;
    }
    if (password != null) {
      _result.password = password;
    }
    if (gender != null) {
      _result.gender = gender;
    }
    if (consent != null) {
      _result.consent = consent;
    }
    if (jwtIdToken != null) {
      _result.jwtIdToken = jwtIdToken;
    }
    if (ssnProvider != null) {
      _result.ssnProvider = ssnProvider;
    }
    return _result;
  }
  factory AuthPublicRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AuthPublicRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AuthPublicRequest clone() => AuthPublicRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AuthPublicRequest copyWith(void Function(AuthPublicRequest) updates) => super.copyWith((message) => updates(message as AuthPublicRequest)) as AuthPublicRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AuthPublicRequest create() => AuthPublicRequest._();
  AuthPublicRequest createEmptyInstance() => create();
  static $pb.PbList<AuthPublicRequest> createRepeated() => $pb.PbList<AuthPublicRequest>();
  @$core.pragma('dart2js:noInline')
  static AuthPublicRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AuthPublicRequest>(create);
  static AuthPublicRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get challenge => $_getSZ(0);
  @$pb.TagNumber(1)
  set challenge($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasChallenge() => $_has(0);
  @$pb.TagNumber(1)
  void clearChallenge() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get email => $_getSZ(1);
  @$pb.TagNumber(2)
  set email($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEmail() => $_has(1);
  @$pb.TagNumber(2)
  void clearEmail() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get password => $_getSZ(2);
  @$pb.TagNumber(3)
  set password($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPassword() => $_has(2);
  @$pb.TagNumber(3)
  void clearPassword() => clearField(3);

  @$pb.TagNumber(4)
  Gender get gender => $_getN(3);
  @$pb.TagNumber(4)
  set gender(Gender v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGender() => $_has(3);
  @$pb.TagNumber(4)
  void clearGender() => clearField(4);

  @$pb.TagNumber(5)
  $core.bool get consent => $_getBF(4);
  @$pb.TagNumber(5)
  set consent($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasConsent() => $_has(4);
  @$pb.TagNumber(5)
  void clearConsent() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get jwtIdToken => $_getSZ(5);
  @$pb.TagNumber(6)
  set jwtIdToken($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasJwtIdToken() => $_has(5);
  @$pb.TagNumber(6)
  void clearJwtIdToken() => clearField(6);

  @$pb.TagNumber(7)
  SsnProvider get ssnProvider => $_getN(6);
  @$pb.TagNumber(7)
  set ssnProvider(SsnProvider v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasSsnProvider() => $_has(6);
  @$pb.TagNumber(7)
  void clearSsnProvider() => clearField(7);
  @$pb.TagNumber(7)
  SsnProvider ensureSsnProvider() => $_ensure(6);
}

class AuthPublicResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AuthPublicResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<ClientApp>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'client', subBuilder: ClientApp.create)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nameOfUser', protoName: 'nameOfUser')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'redirectAddr', protoName: 'redirectAddr')
    ..hasRequiredFields = false
  ;

  AuthPublicResponse._() : super();
  factory AuthPublicResponse({
    ClientApp? client,
    $core.String? nameOfUser,
    $core.String? redirectAddr,
  }) {
    final _result = create();
    if (client != null) {
      _result.client = client;
    }
    if (nameOfUser != null) {
      _result.nameOfUser = nameOfUser;
    }
    if (redirectAddr != null) {
      _result.redirectAddr = redirectAddr;
    }
    return _result;
  }
  factory AuthPublicResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AuthPublicResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AuthPublicResponse clone() => AuthPublicResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AuthPublicResponse copyWith(void Function(AuthPublicResponse) updates) => super.copyWith((message) => updates(message as AuthPublicResponse)) as AuthPublicResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AuthPublicResponse create() => AuthPublicResponse._();
  AuthPublicResponse createEmptyInstance() => create();
  static $pb.PbList<AuthPublicResponse> createRepeated() => $pb.PbList<AuthPublicResponse>();
  @$core.pragma('dart2js:noInline')
  static AuthPublicResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AuthPublicResponse>(create);
  static AuthPublicResponse? _defaultInstance;

  @$pb.TagNumber(1)
  ClientApp get client => $_getN(0);
  @$pb.TagNumber(1)
  set client(ClientApp v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasClient() => $_has(0);
  @$pb.TagNumber(1)
  void clearClient() => clearField(1);
  @$pb.TagNumber(1)
  ClientApp ensureClient() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.String get nameOfUser => $_getSZ(1);
  @$pb.TagNumber(2)
  set nameOfUser($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNameOfUser() => $_has(1);
  @$pb.TagNumber(2)
  void clearNameOfUser() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get redirectAddr => $_getSZ(2);
  @$pb.TagNumber(3)
  set redirectAddr($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasRedirectAddr() => $_has(2);
  @$pb.TagNumber(3)
  void clearRedirectAddr() => clearField(3);
}

class ConnectAdminRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ConnectAdminRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<ClientApp>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'app', subBuilder: ClientApp.create)
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'overwriteId', protoName: 'overwriteId')
    ..e<Timespan>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timespan', $pb.PbFieldType.OE, defaultOrMaker: Timespan.INVALID_TIMESPAN, valueOf: Timespan.valueOf, enumValues: Timespan.values)
    ..hasRequiredFields = false
  ;

  ConnectAdminRequest._() : super();
  factory ConnectAdminRequest({
    ClientApp? app,
    $core.bool? overwriteId,
    Timespan? timespan,
  }) {
    final _result = create();
    if (app != null) {
      _result.app = app;
    }
    if (overwriteId != null) {
      _result.overwriteId = overwriteId;
    }
    if (timespan != null) {
      _result.timespan = timespan;
    }
    return _result;
  }
  factory ConnectAdminRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ConnectAdminRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ConnectAdminRequest clone() => ConnectAdminRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ConnectAdminRequest copyWith(void Function(ConnectAdminRequest) updates) => super.copyWith((message) => updates(message as ConnectAdminRequest)) as ConnectAdminRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ConnectAdminRequest create() => ConnectAdminRequest._();
  ConnectAdminRequest createEmptyInstance() => create();
  static $pb.PbList<ConnectAdminRequest> createRepeated() => $pb.PbList<ConnectAdminRequest>();
  @$core.pragma('dart2js:noInline')
  static ConnectAdminRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ConnectAdminRequest>(create);
  static ConnectAdminRequest? _defaultInstance;

  @$pb.TagNumber(1)
  ClientApp get app => $_getN(0);
  @$pb.TagNumber(1)
  set app(ClientApp v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasApp() => $_has(0);
  @$pb.TagNumber(1)
  void clearApp() => clearField(1);
  @$pb.TagNumber(1)
  ClientApp ensureApp() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.bool get overwriteId => $_getBF(1);
  @$pb.TagNumber(2)
  set overwriteId($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasOverwriteId() => $_has(1);
  @$pb.TagNumber(2)
  void clearOverwriteId() => clearField(2);

  @$pb.TagNumber(3)
  Timespan get timespan => $_getN(2);
  @$pb.TagNumber(3)
  set timespan(Timespan v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasTimespan() => $_has(2);
  @$pb.TagNumber(3)
  void clearTimespan() => clearField(3);
}

class ConnectAdminResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ConnectAdminResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<ClientApp>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'app', subBuilder: ClientApp.create)
    ..m<$core.int, ConnectMetrics>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'metrics', entryClassName: 'ConnectAdminResponse.MetricsEntry', keyFieldType: $pb.PbFieldType.O3, valueFieldType: $pb.PbFieldType.OM, valueCreator: ConnectMetrics.create, packageName: const $pb.PackageName('Softcorp'))
    ..hasRequiredFields = false
  ;

  ConnectAdminResponse._() : super();
  factory ConnectAdminResponse({
    ClientApp? app,
    $core.Map<$core.int, ConnectMetrics>? metrics,
  }) {
    final _result = create();
    if (app != null) {
      _result.app = app;
    }
    if (metrics != null) {
      _result.metrics.addAll(metrics);
    }
    return _result;
  }
  factory ConnectAdminResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ConnectAdminResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ConnectAdminResponse clone() => ConnectAdminResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ConnectAdminResponse copyWith(void Function(ConnectAdminResponse) updates) => super.copyWith((message) => updates(message as ConnectAdminResponse)) as ConnectAdminResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ConnectAdminResponse create() => ConnectAdminResponse._();
  ConnectAdminResponse createEmptyInstance() => create();
  static $pb.PbList<ConnectAdminResponse> createRepeated() => $pb.PbList<ConnectAdminResponse>();
  @$core.pragma('dart2js:noInline')
  static ConnectAdminResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ConnectAdminResponse>(create);
  static ConnectAdminResponse? _defaultInstance;

  @$pb.TagNumber(1)
  ClientApp get app => $_getN(0);
  @$pb.TagNumber(1)
  set app(ClientApp v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasApp() => $_has(0);
  @$pb.TagNumber(1)
  void clearApp() => clearField(1);
  @$pb.TagNumber(1)
  ClientApp ensureApp() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.Map<$core.int, ConnectMetrics> get metrics => $_getMap(1);
}

class PublicDashboardRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PublicDashboardRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken', protoName: 'accessToken')
    ..aOM<Organization>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..aOM<ClientApp>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'connectApp', protoName: 'connectApp', subBuilder: ClientApp.create)
    ..e<Timespan>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timespan', $pb.PbFieldType.OE, defaultOrMaker: Timespan.INVALID_TIMESPAN, valueOf: Timespan.valueOf, enumValues: Timespan.values)
    ..aOM<Collaboration>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaboration', subBuilder: Collaboration.create)
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'secret')
    ..hasRequiredFields = false
  ;

  PublicDashboardRequest._() : super();
  factory PublicDashboardRequest({
    $core.String? accessToken,
    Organization? organization,
    ClientApp? connectApp,
    Timespan? timespan,
    Collaboration? collaboration,
    $core.String? secret,
  }) {
    final _result = create();
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    if (organization != null) {
      _result.organization = organization;
    }
    if (connectApp != null) {
      _result.connectApp = connectApp;
    }
    if (timespan != null) {
      _result.timespan = timespan;
    }
    if (collaboration != null) {
      _result.collaboration = collaboration;
    }
    if (secret != null) {
      _result.secret = secret;
    }
    return _result;
  }
  factory PublicDashboardRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PublicDashboardRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PublicDashboardRequest clone() => PublicDashboardRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PublicDashboardRequest copyWith(void Function(PublicDashboardRequest) updates) => super.copyWith((message) => updates(message as PublicDashboardRequest)) as PublicDashboardRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PublicDashboardRequest create() => PublicDashboardRequest._();
  PublicDashboardRequest createEmptyInstance() => create();
  static $pb.PbList<PublicDashboardRequest> createRepeated() => $pb.PbList<PublicDashboardRequest>();
  @$core.pragma('dart2js:noInline')
  static PublicDashboardRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PublicDashboardRequest>(create);
  static PublicDashboardRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get accessToken => $_getSZ(0);
  @$pb.TagNumber(1)
  set accessToken($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAccessToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearAccessToken() => clearField(1);

  @$pb.TagNumber(2)
  Organization get organization => $_getN(1);
  @$pb.TagNumber(2)
  set organization(Organization v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasOrganization() => $_has(1);
  @$pb.TagNumber(2)
  void clearOrganization() => clearField(2);
  @$pb.TagNumber(2)
  Organization ensureOrganization() => $_ensure(1);

  @$pb.TagNumber(3)
  ClientApp get connectApp => $_getN(2);
  @$pb.TagNumber(3)
  set connectApp(ClientApp v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasConnectApp() => $_has(2);
  @$pb.TagNumber(3)
  void clearConnectApp() => clearField(3);
  @$pb.TagNumber(3)
  ClientApp ensureConnectApp() => $_ensure(2);

  @$pb.TagNumber(4)
  Timespan get timespan => $_getN(3);
  @$pb.TagNumber(4)
  set timespan(Timespan v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasTimespan() => $_has(3);
  @$pb.TagNumber(4)
  void clearTimespan() => clearField(4);

  @$pb.TagNumber(5)
  Collaboration get collaboration => $_getN(4);
  @$pb.TagNumber(5)
  set collaboration(Collaboration v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCollaboration() => $_has(4);
  @$pb.TagNumber(5)
  void clearCollaboration() => clearField(5);
  @$pb.TagNumber(5)
  Collaboration ensureCollaboration() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.String get secret => $_getSZ(5);
  @$pb.TagNumber(6)
  set secret($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasSecret() => $_has(5);
  @$pb.TagNumber(6)
  void clearSecret() => clearField(6);
}

class PublicDashboardResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PublicDashboardResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<Organization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..pc<Organization>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizations', $pb.PbFieldType.PM, subBuilder: Organization.create)
    ..aOM<Collaboration>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaboration', subBuilder: Collaboration.create)
    ..pc<Collaboration>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaborations', $pb.PbFieldType.PM, subBuilder: Collaboration.create)
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'secret')
    ..aOM<ClientApp>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'connectApp', protoName: 'connectApp', subBuilder: ClientApp.create)
    ..pc<ClientApp>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'connectApps', $pb.PbFieldType.PM, protoName: 'connectApps', subBuilder: ClientApp.create)
    ..m<$core.int, ConnectMetrics>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'metrics', entryClassName: 'PublicDashboardResponse.MetricsEntry', keyFieldType: $pb.PbFieldType.O3, valueFieldType: $pb.PbFieldType.OM, valueCreator: ConnectMetrics.create, packageName: const $pb.PackageName('Softcorp'))
    ..hasRequiredFields = false
  ;

  PublicDashboardResponse._() : super();
  factory PublicDashboardResponse({
    Organization? organization,
    $core.Iterable<Organization>? organizations,
    Collaboration? collaboration,
    $core.Iterable<Collaboration>? collaborations,
    $core.String? secret,
    ClientApp? connectApp,
    $core.Iterable<ClientApp>? connectApps,
    $core.Map<$core.int, ConnectMetrics>? metrics,
  }) {
    final _result = create();
    if (organization != null) {
      _result.organization = organization;
    }
    if (organizations != null) {
      _result.organizations.addAll(organizations);
    }
    if (collaboration != null) {
      _result.collaboration = collaboration;
    }
    if (collaborations != null) {
      _result.collaborations.addAll(collaborations);
    }
    if (secret != null) {
      _result.secret = secret;
    }
    if (connectApp != null) {
      _result.connectApp = connectApp;
    }
    if (connectApps != null) {
      _result.connectApps.addAll(connectApps);
    }
    if (metrics != null) {
      _result.metrics.addAll(metrics);
    }
    return _result;
  }
  factory PublicDashboardResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PublicDashboardResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PublicDashboardResponse clone() => PublicDashboardResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PublicDashboardResponse copyWith(void Function(PublicDashboardResponse) updates) => super.copyWith((message) => updates(message as PublicDashboardResponse)) as PublicDashboardResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PublicDashboardResponse create() => PublicDashboardResponse._();
  PublicDashboardResponse createEmptyInstance() => create();
  static $pb.PbList<PublicDashboardResponse> createRepeated() => $pb.PbList<PublicDashboardResponse>();
  @$core.pragma('dart2js:noInline')
  static PublicDashboardResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PublicDashboardResponse>(create);
  static PublicDashboardResponse? _defaultInstance;

  @$pb.TagNumber(1)
  Organization get organization => $_getN(0);
  @$pb.TagNumber(1)
  set organization(Organization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganization() => clearField(1);
  @$pb.TagNumber(1)
  Organization ensureOrganization() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<Organization> get organizations => $_getList(1);

  @$pb.TagNumber(3)
  Collaboration get collaboration => $_getN(2);
  @$pb.TagNumber(3)
  set collaboration(Collaboration v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCollaboration() => $_has(2);
  @$pb.TagNumber(3)
  void clearCollaboration() => clearField(3);
  @$pb.TagNumber(3)
  Collaboration ensureCollaboration() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.List<Collaboration> get collaborations => $_getList(3);

  @$pb.TagNumber(5)
  $core.String get secret => $_getSZ(4);
  @$pb.TagNumber(5)
  set secret($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasSecret() => $_has(4);
  @$pb.TagNumber(5)
  void clearSecret() => clearField(5);

  @$pb.TagNumber(6)
  ClientApp get connectApp => $_getN(5);
  @$pb.TagNumber(6)
  set connectApp(ClientApp v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasConnectApp() => $_has(5);
  @$pb.TagNumber(6)
  void clearConnectApp() => clearField(6);
  @$pb.TagNumber(6)
  ClientApp ensureConnectApp() => $_ensure(5);

  @$pb.TagNumber(7)
  $core.List<ClientApp> get connectApps => $_getList(6);

  @$pb.TagNumber(8)
  $core.Map<$core.int, ConnectMetrics> get metrics => $_getMap(7);
}

class AdminCollaborationRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AdminCollaborationRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<Organization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: Organization.create)
    ..aOM<ClientApp>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'connectApp', protoName: 'connectApp', subBuilder: ClientApp.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'accessToken', protoName: 'accessToken')
    ..aOM<Collaboration>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaboration', subBuilder: Collaboration.create)
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'acceptCollaboration', protoName: 'acceptCollaboration')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'secret')
    ..aOB(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'onlyConnect', protoName: 'onlyConnect')
    ..aOB(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'onlyOrganization', protoName: 'onlyOrganization')
    ..aOB(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'onlyAccepted', protoName: 'onlyAccepted')
    ..hasRequiredFields = false
  ;

  AdminCollaborationRequest._() : super();
  factory AdminCollaborationRequest({
    Organization? organization,
    ClientApp? connectApp,
    $core.String? accessToken,
    Collaboration? collaboration,
    $core.bool? acceptCollaboration,
    $core.String? secret,
    $core.bool? onlyConnect,
    $core.bool? onlyOrganization,
    $core.bool? onlyAccepted,
  }) {
    final _result = create();
    if (organization != null) {
      _result.organization = organization;
    }
    if (connectApp != null) {
      _result.connectApp = connectApp;
    }
    if (accessToken != null) {
      _result.accessToken = accessToken;
    }
    if (collaboration != null) {
      _result.collaboration = collaboration;
    }
    if (acceptCollaboration != null) {
      _result.acceptCollaboration = acceptCollaboration;
    }
    if (secret != null) {
      _result.secret = secret;
    }
    if (onlyConnect != null) {
      _result.onlyConnect = onlyConnect;
    }
    if (onlyOrganization != null) {
      _result.onlyOrganization = onlyOrganization;
    }
    if (onlyAccepted != null) {
      _result.onlyAccepted = onlyAccepted;
    }
    return _result;
  }
  factory AdminCollaborationRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AdminCollaborationRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AdminCollaborationRequest clone() => AdminCollaborationRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AdminCollaborationRequest copyWith(void Function(AdminCollaborationRequest) updates) => super.copyWith((message) => updates(message as AdminCollaborationRequest)) as AdminCollaborationRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AdminCollaborationRequest create() => AdminCollaborationRequest._();
  AdminCollaborationRequest createEmptyInstance() => create();
  static $pb.PbList<AdminCollaborationRequest> createRepeated() => $pb.PbList<AdminCollaborationRequest>();
  @$core.pragma('dart2js:noInline')
  static AdminCollaborationRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AdminCollaborationRequest>(create);
  static AdminCollaborationRequest? _defaultInstance;

  @$pb.TagNumber(1)
  Organization get organization => $_getN(0);
  @$pb.TagNumber(1)
  set organization(Organization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganization() => clearField(1);
  @$pb.TagNumber(1)
  Organization ensureOrganization() => $_ensure(0);

  @$pb.TagNumber(2)
  ClientApp get connectApp => $_getN(1);
  @$pb.TagNumber(2)
  set connectApp(ClientApp v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasConnectApp() => $_has(1);
  @$pb.TagNumber(2)
  void clearConnectApp() => clearField(2);
  @$pb.TagNumber(2)
  ClientApp ensureConnectApp() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get accessToken => $_getSZ(2);
  @$pb.TagNumber(3)
  set accessToken($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAccessToken() => $_has(2);
  @$pb.TagNumber(3)
  void clearAccessToken() => clearField(3);

  @$pb.TagNumber(4)
  Collaboration get collaboration => $_getN(3);
  @$pb.TagNumber(4)
  set collaboration(Collaboration v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCollaboration() => $_has(3);
  @$pb.TagNumber(4)
  void clearCollaboration() => clearField(4);
  @$pb.TagNumber(4)
  Collaboration ensureCollaboration() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.bool get acceptCollaboration => $_getBF(4);
  @$pb.TagNumber(5)
  set acceptCollaboration($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasAcceptCollaboration() => $_has(4);
  @$pb.TagNumber(5)
  void clearAcceptCollaboration() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get secret => $_getSZ(5);
  @$pb.TagNumber(6)
  set secret($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasSecret() => $_has(5);
  @$pb.TagNumber(6)
  void clearSecret() => clearField(6);

  @$pb.TagNumber(7)
  $core.bool get onlyConnect => $_getBF(6);
  @$pb.TagNumber(7)
  set onlyConnect($core.bool v) { $_setBool(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasOnlyConnect() => $_has(6);
  @$pb.TagNumber(7)
  void clearOnlyConnect() => clearField(7);

  @$pb.TagNumber(8)
  $core.bool get onlyOrganization => $_getBF(7);
  @$pb.TagNumber(8)
  set onlyOrganization($core.bool v) { $_setBool(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasOnlyOrganization() => $_has(7);
  @$pb.TagNumber(8)
  void clearOnlyOrganization() => clearField(8);

  @$pb.TagNumber(9)
  $core.bool get onlyAccepted => $_getBF(8);
  @$pb.TagNumber(9)
  set onlyAccepted($core.bool v) { $_setBool(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasOnlyAccepted() => $_has(8);
  @$pb.TagNumber(9)
  void clearOnlyAccepted() => clearField(9);
}

class AdminCollaborationResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AdminCollaborationResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOM<Collaboration>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaboration', subBuilder: Collaboration.create)
    ..pc<Collaboration>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'collaborations', $pb.PbFieldType.PM, subBuilder: Collaboration.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'secret')
    ..hasRequiredFields = false
  ;

  AdminCollaborationResponse._() : super();
  factory AdminCollaborationResponse({
    Collaboration? collaboration,
    $core.Iterable<Collaboration>? collaborations,
    $core.String? secret,
  }) {
    final _result = create();
    if (collaboration != null) {
      _result.collaboration = collaboration;
    }
    if (collaborations != null) {
      _result.collaborations.addAll(collaborations);
    }
    if (secret != null) {
      _result.secret = secret;
    }
    return _result;
  }
  factory AdminCollaborationResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AdminCollaborationResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AdminCollaborationResponse clone() => AdminCollaborationResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AdminCollaborationResponse copyWith(void Function(AdminCollaborationResponse) updates) => super.copyWith((message) => updates(message as AdminCollaborationResponse)) as AdminCollaborationResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AdminCollaborationResponse create() => AdminCollaborationResponse._();
  AdminCollaborationResponse createEmptyInstance() => create();
  static $pb.PbList<AdminCollaborationResponse> createRepeated() => $pb.PbList<AdminCollaborationResponse>();
  @$core.pragma('dart2js:noInline')
  static AdminCollaborationResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AdminCollaborationResponse>(create);
  static AdminCollaborationResponse? _defaultInstance;

  @$pb.TagNumber(1)
  Collaboration get collaboration => $_getN(0);
  @$pb.TagNumber(1)
  set collaboration(Collaboration v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasCollaboration() => $_has(0);
  @$pb.TagNumber(1)
  void clearCollaboration() => clearField(1);
  @$pb.TagNumber(1)
  Collaboration ensureCollaboration() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<Collaboration> get collaborations => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get secret => $_getSZ(2);
  @$pb.TagNumber(3)
  set secret($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasSecret() => $_has(2);
  @$pb.TagNumber(3)
  void clearSecret() => clearField(3);
}

class Request extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Request', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  Request._() : super();
  factory Request() => create();
  factory Request.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Request.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Request clone() => Request()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Request copyWith(void Function(Request) updates) => super.copyWith((message) => updates(message as Request)) as Request; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Request create() => Request._();
  Request createEmptyInstance() => create();
  static $pb.PbList<Request> createRepeated() => $pb.PbList<Request>();
  @$core.pragma('dart2js:noInline')
  static Request getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Request>(create);
  static Request? _defaultInstance;
}

class Response extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Response', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Softcorp'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'msg')
    ..hasRequiredFields = false
  ;

  Response._() : super();
  factory Response({
    $core.String? msg,
  }) {
    final _result = create();
    if (msg != null) {
      _result.msg = msg;
    }
    return _result;
  }
  factory Response.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Response.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Response clone() => Response()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Response copyWith(void Function(Response) updates) => super.copyWith((message) => updates(message as Response)) as Response; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Response create() => Response._();
  Response createEmptyInstance() => create();
  static $pb.PbList<Response> createRepeated() => $pb.PbList<Response>();
  @$core.pragma('dart2js:noInline')
  static Response getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Response>(create);
  static Response? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get msg => $_getSZ(0);
  @$pb.TagNumber(1)
  set msg($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasMsg() => $_has(0);
  @$pb.TagNumber(1)
  void clearMsg() => clearField(1);
}

