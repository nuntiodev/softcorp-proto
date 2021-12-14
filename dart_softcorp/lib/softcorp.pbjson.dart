///
//  Generated code. Do not modify.
//  source: softcorp.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use timespanDescriptor instead')
const Timespan$json = const {
  '1': 'Timespan',
  '2': const [
    const {'1': 'INVALID_TIMESPAN', '2': 0},
    const {'1': 'TIMESPAN_DAY', '2': 1},
    const {'1': 'TIMESPAN_WEEK', '2': 2},
    const {'1': 'TIMESPAN_MONTH', '2': 3},
    const {'1': 'TIMESPAN_YEAR', '2': 4},
    const {'1': 'TIMESPAN_ALL', '2': 5},
  ],
};

/// Descriptor for `Timespan`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List timespanDescriptor = $convert.base64Decode('CghUaW1lc3BhbhIUChBJTlZBTElEX1RJTUVTUEFOEAASEAoMVElNRVNQQU5fREFZEAESEQoNVElNRVNQQU5fV0VFSxACEhIKDlRJTUVTUEFOX01PTlRIEAMSEQoNVElNRVNQQU5fWUVBUhAEEhAKDFRJTUVTUEFOX0FMTBAF');
@$core.Deprecated('Use genderDescriptor instead')
const Gender$json = const {
  '1': 'Gender',
  '2': const [
    const {'1': 'INVALID_GENDER', '2': 0},
    const {'1': 'MALE', '2': 1},
    const {'1': 'FEMALE', '2': 2},
    const {'1': 'OTHER', '2': 3},
  ],
};

/// Descriptor for `Gender`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List genderDescriptor = $convert.base64Decode('CgZHZW5kZXISEgoOSU5WQUxJRF9HRU5ERVIQABIICgRNQUxFEAESCgoGRkVNQUxFEAISCQoFT1RIRVIQAw==');
@$core.Deprecated('Use scopeTypeDescriptor instead')
const ScopeType$json = const {
  '1': 'ScopeType',
  '2': const [
    const {'1': 'INVALID_SCOPE', '2': 0},
    const {'1': 'DEFAULT_SCOPE', '2': 1},
    const {'1': 'OFFLINE_ACCESS_SCOPE', '2': 2},
    const {'1': 'GENDER_SCOPE', '2': 3},
    const {'1': 'NAME_SCOPE', '2': 4},
    const {'1': 'BIRTHDAY_SCOPE', '2': 5},
    const {'1': 'PREFERRED_LANGUAGE_SCOPE', '2': 6},
    const {'1': 'COUNTRY_SCOPE', '2': 7},
  ],
};

/// Descriptor for `ScopeType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List scopeTypeDescriptor = $convert.base64Decode('CglTY29wZVR5cGUSEQoNSU5WQUxJRF9TQ09QRRAAEhEKDURFRkFVTFRfU0NPUEUQARIYChRPRkZMSU5FX0FDQ0VTU19TQ09QRRACEhAKDEdFTkRFUl9TQ09QRRADEg4KCk5BTUVfU0NPUEUQBBISCg5CSVJUSERBWV9TQ09QRRAFEhwKGFBSRUZFUlJFRF9MQU5HVUFHRV9TQ09QRRAGEhEKDUNPVU5UUllfU0NPUEUQBw==');
@$core.Deprecated('Use ageGroupDescriptor instead')
const AgeGroup$json = const {
  '1': 'AgeGroup',
  '2': const [
    const {'1': 'AGE_GROUP_INVALID', '2': 0},
    const {'1': 'AGE_GROUP_1_12', '2': 1},
    const {'1': 'AGE_GROUP_13_19', '2': 2},
    const {'1': 'AGE_GROUP_20_29', '2': 3},
    const {'1': 'AGE_GROUP_30_39', '2': 4},
    const {'1': 'AGE_GROUP_40_49', '2': 5},
    const {'1': 'AGE_GROUP_50_59', '2': 6},
    const {'1': 'AGE_GROUP_60_69', '2': 7},
    const {'1': 'AGE_GROUP_70_79', '2': 8},
    const {'1': 'AGE_GROUP_80_89', '2': 9},
    const {'1': 'AGE_GROUP_90_99', '2': 10},
    const {'1': 'AGE_GROUP_100_120', '2': 11},
  ],
};

/// Descriptor for `AgeGroup`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List ageGroupDescriptor = $convert.base64Decode('CghBZ2VHcm91cBIVChFBR0VfR1JPVVBfSU5WQUxJRBAAEhIKDkFHRV9HUk9VUF8xXzEyEAESEwoPQUdFX0dST1VQXzEzXzE5EAISEwoPQUdFX0dST1VQXzIwXzI5EAMSEwoPQUdFX0dST1VQXzMwXzM5EAQSEwoPQUdFX0dST1VQXzQwXzQ5EAUSEwoPQUdFX0dST1VQXzUwXzU5EAYSEwoPQUdFX0dST1VQXzYwXzY5EAcSEwoPQUdFX0dST1VQXzcwXzc5EAgSEwoPQUdFX0dST1VQXzgwXzg5EAkSEwoPQUdFX0dST1VQXzkwXzk5EAoSFQoRQUdFX0dST1VQXzEwMF8xMjAQCw==');
@$core.Deprecated('Use collaborationTypeDescriptor instead')
const CollaborationType$json = const {
  '1': 'CollaborationType',
  '2': const [
    const {'1': 'INVALID_COLLABORATION', '2': 0},
    const {'1': 'ORGANIZATION_COLLABORATION', '2': 1},
    const {'1': 'CONNECT_COLLABORATION', '2': 2},
  ],
};

/// Descriptor for `CollaborationType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List collaborationTypeDescriptor = $convert.base64Decode('ChFDb2xsYWJvcmF0aW9uVHlwZRIZChVJTlZBTElEX0NPTExBQk9SQVRJT04QABIeChpPUkdBTklaQVRJT05fQ09MTEFCT1JBVElPThABEhkKFUNPTk5FQ1RfQ09MTEFCT1JBVElPThAC');
@$core.Deprecated('Use collaborationRoleDescriptor instead')
const CollaborationRole$json = const {
  '1': 'CollaborationRole',
  '2': const [
    const {'1': 'INVALID_COLLABORATION_ROLE', '2': 0},
    const {'1': 'OWNER', '2': 1},
    const {'1': 'VIEWER', '2': 2},
    const {'1': 'EDITOR', '2': 3},
    const {'1': 'ADMIN', '2': 4},
  ],
};

/// Descriptor for `CollaborationRole`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List collaborationRoleDescriptor = $convert.base64Decode('ChFDb2xsYWJvcmF0aW9uUm9sZRIeChpJTlZBTElEX0NPTExBQk9SQVRJT05fUk9MRRAAEgkKBU9XTkVSEAESCgoGVklFV0VSEAISCgoGRURJVE9SEAMSCQoFQURNSU4QBA==');
@$core.Deprecated('Use grantTypeDescriptor instead')
const GrantType$json = const {
  '1': 'GrantType',
  '2': const [
    const {'1': 'INVALID_GRANT', '2': 0},
    const {'1': 'AUTH_GRANT', '2': 1},
    const {'1': 'REFRESH_GRANT', '2': 2},
  ],
};

