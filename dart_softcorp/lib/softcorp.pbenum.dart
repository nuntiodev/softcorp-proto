///
//  Generated code. Do not modify.
//  source: softcorp.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Timespan extends $pb.ProtobufEnum {
  static const Timespan INVALID_TIMESPAN = Timespan._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_TIMESPAN');
  static const Timespan TIMESPAN_DAY = Timespan._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TIMESPAN_DAY');
  static const Timespan TIMESPAN_WEEK = Timespan._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TIMESPAN_WEEK');
  static const Timespan TIMESPAN_MONTH = Timespan._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TIMESPAN_MONTH');
  static const Timespan TIMESPAN_YEAR = Timespan._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TIMESPAN_YEAR');
  static const Timespan TIMESPAN_ALL = Timespan._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TIMESPAN_ALL');

  static const $core.List<Timespan> values = <Timespan> [
    INVALID_TIMESPAN,
    TIMESPAN_DAY,
    TIMESPAN_WEEK,
    TIMESPAN_MONTH,
    TIMESPAN_YEAR,
    TIMESPAN_ALL,
  ];

  static final $core.Map<$core.int, Timespan> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Timespan? valueOf($core.int value) => _byValue[value];

  const Timespan._($core.int v, $core.String n) : super(v, n);
}

class Gender extends $pb.ProtobufEnum {
  static const Gender INVALID_GENDER = Gender._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_GENDER');
  static const Gender MALE = Gender._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'MALE');
  static const Gender FEMALE = Gender._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FEMALE');
  static const Gender OTHER = Gender._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OTHER');

  static const $core.List<Gender> values = <Gender> [
    INVALID_GENDER,
    MALE,
    FEMALE,
    OTHER,
  ];

  static final $core.Map<$core.int, Gender> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Gender? valueOf($core.int value) => _byValue[value];

  const Gender._($core.int v, $core.String n) : super(v, n);
}

class ScopeType extends $pb.ProtobufEnum {
  static const ScopeType INVALID_SCOPE = ScopeType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_SCOPE');
  static const ScopeType DEFAULT_SCOPE = ScopeType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'DEFAULT_SCOPE');
  static const ScopeType OFFLINE_ACCESS_SCOPE = ScopeType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OFFLINE_ACCESS_SCOPE');
  static const ScopeType GENDER_SCOPE = ScopeType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'GENDER_SCOPE');
  static const ScopeType NAME_SCOPE = ScopeType._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'NAME_SCOPE');
  static const ScopeType BIRTHDAY_SCOPE = ScopeType._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'BIRTHDAY_SCOPE');
  static const ScopeType PREFERRED_LANGUAGE_SCOPE = ScopeType._(6, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PREFERRED_LANGUAGE_SCOPE');
  static const ScopeType COUNTRY_SCOPE = ScopeType._(7, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'COUNTRY_SCOPE');

  static const $core.List<ScopeType> values = <ScopeType> [
    INVALID_SCOPE,
    DEFAULT_SCOPE,
    OFFLINE_ACCESS_SCOPE,
    GENDER_SCOPE,
    NAME_SCOPE,
    BIRTHDAY_SCOPE,
    PREFERRED_LANGUAGE_SCOPE,
    COUNTRY_SCOPE,
  ];

  static final $core.Map<$core.int, ScopeType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ScopeType? valueOf($core.int value) => _byValue[value];

  const ScopeType._($core.int v, $core.String n) : super(v, n);
}

