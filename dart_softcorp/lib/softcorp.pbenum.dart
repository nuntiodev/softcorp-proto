///
//  Generated code. Do not modify.
//  source: softcorp.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

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