/// Descriptor for `GrantType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List grantTypeDescriptor = $convert.base64Decode('CglHcmFudFR5cGUSEQoNSU5WQUxJRF9HUkFOVBAAEg4KCkFVVEhfR1JBTlQQARIRCg1SRUZSRVNIX0dSQU5UEAI=');
@$core.Deprecated('Use responeTypeDescriptor instead')
const ResponeType$json = const {
  '1': 'ResponeType',
  '2': const [
    const {'1': 'INVALID_RESPONSE', '2': 0},
    const {'1': 'CODE_RESPONSE', '2': 1},
    const {'1': 'TOKEN_RESPONSE', '2': 2},
    const {'1': 'ID_RESPONSE', '2': 3},
  ],
};

/// Descriptor for `ResponeType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List responeTypeDescriptor = $convert.base64Decode('CgtSZXNwb25lVHlwZRIUChBJTlZBTElEX1JFU1BPTlNFEAASEQoNQ09ERV9SRVNQT05TRRABEhIKDlRPS0VOX1JFU1BPTlNFEAISDwoLSURfUkVTUE9OU0UQAw==');
@$core.Deprecated('Use languageCodeTypeDescriptor instead')
const LanguageCodeType$json = const {
  '1': 'LanguageCodeType',
  '2': const [
    const {'1': 'INVALID_LANGUAGE', '2': 0},
    const {'1': 'LANGUAGE_DK', '2': 1},
    const {'1': 'LANGUAGE_EN', '2': 2},
    const {'1': 'LANGUAGE_DE', '2': 3},
  ],
};

/// Descriptor for `LanguageCodeType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List languageCodeTypeDescriptor = $convert.base64Decode('ChBMYW5ndWFnZUNvZGVUeXBlEhQKEElOVkFMSURfTEFOR1VBR0UQABIPCgtMQU5HVUFHRV9ESxABEg8KC0xBTkdVQUdFX0VOEAISDwoLTEFOR1VBR0VfREUQAw==');
@$core.Deprecated('Use countryCodeTypeDescriptor instead')
const CountryCodeType$json = const {
  '1': 'CountryCodeType',
  '2': const [
    const {'1': 'INVALID_COUNTRY', '2': 0},
    const {'1': 'COUTRY_DK', '2': 1},
    const {'1': 'COUNTRY_NO', '2': 2},
    const {'1': 'COUNTRY_DE', '2': 3},
  ],
};

/// Descriptor for `CountryCodeType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List countryCodeTypeDescriptor = $convert.base64Decode('Cg9Db3VudHJ5Q29kZVR5cGUSEwoPSU5WQUxJRF9DT1VOVFJZEAASDQoJQ09VVFJZX0RLEAESDgoKQ09VTlRSWV9OTxACEg4KCkNPVU5UUllfREUQAw==');
@$core.Deprecated('Use ssnProviderTypeDescriptor instead')
const SsnProviderType$json = const {
  '1': 'SsnProviderType',
  '2': const [
    const {'1': 'INVALID', '2': 0},
    const {'1': 'MIT_ID', '2': 1},
  ],
};

/// Descriptor for `SsnProviderType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List ssnProviderTypeDescriptor = $convert.base64Decode('Cg9Tc25Qcm92aWRlclR5cGUSCwoHSU5WQUxJRBAAEgoKBk1JVF9JRBAB');
@$core.Deprecated('Use connectMetricDescriptor instead')
const ConnectMetric$json = const {
  '1': 'ConnectMetric',
  '2': const [
    const {'1': 'date', '3': 1, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'date'},
    const {'1': 'numberOfRequests', '3': 2, '4': 1, '5': 5, '10': 'numberOfRequests'},
    const {'1': 'numberOfConsentTrue', '3': 3, '4': 1, '5': 5, '10': 'numberOfConsentTrue'},
    const {'1': 'numberOfConsentFalse', '3': 4, '4': 1, '5': 5, '10': 'numberOfConsentFalse'},
    const {'1': 'numberOfAgeGroup1To12', '3': 5, '4': 1, '5': 5, '10': 'numberOfAgeGroup1To12'},
    const {'1': 'numberOfAgeGroup13To19', '3': 6, '4': 1, '5': 5, '10': 'numberOfAgeGroup13To19'},
    const {'1': 'numberOfAgeGroup20To29', '3': 7, '4': 1, '5': 5, '10': 'numberOfAgeGroup20To29'},
    const {'1': 'numberOfAgeGroup30To39', '3': 8, '4': 1, '5': 5, '10': 'numberOfAgeGroup30To39'},
    const {'1': 'numberOfAgeGroup40To49', '3': 9, '4': 1, '5': 5, '10': 'numberOfAgeGroup40To49'},
    const {'1': 'numberOfAgeGroup50To59', '3': 10, '4': 1, '5': 5, '10': 'numberOfAgeGroup50To59'},
    const {'1': 'numberOfAgeGroup60To69', '3': 11, '4': 1, '5': 5, '10': 'numberOfAgeGroup60To69'},
    const {'1': 'numberOfAgeGroup70To79', '3': 12, '4': 1, '5': 5, '10': 'numberOfAgeGroup70To79'},
    const {'1': 'numberOfAgeGroup80To89', '3': 13, '4': 1, '5': 5, '10': 'numberOfAgeGroup80To89'},
    const {'1': 'numberOfAgeGroup90To99', '3': 14, '4': 1, '5': 5, '10': 'numberOfAgeGroup90To99'},
    const {'1': 'numberOfAgeGroup100To120', '3': 15, '4': 1, '5': 5, '10': 'numberOfAgeGroup100To120'},
    const {'1': 'numberOfFemales', '3': 16, '4': 1, '5': 5, '10': 'numberOfFemales'},
    const {'1': 'numberOfMales', '3': 17, '4': 1, '5': 5, '10': 'numberOfMales'},
    const {'1': 'numberOfOthers', '3': 18, '4': 1, '5': 5, '10': 'numberOfOthers'},
    const {'1': 'amountFromDk', '3': 19, '4': 1, '5': 5, '10': 'amountFromDk'},
    const {'1': 'amountFromNo', '3': 20, '4': 1, '5': 5, '10': 'amountFromNo'},
    const {'1': 'amountFromDe', '3': 21, '4': 1, '5': 5, '10': 'amountFromDe'},
  ],
};