class AgeGroup extends $pb.ProtobufEnum {
  static const AgeGroup AGE_GROUP_INVALID = AgeGroup._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_INVALID');
  static const AgeGroup AGE_GROUP_1_12 = AgeGroup._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_1_12');
  static const AgeGroup AGE_GROUP_13_19 = AgeGroup._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_13_19');
  static const AgeGroup AGE_GROUP_20_29 = AgeGroup._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_20_29');
  static const AgeGroup AGE_GROUP_30_39 = AgeGroup._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_30_39');
  static const AgeGroup AGE_GROUP_40_49 = AgeGroup._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_40_49');
  static const AgeGroup AGE_GROUP_50_59 = AgeGroup._(6, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_50_59');
  static const AgeGroup AGE_GROUP_60_69 = AgeGroup._(7, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_60_69');
  static const AgeGroup AGE_GROUP_70_79 = AgeGroup._(8, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_70_79');
  static const AgeGroup AGE_GROUP_80_89 = AgeGroup._(9, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_80_89');
  static const AgeGroup AGE_GROUP_90_99 = AgeGroup._(10, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_90_99');
  static const AgeGroup AGE_GROUP_100_120 = AgeGroup._(11, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AGE_GROUP_100_120');

  static const $core.List<AgeGroup> values = <AgeGroup> [
    AGE_GROUP_INVALID,
    AGE_GROUP_1_12,
    AGE_GROUP_13_19,
    AGE_GROUP_20_29,
    AGE_GROUP_30_39,
    AGE_GROUP_40_49,
    AGE_GROUP_50_59,
    AGE_GROUP_60_69,
    AGE_GROUP_70_79,
    AGE_GROUP_80_89,
    AGE_GROUP_90_99,
    AGE_GROUP_100_120,
  ];

  static final $core.Map<$core.int, AgeGroup> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AgeGroup? valueOf($core.int value) => _byValue[value];

  const AgeGroup._($core.int v, $core.String n) : super(v, n);
}

class CollaborationType extends $pb.ProtobufEnum {
  static const CollaborationType INVALID_COLLABORATION = CollaborationType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_COLLABORATION');
  static const CollaborationType ORGANIZATION_COLLABORATION = CollaborationType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ORGANIZATION_COLLABORATION');
  static const CollaborationType CONNECT_COLLABORATION = CollaborationType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CONNECT_COLLABORATION');

  static const $core.List<CollaborationType> values = <CollaborationType> [
    INVALID_COLLABORATION,
    ORGANIZATION_COLLABORATION,
    CONNECT_COLLABORATION,
  ];

  static final $core.Map<$core.int, CollaborationType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static CollaborationType? valueOf($core.int value) => _byValue[value];

  const CollaborationType._($core.int v, $core.String n) : super(v, n);
}

class GrantType extends $pb.ProtobufEnum {
  static const GrantType INVALID_GRANT = GrantType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_GRANT');
  static const GrantType AUTH_GRANT = GrantType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AUTH_GRANT');
  static const GrantType REFRESH_GRANT = GrantType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'REFRESH_GRANT');

  static const $core.List<GrantType> values = <GrantType> [
    INVALID_GRANT,
    AUTH_GRANT,
    REFRESH_GRANT,
  ];

  static final $core.Map<$core.int, GrantType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static GrantType? valueOf($core.int value) => _byValue[value];

  const GrantType._($core.int v, $core.String n) : super(v, n);
}

class ResponeType extends $pb.ProtobufEnum {
  static const ResponeType INVALID_RESPONSE = ResponeType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_RESPONSE');
  static const ResponeType CODE_RESPONSE = ResponeType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CODE_RESPONSE');
  static const ResponeType TOKEN_RESPONSE = ResponeType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TOKEN_RESPONSE');
  static const ResponeType ID_RESPONSE = ResponeType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ID_RESPONSE');

  static const $core.List<ResponeType> values = <ResponeType> [
    INVALID_RESPONSE,
    CODE_RESPONSE,
    TOKEN_RESPONSE,
    ID_RESPONSE,
  ];

  static final $core.Map<$core.int, ResponeType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ResponeType? valueOf($core.int value) => _byValue[value];

  const ResponeType._($core.int v, $core.String n) : super(v, n);
}

class LanguageCodeType extends $pb.ProtobufEnum {
  static const LanguageCodeType INVALID_LANGUAGE = LanguageCodeType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_LANGUAGE');
  static const LanguageCodeType LANGUAGE_DK = LanguageCodeType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'LANGUAGE_DK');
  static const LanguageCodeType LANGUAGE_EN = LanguageCodeType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'LANGUAGE_EN');

  static const $core.List<LanguageCodeType> values = <LanguageCodeType> [
    INVALID_LANGUAGE,
    LANGUAGE_DK,
    LANGUAGE_EN,
  ];

  static final $core.Map<$core.int, LanguageCodeType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static LanguageCodeType? valueOf($core.int value) => _byValue[value];

  const LanguageCodeType._($core.int v, $core.String n) : super(v, n);
}

class CountryCodeType extends $pb.ProtobufEnum {
  static const CountryCodeType INVALID_COUNTRY = CountryCodeType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID_COUNTRY');
  static const CountryCodeType COUTRY_DK = CountryCodeType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'COUTRY_DK');
  static const CountryCodeType COUNTRY_NO = CountryCodeType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'COUNTRY_NO');
  static const CountryCodeType COUNTRY_DE = CountryCodeType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'COUNTRY_DE');

  static const $core.List<CountryCodeType> values = <CountryCodeType> [
    INVALID_COUNTRY,
    COUTRY_DK,
    COUNTRY_NO,
    COUNTRY_DE,
  ];

  static final $core.Map<$core.int, CountryCodeType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static CountryCodeType? valueOf($core.int value) => _byValue[value];

  const CountryCodeType._($core.int v, $core.String n) : super(v, n);
}

class SsnProviderType extends $pb.ProtobufEnum {
  static const SsnProviderType INVALID = SsnProviderType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'INVALID');
  static const SsnProviderType MIT_ID = SsnProviderType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'MIT_ID');

  static const $core.List<SsnProviderType> values = <SsnProviderType> [
    INVALID,
    MIT_ID,
  ];

  static final $core.Map<$core.int, SsnProviderType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static SsnProviderType? valueOf($core.int value) => _byValue[value];

  const SsnProviderType._($core.int v, $core.String n) : super(v, n);
}