/// Descriptor for `ConnectMetric`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List connectMetricDescriptor = $convert.base64Decode('Cg1Db25uZWN0TWV0cmljEi4KBGRhdGUYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgRkYXRlEioKEG51bWJlck9mUmVxdWVzdHMYAiABKAVSEG51bWJlck9mUmVxdWVzdHMSMAoTbnVtYmVyT2ZDb25zZW50VHJ1ZRgDIAEoBVITbnVtYmVyT2ZDb25zZW50VHJ1ZRIyChRudW1iZXJPZkNvbnNlbnRGYWxzZRgEIAEoBVIUbnVtYmVyT2ZDb25zZW50RmFsc2USNAoVbnVtYmVyT2ZBZ2VHcm91cDFUbzEyGAUgASgFUhVudW1iZXJPZkFnZUdyb3VwMVRvMTISNgoWbnVtYmVyT2ZBZ2VHcm91cDEzVG8xORgGIAEoBVIWbnVtYmVyT2ZBZ2VHcm91cDEzVG8xORI2ChZudW1iZXJPZkFnZUdyb3VwMjBUbzI5GAcgASgFUhZudW1iZXJPZkFnZUdyb3VwMjBUbzI5EjYKFm51bWJlck9mQWdlR3JvdXAzMFRvMzkYCCABKAVSFm51bWJlck9mQWdlR3JvdXAzMFRvMzkSNgoWbnVtYmVyT2ZBZ2VHcm91cDQwVG80ORgJIAEoBVIWbnVtYmVyT2ZBZ2VHcm91cDQwVG80ORI2ChZudW1iZXJPZkFnZUdyb3VwNTBUbzU5GAogASgFUhZudW1iZXJPZkFnZUdyb3VwNTBUbzU5EjYKFm51bWJlck9mQWdlR3JvdXA2MFRvNjkYCyABKAVSFm51bWJlck9mQWdlR3JvdXA2MFRvNjkSNgoWbnVtYmVyT2ZBZ2VHcm91cDcwVG83ORgMIAEoBVIWbnVtYmVyT2ZBZ2VHcm91cDcwVG83ORI2ChZudW1iZXJPZkFnZUdyb3VwODBUbzg5GA0gASgFUhZudW1iZXJPZkFnZUdyb3VwODBUbzg5EjYKFm51bWJlck9mQWdlR3JvdXA5MFRvOTkYDiABKAVSFm51bWJlck9mQWdlR3JvdXA5MFRvOTkSOgoYbnVtYmVyT2ZBZ2VHcm91cDEwMFRvMTIwGA8gASgFUhhudW1iZXJPZkFnZUdyb3VwMTAwVG8xMjASKAoPbnVtYmVyT2ZGZW1hbGVzGBAgASgFUg9udW1iZXJPZkZlbWFsZXMSJAoNbnVtYmVyT2ZNYWxlcxgRIAEoBVINbnVtYmVyT2ZNYWxlcxImCg5udW1iZXJPZk90aGVycxgSIAEoBVIObnVtYmVyT2ZPdGhlcnMSIgoMYW1vdW50RnJvbURrGBMgASgFUgxhbW91bnRGcm9tRGsSIgoMYW1vdW50RnJvbU5vGBQgASgFUgxhbW91bnRGcm9tTm8SIgoMYW1vdW50RnJvbURlGBUgASgFUgxhbW91bnRGcm9tRGU=');
@$core.Deprecated('Use connectMetricsDescriptor instead')
const ConnectMetrics$json = const {
  '1': 'ConnectMetrics',
  '2': const [
    const {'1': 'metrics', '3': 1, '4': 3, '5': 11, '6': '.Softcorp.ConnectMetric', '10': 'metrics'},
  ],
};

/// Descriptor for `ConnectMetrics`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List connectMetricsDescriptor = $convert.base64Decode('Cg5Db25uZWN0TWV0cmljcxIxCgdtZXRyaWNzGAEgAygLMhcuU29mdGNvcnAuQ29ubmVjdE1ldHJpY1IHbWV0cmljcw==');
@$core.Deprecated('Use collaborationDescriptor instead')
const Collaboration$json = const {
  '1': 'Collaboration',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    const {'1': 'name', '3': 3, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'userId', '3': 4, '4': 1, '5': 9, '10': 'userId'},
    const {'1': 'objectId', '3': 5, '4': 1, '5': 9, '10': 'objectId'},
    const {'1': 'collaborationType', '3': 6, '4': 1, '5': 14, '6': '.Softcorp.CollaborationType', '10': 'collaborationType'},
    const {'1': 'accepted', '3': 7, '4': 1, '5': 8, '10': 'accepted'},
    const {'1': 'hashedCode', '3': 8, '4': 1, '5': 9, '10': 'hashedCode'},
    const {'1': 'role', '3': 9, '4': 1, '5': 14, '6': '.Softcorp.CollaborationRole', '10': 'role'},
    const {'1': 'createdAt', '3': 10, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updatedAt', '3': 11, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
  ],
};

/// Descriptor for `Collaboration`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List collaborationDescriptor = $convert.base64Decode('Cg1Db2xsYWJvcmF0aW9uEg4KAmlkGAEgASgJUgJpZBIUCgVlbWFpbBgCIAEoCVIFZW1haWwSEgoEbmFtZRgDIAEoCVIEbmFtZRIWCgZ1c2VySWQYBCABKAlSBnVzZXJJZBIaCghvYmplY3RJZBgFIAEoCVIIb2JqZWN0SWQSSQoRY29sbGFib3JhdGlvblR5cGUYBiABKA4yGy5Tb2Z0Y29ycC5Db2xsYWJvcmF0aW9uVHlwZVIRY29sbGFib3JhdGlvblR5cGUSGgoIYWNjZXB0ZWQYByABKAhSCGFjY2VwdGVkEh4KCmhhc2hlZENvZGUYCCABKAlSCmhhc2hlZENvZGUSLwoEcm9sZRgJIAEoDjIbLlNvZnRjb3JwLkNvbGxhYm9yYXRpb25Sb2xlUgRyb2xlEjgKCWNyZWF0ZWRBdBgKIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCWNyZWF0ZWRBdBI4Cgl1cGRhdGVkQXQYCyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgl1cGRhdGVkQXQ=');
@$core.Deprecated('Use organizationDescriptor instead')
const Organization$json = const {
  '1': 'Organization',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'ownerId', '3': 2, '4': 1, '5': 9, '10': 'ownerId'},
    const {'1': 'organizationName', '3': 3, '4': 1, '5': 9, '10': 'organizationName'},
    const {'1': 'contactEmail', '3': 4, '4': 1, '5': 9, '10': 'contactEmail'},
    const {'1': 'createdAt', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updatedAt', '3': 6, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'isOwner', '3': 7, '4': 1, '5': 8, '10': 'isOwner'},
    const {'1': 'collaborations', '3': 8, '4': 3, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaborations'},
  ],
};

/// Descriptor for `Organization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List organizationDescriptor = $convert.base64Decode('CgxPcmdhbml6YXRpb24SDgoCaWQYASABKAlSAmlkEhgKB293bmVySWQYAiABKAlSB293bmVySWQSKgoQb3JnYW5pemF0aW9uTmFtZRgDIAEoCVIQb3JnYW5pemF0aW9uTmFtZRIiCgxjb250YWN0RW1haWwYBCABKAlSDGNvbnRhY3RFbWFpbBI4CgljcmVhdGVkQXQYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgljcmVhdGVkQXQSOAoJdXBkYXRlZEF0GAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EhgKB2lzT3duZXIYByABKAhSB2lzT3duZXISPwoOY29sbGFib3JhdGlvbnMYCCADKAsyFy5Tb2Z0Y29ycC5Db2xsYWJvcmF0aW9uUg5jb2xsYWJvcmF0aW9ucw==');
@$core.Deprecated('Use scopeDescriptor instead')
const Scope$json = const {
  '1': 'Scope',
  '2': const [
    const {'1': 'scopeType', '3': 1, '4': 1, '5': 14, '6': '.Softcorp.ScopeType', '10': 'scopeType'},
    const {'1': 'readId', '3': 2, '4': 1, '5': 8, '10': 'readId'},
    const {'1': 'readEmail', '3': 3, '4': 1, '5': 8, '10': 'readEmail'},
    const {'1': 'readGender', '3': 4, '4': 1, '5': 8, '10': 'readGender'},
    const {'1': 'readCreatedAt', '3': 5, '4': 1, '5': 8, '10': 'readCreatedAt'},
    const {'1': 'offlineAccess', '3': 6, '4': 1, '5': 8, '10': 'offlineAccess'},
    const {'1': 'readName', '3': 7, '4': 1, '5': 8, '10': 'readName'},
    const {'1': 'readBirthday', '3': 8, '4': 1, '5': 8, '10': 'readBirthday'},
    const {'1': 'readCountry', '3': 9, '4': 1, '5': 8, '10': 'readCountry'},
    const {'1': 'readPrefLangauge', '3': 10, '4': 1, '5': 8, '10': 'readPrefLangauge'},
    const {'1': 'name', '3': 11, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'key', '3': 12, '4': 1, '5': 9, '10': 'key'},
  ],
};

/// Descriptor for `Scope`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List scopeDescriptor = $convert.base64Decode('CgVTY29wZRIxCglzY29wZVR5cGUYASABKA4yEy5Tb2Z0Y29ycC5TY29wZVR5cGVSCXNjb3BlVHlwZRIWCgZyZWFkSWQYAiABKAhSBnJlYWRJZBIcCglyZWFkRW1haWwYAyABKAhSCXJlYWRFbWFpbBIeCgpyZWFkR2VuZGVyGAQgASgIUgpyZWFkR2VuZGVyEiQKDXJlYWRDcmVhdGVkQXQYBSABKAhSDXJlYWRDcmVhdGVkQXQSJAoNb2ZmbGluZUFjY2VzcxgGIAEoCFINb2ZmbGluZUFjY2VzcxIaCghyZWFkTmFtZRgHIAEoCFIIcmVhZE5hbWUSIgoMcmVhZEJpcnRoZGF5GAggASgIUgxyZWFkQmlydGhkYXkSIAoLcmVhZENvdW50cnkYCSABKAhSC3JlYWRDb3VudHJ5EioKEHJlYWRQcmVmTGFuZ2F1Z2UYCiABKAhSEHJlYWRQcmVmTGFuZ2F1Z2USEgoEbmFtZRgLIAEoCVIEbmFtZRIQCgNrZXkYDCABKAlSA2tleQ==');
@$core.Deprecated('Use grantDescriptor instead')
const Grant$json = const {
  '1': 'Grant',
  '2': const [
    const {'1': 'grantType', '3': 1, '4': 1, '5': 14, '6': '.Softcorp.GrantType', '10': 'grantType'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `Grant`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List grantDescriptor = $convert.base64Decode('CgVHcmFudBIxCglncmFudFR5cGUYASABKA4yEy5Tb2Z0Y29ycC5HcmFudFR5cGVSCWdyYW50VHlwZRISCgRuYW1lGAIgASgJUgRuYW1l');
@$core.Deprecated('Use oauthResponseDescriptor instead')
const OauthResponse$json = const {
  '1': 'OauthResponse',
  '2': const [
    const {'1': 'responseType', '3': 1, '4': 1, '5': 14, '6': '.Softcorp.ResponeType', '10': 'responseType'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `OauthResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List oauthResponseDescriptor = $convert.base64Decode('Cg1PYXV0aFJlc3BvbnNlEjkKDHJlc3BvbnNlVHlwZRgBIAEoDjIVLlNvZnRjb3JwLlJlc3BvbmVUeXBlUgxyZXNwb25zZVR5cGUSEgoEbmFtZRgCIAEoCVIEbmFtZQ==');
@$core.Deprecated('Use languageCodeDescriptor instead')
const LanguageCode$json = const {
  '1': 'LanguageCode',
  '2': const [
    const {'1': 'languageCodeType', '3': 1, '4': 1, '5': 14, '6': '.Softcorp.LanguageCodeType', '10': 'languageCodeType'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `LanguageCode`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List languageCodeDescriptor = $convert.base64Decode('CgxMYW5ndWFnZUNvZGUSRgoQbGFuZ3VhZ2VDb2RlVHlwZRgBIAEoDjIaLlNvZnRjb3JwLkxhbmd1YWdlQ29kZVR5cGVSEGxhbmd1YWdlQ29kZVR5cGUSEgoEbmFtZRgCIAEoCVIEbmFtZQ==');
@$core.Deprecated('Use countryCodeDescriptor instead')
const CountryCode$json = const {
  '1': 'CountryCode',
  '2': const [
    const {'1': 'countryCodeType', '3': 1, '4': 1, '5': 14, '6': '.Softcorp.CountryCodeType', '10': 'countryCodeType'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `CountryCode`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List countryCodeDescriptor = $convert.base64Decode('CgtDb3VudHJ5Q29kZRJDCg9jb3VudHJ5Q29kZVR5cGUYASABKA4yGS5Tb2Z0Y29ycC5Db3VudHJ5Q29kZVR5cGVSD2NvdW50cnlDb2RlVHlwZRISCgRuYW1lGAIgASgJUgRuYW1l');
@$core.Deprecated('Use ssnProviderDescriptor instead')
const SsnProvider$json = const {
  '1': 'SsnProvider',
  '2': const [
    const {'1': 'ssnProviderType', '3': 1, '4': 1, '5': 14, '6': '.Softcorp.SsnProviderType', '10': 'ssnProviderType'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `SsnProvider`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List ssnProviderDescriptor = $convert.base64Decode('CgtTc25Qcm92aWRlchJDCg9zc25Qcm92aWRlclR5cGUYASABKA4yGS5Tb2Z0Y29ycC5Tc25Qcm92aWRlclR5cGVSD3NzblByb3ZpZGVyVHlwZRISCgRuYW1lGAIgASgJUgRuYW1l');
@$core.Deprecated('Use ssnDescriptor instead')
const Ssn$json = const {
  '1': 'Ssn',
  '2': const [
    const {'1': 'ssn', '3': 1, '4': 1, '5': 9, '10': 'ssn'},
    const {'1': 'ssnHash', '3': 2, '4': 1, '5': 9, '10': 'ssnHash'},
    const {'1': 'ssnIdentifier', '3': 3, '4': 1, '5': 9, '10': 'ssnIdentifier'},
    const {'1': 'ssnProvider', '3': 4, '4': 1, '5': 11, '6': '.Softcorp.SsnProvider', '10': 'ssnProvider'},
  ],
};

/// Descriptor for `Ssn`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List ssnDescriptor = $convert.base64Decode('CgNTc24SEAoDc3NuGAEgASgJUgNzc24SGAoHc3NuSGFzaBgCIAEoCVIHc3NuSGFzaBIkCg1zc25JZGVudGlmaWVyGAMgASgJUg1zc25JZGVudGlmaWVyEjcKC3NzblByb3ZpZGVyGAQgASgLMhUuU29mdGNvcnAuU3NuUHJvdmlkZXJSC3NzblByb3ZpZGVy');
@$core.Deprecated('Use userDescriptor instead')
const User$json = const {
  '1': 'User',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    const {'1': 'password', '3': 3, '4': 1, '5': 9, '10': 'password'},
    const {'1': 'gender', '3': 4, '4': 1, '5': 14, '6': '.Softcorp.Gender', '10': 'gender'},
    const {'1': 'birthday', '3': 5, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'birthday'},
    const {'1': 'country', '3': 6, '4': 1, '5': 11, '6': '.Softcorp.CountryCode', '10': 'country'},
    const {'1': 'blocked', '3': 7, '4': 1, '5': 8, '10': 'blocked'},
    const {'1': 'preferredLanguage', '3': 8, '4': 1, '5': 11, '6': '.Softcorp.LanguageCode', '10': 'preferredLanguage'},
    const {'1': 'name', '3': 9, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'createdAt', '3': 10, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updatedAt', '3': 11, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'ssnId', '3': 12, '4': 1, '5': 9, '10': 'ssnId'},
    const {'1': 'ssnHash', '3': 13, '4': 1, '5': 9, '10': 'ssnHash'},
  ],
};

/// Descriptor for `User`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List userDescriptor = $convert.base64Decode('CgRVc2VyEg4KAmlkGAEgASgJUgJpZBIUCgVlbWFpbBgCIAEoCVIFZW1haWwSGgoIcGFzc3dvcmQYAyABKAlSCHBhc3N3b3JkEigKBmdlbmRlchgEIAEoDjIQLlNvZnRjb3JwLkdlbmRlclIGZ2VuZGVyEjYKCGJpcnRoZGF5GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIIYmlydGhkYXkSLwoHY291bnRyeRgGIAEoCzIVLlNvZnRjb3JwLkNvdW50cnlDb2RlUgdjb3VudHJ5EhgKB2Jsb2NrZWQYByABKAhSB2Jsb2NrZWQSRAoRcHJlZmVycmVkTGFuZ3VhZ2UYCCABKAsyFi5Tb2Z0Y29ycC5MYW5ndWFnZUNvZGVSEXByZWZlcnJlZExhbmd1YWdlEhIKBG5hbWUYCSABKAlSBG5hbWUSOAoJY3JlYXRlZEF0GAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJY3JlYXRlZEF0EjgKCXVwZGF0ZWRBdBgLIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBSCXVwZGF0ZWRBdBIUCgVzc25JZBgMIAEoCVIFc3NuSWQSGAoHc3NuSGFzaBgNIAEoCVIHc3NuSGFzaA==');
@$core.Deprecated('Use clientMetadataDescriptor instead')
const ClientMetadata$json = const {
  '1': 'ClientMetadata',
  '2': const [
    const {'1': 'isOpen', '3': 1, '4': 1, '5': 8, '10': 'isOpen'},
    const {'1': 'allowedEmails', '3': 21, '4': 3, '5': 9, '10': 'allowedEmails'},
    const {'1': 'about', '3': 3, '4': 1, '5': 9, '10': 'about'},
    const {'1': 'userOwnerId', '3': 4, '4': 1, '5': 9, '10': 'userOwnerId'},
    const {'1': 'ageLowerLimit', '3': 5, '4': 1, '5': 5, '10': 'ageLowerLimit'},
    const {'1': 'ageUpperLimit', '3': 6, '4': 1, '5': 5, '10': 'ageUpperLimit'},
    const {'1': 'allowedCountries', '3': 7, '4': 3, '5': 11, '6': '.Softcorp.CountryCode', '10': 'allowedCountries'},
  ],
};

/// Descriptor for `ClientMetadata`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List clientMetadataDescriptor = $convert.base64Decode('Cg5DbGllbnRNZXRhZGF0YRIWCgZpc09wZW4YASABKAhSBmlzT3BlbhIkCg1hbGxvd2VkRW1haWxzGBUgAygJUg1hbGxvd2VkRW1haWxzEhQKBWFib3V0GAMgASgJUgVhYm91dBIgCgt1c2VyT3duZXJJZBgEIAEoCVILdXNlck93bmVySWQSJAoNYWdlTG93ZXJMaW1pdBgFIAEoBVINYWdlTG93ZXJMaW1pdBIkCg1hZ2VVcHBlckxpbWl0GAYgASgFUg1hZ2VVcHBlckxpbWl0EkEKEGFsbG93ZWRDb3VudHJpZXMYByADKAsyFS5Tb2Z0Y29ycC5Db3VudHJ5Q29kZVIQYWxsb3dlZENvdW50cmllcw==');
@$core.Deprecated('Use clientAppDescriptor instead')
const ClientApp$json = const {
  '1': 'ClientApp',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'password', '3': 3, '4': 1, '5': 9, '10': 'password'},
    const {'1': 'contactEmail', '3': 4, '4': 1, '5': 9, '10': 'contactEmail'},
    const {'1': 'ownerId', '3': 5, '4': 1, '5': 9, '10': 'ownerId'},
    const {'1': 'appWebsite', '3': 6, '4': 1, '5': 9, '10': 'appWebsite'},
    const {'1': 'logoUrl', '3': 7, '4': 1, '5': 9, '10': 'logoUrl'},
    const {'1': 'termsUrl', '3': 8, '4': 1, '5': 9, '10': 'termsUrl'},
    const {'1': 'clientMetadata', '3': 9, '4': 1, '5': 11, '6': '.Softcorp.ClientMetadata', '10': 'clientMetadata'},
    const {'1': 'audience', '3': 10, '4': 3, '5': 9, '10': 'audience'},
    const {'1': 'scopes', '3': 11, '4': 3, '5': 11, '6': '.Softcorp.Scope', '10': 'scopes'},
    const {'1': 'grants', '3': 12, '4': 3, '5': 11, '6': '.Softcorp.Grant', '10': 'grants'},
    const {'1': 'responses', '3': 13, '4': 3, '5': 11, '6': '.Softcorp.OauthResponse', '10': 'responses'},
    const {'1': 'callbacks', '3': 14, '4': 3, '5': 9, '10': 'callbacks'},
    const {'1': 'createdAt', '3': 15, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'createdAt'},
    const {'1': 'updatedAt', '3': 16, '4': 1, '5': 11, '6': '.google.protobuf.Timestamp', '10': 'updatedAt'},
    const {'1': 'availableScopes', '3': 17, '4': 3, '5': 11, '6': '.Softcorp.Scope', '10': 'availableScopes'},
    const {'1': 'availableGrants', '3': 18, '4': 3, '5': 11, '6': '.Softcorp.Grant', '10': 'availableGrants'},
    const {'1': 'availableResponses', '3': 19, '4': 3, '5': 11, '6': '.Softcorp.OauthResponse', '10': 'availableResponses'},
    const {'1': 'availableCountries', '3': 20, '4': 3, '5': 11, '6': '.Softcorp.CountryCode', '10': 'availableCountries'},
    const {'1': 'advancedScopes', '3': 21, '4': 3, '5': 11, '6': '.Softcorp.Scope', '10': 'advancedScopes'},
    const {'1': 'collaborations', '3': 22, '4': 3, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaborations'},
  ],
};

/// Descriptor for `ClientApp`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List clientAppDescriptor = $convert.base64Decode('CglDbGllbnRBcHASDgoCaWQYASABKAlSAmlkEhIKBG5hbWUYAiABKAlSBG5hbWUSGgoIcGFzc3dvcmQYAyABKAlSCHBhc3N3b3JkEiIKDGNvbnRhY3RFbWFpbBgEIAEoCVIMY29udGFjdEVtYWlsEhgKB293bmVySWQYBSABKAlSB293bmVySWQSHgoKYXBwV2Vic2l0ZRgGIAEoCVIKYXBwV2Vic2l0ZRIYCgdsb2dvVXJsGAcgASgJUgdsb2dvVXJsEhoKCHRlcm1zVXJsGAggASgJUgh0ZXJtc1VybBJACg5jbGllbnRNZXRhZGF0YRgJIAEoCzIYLlNvZnRjb3JwLkNsaWVudE1ldGFkYXRhUg5jbGllbnRNZXRhZGF0YRIaCghhdWRpZW5jZRgKIAMoCVIIYXVkaWVuY2USJwoGc2NvcGVzGAsgAygLMg8uU29mdGNvcnAuU2NvcGVSBnNjb3BlcxInCgZncmFudHMYDCADKAsyDy5Tb2Z0Y29ycC5HcmFudFIGZ3JhbnRzEjUKCXJlc3BvbnNlcxgNIAMoCzIXLlNvZnRjb3JwLk9hdXRoUmVzcG9uc2VSCXJlc3BvbnNlcxIcCgljYWxsYmFja3MYDiADKAlSCWNhbGxiYWNrcxI4CgljcmVhdGVkQXQYDyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wUgljcmVhdGVkQXQSOAoJdXBkYXRlZEF0GBAgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcFIJdXBkYXRlZEF0EjkKD2F2YWlsYWJsZVNjb3BlcxgRIAMoCzIPLlNvZnRjb3JwLlNjb3BlUg9hdmFpbGFibGVTY29wZXMSOQoPYXZhaWxhYmxlR3JhbnRzGBIgAygLMg8uU29mdGNvcnAuR3JhbnRSD2F2YWlsYWJsZUdyYW50cxJHChJhdmFpbGFibGVSZXNwb25zZXMYEyADKAsyFy5Tb2Z0Y29ycC5PYXV0aFJlc3BvbnNlUhJhdmFpbGFibGVSZXNwb25zZXMSRQoSYXZhaWxhYmxlQ291bnRyaWVzGBQgAygLMhUuU29mdGNvcnAuQ291bnRyeUNvZGVSEmF2YWlsYWJsZUNvdW50cmllcxI3Cg5hZHZhbmNlZFNjb3BlcxgVIAMoCzIPLlNvZnRjb3JwLlNjb3BlUg5hZHZhbmNlZFNjb3BlcxI/Cg5jb2xsYWJvcmF0aW9ucxgWIAMoCzIXLlNvZnRjb3JwLkNvbGxhYm9yYXRpb25SDmNvbGxhYm9yYXRpb25z');
@$core.Deprecated('Use publicUserRequestDescriptor instead')
const PublicUserRequest$json = const {
  '1': 'PublicUserRequest',
  '2': const [
    const {'1': 'token', '3': 1, '4': 1, '5': 9, '10': 'token'},
  ],
};

/// Descriptor for `PublicUserRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List publicUserRequestDescriptor = $convert.base64Decode('ChFQdWJsaWNVc2VyUmVxdWVzdBIUCgV0b2tlbhgBIAEoCVIFdG9rZW4=');
@$core.Deprecated('Use publicUserResponseDescriptor instead')
const PublicUserResponse$json = const {
  '1': 'PublicUserResponse',
  '2': const [
    const {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.User', '10': 'user'},
  ],
};

/// Descriptor for `PublicUserResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List publicUserResponseDescriptor = $convert.base64Decode('ChJQdWJsaWNVc2VyUmVzcG9uc2USIgoEdXNlchgBIAEoCzIOLlNvZnRjb3JwLlVzZXJSBHVzZXI=');
@$core.Deprecated('Use adminUserRequestDescriptor instead')
const AdminUserRequest$json = const {
  '1': 'AdminUserRequest',
  '2': const [
    const {'1': 'userId', '3': 1, '4': 1, '5': 9, '10': 'userId'},
    const {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    const {'1': 'ids', '3': 3, '4': 3, '5': 9, '10': 'ids'},
    const {'1': 'emails', '3': 4, '4': 3, '5': 9, '10': 'emails'},
    const {'1': 'decrypt', '3': 5, '4': 1, '5': 8, '10': 'decrypt'},
    const {'1': 'user', '3': 6, '4': 1, '5': 11, '6': '.Softcorp.User', '10': 'user'},
    const {'1': 'overwriteId', '3': 7, '4': 1, '5': 8, '10': 'overwriteId'},
  ],
};

/// Descriptor for `AdminUserRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List adminUserRequestDescriptor = $convert.base64Decode('ChBBZG1pblVzZXJSZXF1ZXN0EhYKBnVzZXJJZBgBIAEoCVIGdXNlcklkEhQKBWVtYWlsGAIgASgJUgVlbWFpbBIQCgNpZHMYAyADKAlSA2lkcxIWCgZlbWFpbHMYBCADKAlSBmVtYWlscxIYCgdkZWNyeXB0GAUgASgIUgdkZWNyeXB0EiIKBHVzZXIYBiABKAsyDi5Tb2Z0Y29ycC5Vc2VyUgR1c2VyEiAKC292ZXJ3cml0ZUlkGAcgASgIUgtvdmVyd3JpdGVJZA==');
@$core.Deprecated('Use adminUserResponseDescriptor instead')
const AdminUserResponse$json = const {
  '1': 'AdminUserResponse',
  '2': const [
    const {'1': 'user', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.User', '10': 'user'},
    const {'1': 'users', '3': 2, '4': 3, '5': 11, '6': '.Softcorp.User', '10': 'users'},
  ],
};

/// Descriptor for `AdminUserResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List adminUserResponseDescriptor = $convert.base64Decode('ChFBZG1pblVzZXJSZXNwb25zZRIiCgR1c2VyGAEgASgLMg4uU29mdGNvcnAuVXNlclIEdXNlchIkCgV1c2VycxgCIAMoCzIOLlNvZnRjb3JwLlVzZXJSBXVzZXJz');
@$core.Deprecated('Use authPublicRequestDescriptor instead')
const AuthPublicRequest$json = const {
  '1': 'AuthPublicRequest',
  '2': const [
    const {'1': 'challenge', '3': 1, '4': 1, '5': 9, '10': 'challenge'},
    const {'1': 'email', '3': 2, '4': 1, '5': 9, '10': 'email'},
    const {'1': 'password', '3': 3, '4': 1, '5': 9, '10': 'password'},
    const {'1': 'gender', '3': 4, '4': 1, '5': 14, '6': '.Softcorp.Gender', '10': 'gender'},
    const {'1': 'consent', '3': 5, '4': 1, '5': 8, '10': 'consent'},
    const {'1': 'jwtIdToken', '3': 6, '4': 1, '5': 9, '10': 'jwtIdToken'},
    const {'1': 'ssnProvider', '3': 7, '4': 1, '5': 11, '6': '.Softcorp.SsnProvider', '10': 'ssnProvider'},
  ],
};

/// Descriptor for `AuthPublicRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List authPublicRequestDescriptor = $convert.base64Decode('ChFBdXRoUHVibGljUmVxdWVzdBIcCgljaGFsbGVuZ2UYASABKAlSCWNoYWxsZW5nZRIUCgVlbWFpbBgCIAEoCVIFZW1haWwSGgoIcGFzc3dvcmQYAyABKAlSCHBhc3N3b3JkEigKBmdlbmRlchgEIAEoDjIQLlNvZnRjb3JwLkdlbmRlclIGZ2VuZGVyEhgKB2NvbnNlbnQYBSABKAhSB2NvbnNlbnQSHgoKand0SWRUb2tlbhgGIAEoCVIKand0SWRUb2tlbhI3Cgtzc25Qcm92aWRlchgHIAEoCzIVLlNvZnRjb3JwLlNzblByb3ZpZGVyUgtzc25Qcm92aWRlcg==');
@$core.Deprecated('Use authPublicResponseDescriptor instead')
const AuthPublicResponse$json = const {
  '1': 'AuthPublicResponse',
  '2': const [
    const {'1': 'client', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.ClientApp', '10': 'client'},
    const {'1': 'nameOfUser', '3': 2, '4': 1, '5': 9, '10': 'nameOfUser'},
    const {'1': 'redirectAddr', '3': 3, '4': 1, '5': 9, '10': 'redirectAddr'},
  ],
};

/// Descriptor for `AuthPublicResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List authPublicResponseDescriptor = $convert.base64Decode('ChJBdXRoUHVibGljUmVzcG9uc2USKwoGY2xpZW50GAEgASgLMhMuU29mdGNvcnAuQ2xpZW50QXBwUgZjbGllbnQSHgoKbmFtZU9mVXNlchgCIAEoCVIKbmFtZU9mVXNlchIiCgxyZWRpcmVjdEFkZHIYAyABKAlSDHJlZGlyZWN0QWRkcg==');
@$core.Deprecated('Use connectAdminRequestDescriptor instead')
const ConnectAdminRequest$json = const {
  '1': 'ConnectAdminRequest',
  '2': const [
    const {'1': 'app', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.ClientApp', '10': 'app'},
    const {'1': 'overwriteId', '3': 2, '4': 1, '5': 8, '10': 'overwriteId'},
    const {'1': 'timespan', '3': 3, '4': 1, '5': 14, '6': '.Softcorp.Timespan', '10': 'timespan'},
  ],
};

/// Descriptor for `ConnectAdminRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List connectAdminRequestDescriptor = $convert.base64Decode('ChNDb25uZWN0QWRtaW5SZXF1ZXN0EiUKA2FwcBgBIAEoCzITLlNvZnRjb3JwLkNsaWVudEFwcFIDYXBwEiAKC292ZXJ3cml0ZUlkGAIgASgIUgtvdmVyd3JpdGVJZBIuCgh0aW1lc3BhbhgDIAEoDjISLlNvZnRjb3JwLlRpbWVzcGFuUgh0aW1lc3Bhbg==');
@$core.Deprecated('Use connectAdminResponseDescriptor instead')
const ConnectAdminResponse$json = const {
  '1': 'ConnectAdminResponse',
  '2': const [
    const {'1': 'app', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.ClientApp', '10': 'app'},
    const {'1': 'metrics', '3': 2, '4': 3, '5': 11, '6': '.Softcorp.ConnectAdminResponse.MetricsEntry', '10': 'metrics'},
  ],
  '3': const [ConnectAdminResponse_MetricsEntry$json],
};

@$core.Deprecated('Use connectAdminResponseDescriptor instead')
const ConnectAdminResponse_MetricsEntry$json = const {
  '1': 'MetricsEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 5, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 11, '6': '.Softcorp.ConnectMetrics', '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `ConnectAdminResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List connectAdminResponseDescriptor = $convert.base64Decode('ChRDb25uZWN0QWRtaW5SZXNwb25zZRIlCgNhcHAYASABKAsyEy5Tb2Z0Y29ycC5DbGllbnRBcHBSA2FwcBJFCgdtZXRyaWNzGAIgAygLMisuU29mdGNvcnAuQ29ubmVjdEFkbWluUmVzcG9uc2UuTWV0cmljc0VudHJ5UgdtZXRyaWNzGlQKDE1ldHJpY3NFbnRyeRIQCgNrZXkYASABKAVSA2tleRIuCgV2YWx1ZRgCIAEoCzIYLlNvZnRjb3JwLkNvbm5lY3RNZXRyaWNzUgV2YWx1ZToCOAE=');
@$core.Deprecated('Use publicDashboardRequestDescriptor instead')
const PublicDashboardRequest$json = const {
  '1': 'PublicDashboardRequest',
  '2': const [
    const {'1': 'accessToken', '3': 1, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'organization', '3': 2, '4': 1, '5': 11, '6': '.Softcorp.Organization', '10': 'organization'},
    const {'1': 'connectApp', '3': 3, '4': 1, '5': 11, '6': '.Softcorp.ClientApp', '10': 'connectApp'},
    const {'1': 'timespan', '3': 4, '4': 1, '5': 14, '6': '.Softcorp.Timespan', '10': 'timespan'},
    const {'1': 'collaboration', '3': 5, '4': 1, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaboration'},
    const {'1': 'secret', '3': 6, '4': 1, '5': 9, '10': 'secret'},
  ],
};

/// Descriptor for `PublicDashboardRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List publicDashboardRequestDescriptor = $convert.base64Decode('ChZQdWJsaWNEYXNoYm9hcmRSZXF1ZXN0EiAKC2FjY2Vzc1Rva2VuGAEgASgJUgthY2Nlc3NUb2tlbhI6Cgxvcmdhbml6YXRpb24YAiABKAsyFi5Tb2Z0Y29ycC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbhIzCgpjb25uZWN0QXBwGAMgASgLMhMuU29mdGNvcnAuQ2xpZW50QXBwUgpjb25uZWN0QXBwEi4KCHRpbWVzcGFuGAQgASgOMhIuU29mdGNvcnAuVGltZXNwYW5SCHRpbWVzcGFuEj0KDWNvbGxhYm9yYXRpb24YBSABKAsyFy5Tb2Z0Y29ycC5Db2xsYWJvcmF0aW9uUg1jb2xsYWJvcmF0aW9uEhYKBnNlY3JldBgGIAEoCVIGc2VjcmV0');
@$core.Deprecated('Use publicDashboardResponseDescriptor instead')
const PublicDashboardResponse$json = const {
  '1': 'PublicDashboardResponse',
  '2': const [
    const {'1': 'organization', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.Organization', '10': 'organization'},
    const {'1': 'organizations', '3': 2, '4': 3, '5': 11, '6': '.Softcorp.Organization', '10': 'organizations'},
    const {'1': 'collaboration', '3': 3, '4': 1, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaboration'},
    const {'1': 'collaborations', '3': 4, '4': 3, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaborations'},
    const {'1': 'secret', '3': 5, '4': 1, '5': 9, '10': 'secret'},
    const {'1': 'connectApp', '3': 6, '4': 1, '5': 11, '6': '.Softcorp.ClientApp', '10': 'connectApp'},
    const {'1': 'connectApps', '3': 7, '4': 3, '5': 11, '6': '.Softcorp.ClientApp', '10': 'connectApps'},
    const {'1': 'metrics', '3': 8, '4': 3, '5': 11, '6': '.Softcorp.PublicDashboardResponse.MetricsEntry', '10': 'metrics'},
  ],
  '3': const [PublicDashboardResponse_MetricsEntry$json],
};

@$core.Deprecated('Use publicDashboardResponseDescriptor instead')
const PublicDashboardResponse_MetricsEntry$json = const {
  '1': 'MetricsEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 5, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 11, '6': '.Softcorp.ConnectMetrics', '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `PublicDashboardResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List publicDashboardResponseDescriptor = $convert.base64Decode('ChdQdWJsaWNEYXNoYm9hcmRSZXNwb25zZRI6Cgxvcmdhbml6YXRpb24YASABKAsyFi5Tb2Z0Y29ycC5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbhI8Cg1vcmdhbml6YXRpb25zGAIgAygLMhYuU29mdGNvcnAuT3JnYW5pemF0aW9uUg1vcmdhbml6YXRpb25zEj0KDWNvbGxhYm9yYXRpb24YAyABKAsyFy5Tb2Z0Y29ycC5Db2xsYWJvcmF0aW9uUg1jb2xsYWJvcmF0aW9uEj8KDmNvbGxhYm9yYXRpb25zGAQgAygLMhcuU29mdGNvcnAuQ29sbGFib3JhdGlvblIOY29sbGFib3JhdGlvbnMSFgoGc2VjcmV0GAUgASgJUgZzZWNyZXQSMwoKY29ubmVjdEFwcBgGIAEoCzITLlNvZnRjb3JwLkNsaWVudEFwcFIKY29ubmVjdEFwcBI1Cgtjb25uZWN0QXBwcxgHIAMoCzITLlNvZnRjb3JwLkNsaWVudEFwcFILY29ubmVjdEFwcHMSSAoHbWV0cmljcxgIIAMoCzIuLlNvZnRjb3JwLlB1YmxpY0Rhc2hib2FyZFJlc3BvbnNlLk1ldHJpY3NFbnRyeVIHbWV0cmljcxpUCgxNZXRyaWNzRW50cnkSEAoDa2V5GAEgASgFUgNrZXkSLgoFdmFsdWUYAiABKAsyGC5Tb2Z0Y29ycC5Db25uZWN0TWV0cmljc1IFdmFsdWU6AjgB');
@$core.Deprecated('Use adminCollaborationRequestDescriptor instead')
const AdminCollaborationRequest$json = const {
  '1': 'AdminCollaborationRequest',
  '2': const [
    const {'1': 'organization', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.Organization', '10': 'organization'},
    const {'1': 'connectApp', '3': 2, '4': 1, '5': 11, '6': '.Softcorp.ClientApp', '10': 'connectApp'},
    const {'1': 'accessToken', '3': 3, '4': 1, '5': 9, '10': 'accessToken'},
    const {'1': 'collaboration', '3': 4, '4': 1, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaboration'},
    const {'1': 'acceptCollaboration', '3': 5, '4': 1, '5': 8, '10': 'acceptCollaboration'},
    const {'1': 'secret', '3': 6, '4': 1, '5': 9, '10': 'secret'},
    const {'1': 'onlyConnect', '3': 7, '4': 1, '5': 8, '10': 'onlyConnect'},
    const {'1': 'onlyOrganization', '3': 8, '4': 1, '5': 8, '10': 'onlyOrganization'},
    const {'1': 'onlyAccepted', '3': 9, '4': 1, '5': 8, '10': 'onlyAccepted'},
  ],
};

/// Descriptor for `AdminCollaborationRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List adminCollaborationRequestDescriptor = $convert.base64Decode('ChlBZG1pbkNvbGxhYm9yYXRpb25SZXF1ZXN0EjoKDG9yZ2FuaXphdGlvbhgBIAEoCzIWLlNvZnRjb3JwLk9yZ2FuaXphdGlvblIMb3JnYW5pemF0aW9uEjMKCmNvbm5lY3RBcHAYAiABKAsyEy5Tb2Z0Y29ycC5DbGllbnRBcHBSCmNvbm5lY3RBcHASIAoLYWNjZXNzVG9rZW4YAyABKAlSC2FjY2Vzc1Rva2VuEj0KDWNvbGxhYm9yYXRpb24YBCABKAsyFy5Tb2Z0Y29ycC5Db2xsYWJvcmF0aW9uUg1jb2xsYWJvcmF0aW9uEjAKE2FjY2VwdENvbGxhYm9yYXRpb24YBSABKAhSE2FjY2VwdENvbGxhYm9yYXRpb24SFgoGc2VjcmV0GAYgASgJUgZzZWNyZXQSIAoLb25seUNvbm5lY3QYByABKAhSC29ubHlDb25uZWN0EioKEG9ubHlPcmdhbml6YXRpb24YCCABKAhSEG9ubHlPcmdhbml6YXRpb24SIgoMb25seUFjY2VwdGVkGAkgASgIUgxvbmx5QWNjZXB0ZWQ=');
@$core.Deprecated('Use adminCollaborationResponseDescriptor instead')
const AdminCollaborationResponse$json = const {
  '1': 'AdminCollaborationResponse',
  '2': const [
    const {'1': 'collaboration', '3': 1, '4': 1, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaboration'},
    const {'1': 'collaborations', '3': 2, '4': 3, '5': 11, '6': '.Softcorp.Collaboration', '10': 'collaborations'},
    const {'1': 'secret', '3': 3, '4': 1, '5': 9, '10': 'secret'},
  ],
};

/// Descriptor for `AdminCollaborationResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List adminCollaborationResponseDescriptor = $convert.base64Decode('ChpBZG1pbkNvbGxhYm9yYXRpb25SZXNwb25zZRI9Cg1jb2xsYWJvcmF0aW9uGAEgASgLMhcuU29mdGNvcnAuQ29sbGFib3JhdGlvblINY29sbGFib3JhdGlvbhI/Cg5jb2xsYWJvcmF0aW9ucxgCIAMoCzIXLlNvZnRjb3JwLkNvbGxhYm9yYXRpb25SDmNvbGxhYm9yYXRpb25zEhYKBnNlY3JldBgDIAEoCVIGc2VjcmV0');
@$core.Deprecated('Use requestDescriptor instead')
const Request$json = const {
  '1': 'Request',
};

/// Descriptor for `Request`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List requestDescriptor = $convert.base64Decode('CgdSZXF1ZXN0');
@$core.Deprecated('Use responseDescriptor instead')
const Response$json = const {
  '1': 'Response',
  '2': const [
    const {'1': 'msg', '3': 1, '4': 1, '5': 9, '10': 'msg'},
  ],
};

/// Descriptor for `Response`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List responseDescriptor = $convert.base64Decode('CghSZXNwb25zZRIQCgNtc2cYASABKAlSA21zZw==');
