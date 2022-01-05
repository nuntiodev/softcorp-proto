import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ConnectMetric extends jspb.Message {
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): ConnectMetric;
  hasDate(): boolean;
  clearDate(): ConnectMetric;

  getNumberofrequests(): number;
  setNumberofrequests(value: number): ConnectMetric;

  getNumberofconsenttrue(): number;
  setNumberofconsenttrue(value: number): ConnectMetric;

  getNumberofconsentfalse(): number;
  setNumberofconsentfalse(value: number): ConnectMetric;

  getNumberofagegroup1to12(): number;
  setNumberofagegroup1to12(value: number): ConnectMetric;

  getNumberofagegroup13to19(): number;
  setNumberofagegroup13to19(value: number): ConnectMetric;

  getNumberofagegroup20to29(): number;
  setNumberofagegroup20to29(value: number): ConnectMetric;

  getNumberofagegroup30to39(): number;
  setNumberofagegroup30to39(value: number): ConnectMetric;

  getNumberofagegroup40to49(): number;
  setNumberofagegroup40to49(value: number): ConnectMetric;

  getNumberofagegroup50to59(): number;
  setNumberofagegroup50to59(value: number): ConnectMetric;

  getNumberofagegroup60to69(): number;
  setNumberofagegroup60to69(value: number): ConnectMetric;

  getNumberofagegroup70to79(): number;
  setNumberofagegroup70to79(value: number): ConnectMetric;

  getNumberofagegroup80to89(): number;
  setNumberofagegroup80to89(value: number): ConnectMetric;

  getNumberofagegroup90to99(): number;
  setNumberofagegroup90to99(value: number): ConnectMetric;

  getNumberofagegroup100to120(): number;
  setNumberofagegroup100to120(value: number): ConnectMetric;

  getNumberoffemales(): number;
  setNumberoffemales(value: number): ConnectMetric;

  getNumberofmales(): number;
  setNumberofmales(value: number): ConnectMetric;

  getNumberofothers(): number;
  setNumberofothers(value: number): ConnectMetric;

  getAmountfromdk(): number;
  setAmountfromdk(value: number): ConnectMetric;

  getAmountfromno(): number;
  setAmountfromno(value: number): ConnectMetric;

  getAmountfromde(): number;
  setAmountfromde(value: number): ConnectMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectMetric.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectMetric): ConnectMetric.AsObject;
  static serializeBinaryToWriter(message: ConnectMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectMetric;
  static deserializeBinaryFromReader(message: ConnectMetric, reader: jspb.BinaryReader): ConnectMetric;
}

export namespace ConnectMetric {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numberofrequests: number,
    numberofconsenttrue: number,
    numberofconsentfalse: number,
    numberofagegroup1to12: number,
    numberofagegroup13to19: number,
    numberofagegroup20to29: number,
    numberofagegroup30to39: number,
    numberofagegroup40to49: number,
    numberofagegroup50to59: number,
    numberofagegroup60to69: number,
    numberofagegroup70to79: number,
    numberofagegroup80to89: number,
    numberofagegroup90to99: number,
    numberofagegroup100to120: number,
    numberoffemales: number,
    numberofmales: number,
    numberofothers: number,
    amountfromdk: number,
    amountfromno: number,
    amountfromde: number,
  }
}

export class ConnectMetrics extends jspb.Message {
  getMetricsList(): Array<ConnectMetric>;
  setMetricsList(value: Array<ConnectMetric>): ConnectMetrics;
  clearMetricsList(): ConnectMetrics;
  addMetrics(value?: ConnectMetric, index?: number): ConnectMetric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectMetrics): ConnectMetrics.AsObject;
  static serializeBinaryToWriter(message: ConnectMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectMetrics;
  static deserializeBinaryFromReader(message: ConnectMetrics, reader: jspb.BinaryReader): ConnectMetrics;
}

export namespace ConnectMetrics {
  export type AsObject = {
    metricsList: Array<ConnectMetric.AsObject>,
  }
}

export class Collaboration extends jspb.Message {
  getId(): string;
  setId(value: string): Collaboration;

  getEmail(): string;
  setEmail(value: string): Collaboration;

  getUserid(): string;
  setUserid(value: string): Collaboration;

  getObjectid(): string;
  setObjectid(value: string): Collaboration;

  getCollaborationtype(): CollaborationType;
  setCollaborationtype(value: CollaborationType): Collaboration;

  getAccepted(): boolean;
  setAccepted(value: boolean): Collaboration;

  getHashedcode(): string;
  setHashedcode(value: string): Collaboration;

  getRole(): CollaborationRole;
  setRole(value: CollaborationRole): Collaboration;

  getSendat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSendat(value?: google_protobuf_timestamp_pb.Timestamp): Collaboration;
  hasSendat(): boolean;
  clearSendat(): Collaboration;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Collaboration;
  hasUpdatedat(): boolean;
  clearUpdatedat(): Collaboration;

  getAcceptedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAcceptedat(value?: google_protobuf_timestamp_pb.Timestamp): Collaboration;
  hasAcceptedat(): boolean;
  clearAcceptedat(): Collaboration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collaboration.AsObject;
  static toObject(includeInstance: boolean, msg: Collaboration): Collaboration.AsObject;
  static serializeBinaryToWriter(message: Collaboration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collaboration;
  static deserializeBinaryFromReader(message: Collaboration, reader: jspb.BinaryReader): Collaboration;
}

export namespace Collaboration {
  export type AsObject = {
    id: string,
    email: string,
    userid: string,
    objectid: string,
    collaborationtype: CollaborationType,
    accepted: boolean,
    hashedcode: string,
    role: CollaborationRole,
    sendat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    acceptedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): Organization;

  getOwnerid(): string;
  setOwnerid(value: string): Organization;

  getOrganizationname(): string;
  setOrganizationname(value: string): Organization;

  getContactemail(): string;
  setContactemail(value: string): Organization;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Organization;
  hasCreatedat(): boolean;
  clearCreatedat(): Organization;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Organization;
  hasUpdatedat(): boolean;
  clearUpdatedat(): Organization;

  getIsowner(): boolean;
  setIsowner(value: boolean): Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    ownerid: string,
    organizationname: string,
    contactemail: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isowner: boolean,
  }
}

export class Scope extends jspb.Message {
  getScopetype(): ScopeType;
  setScopetype(value: ScopeType): Scope;

  getReadid(): boolean;
  setReadid(value: boolean): Scope;

  getReademail(): boolean;
  setReademail(value: boolean): Scope;

  getReadgender(): boolean;
  setReadgender(value: boolean): Scope;

  getReadcreatedat(): boolean;
  setReadcreatedat(value: boolean): Scope;

  getOfflineaccess(): boolean;
  setOfflineaccess(value: boolean): Scope;

  getReadname(): boolean;
  setReadname(value: boolean): Scope;

  getReadbirthday(): boolean;
  setReadbirthday(value: boolean): Scope;

  getReadcountry(): boolean;
  setReadcountry(value: boolean): Scope;

  getReadpreflangauge(): boolean;
  setReadpreflangauge(value: boolean): Scope;

  getName(): string;
  setName(value: string): Scope;

  getKey(): string;
  setKey(value: string): Scope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scope.AsObject;
  static toObject(includeInstance: boolean, msg: Scope): Scope.AsObject;
  static serializeBinaryToWriter(message: Scope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scope;
  static deserializeBinaryFromReader(message: Scope, reader: jspb.BinaryReader): Scope;
}

export namespace Scope {
  export type AsObject = {
    scopetype: ScopeType,
    readid: boolean,
    reademail: boolean,
    readgender: boolean,
    readcreatedat: boolean,
    offlineaccess: boolean,
    readname: boolean,
    readbirthday: boolean,
    readcountry: boolean,
    readpreflangauge: boolean,
    name: string,
    key: string,
  }
}

export class Grant extends jspb.Message {
  getGranttype(): GrantType;
  setGranttype(value: GrantType): Grant;

  getName(): string;
  setName(value: string): Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    granttype: GrantType,
    name: string,
  }
}

export class OauthResponse extends jspb.Message {
  getResponsetype(): ResponeType;
  setResponsetype(value: ResponeType): OauthResponse;

  getName(): string;
  setName(value: string): OauthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OauthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OauthResponse): OauthResponse.AsObject;
  static serializeBinaryToWriter(message: OauthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OauthResponse;
  static deserializeBinaryFromReader(message: OauthResponse, reader: jspb.BinaryReader): OauthResponse;
}

export namespace OauthResponse {
  export type AsObject = {
    responsetype: ResponeType,
    name: string,
  }
}

export class LanguageCode extends jspb.Message {
  getLanguagecodetype(): LanguageCodeType;
  setLanguagecodetype(value: LanguageCodeType): LanguageCode;

  getName(): string;
  setName(value: string): LanguageCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageCode.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageCode): LanguageCode.AsObject;
  static serializeBinaryToWriter(message: LanguageCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageCode;
  static deserializeBinaryFromReader(message: LanguageCode, reader: jspb.BinaryReader): LanguageCode;
}

export namespace LanguageCode {
  export type AsObject = {
    languagecodetype: LanguageCodeType,
    name: string,
  }
}

export class CountryCode extends jspb.Message {
  getCountrycodetype(): CountryCodeType;
  setCountrycodetype(value: CountryCodeType): CountryCode;

  getName(): string;
  setName(value: string): CountryCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryCode.AsObject;
  static toObject(includeInstance: boolean, msg: CountryCode): CountryCode.AsObject;
  static serializeBinaryToWriter(message: CountryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryCode;
  static deserializeBinaryFromReader(message: CountryCode, reader: jspb.BinaryReader): CountryCode;
}

export namespace CountryCode {
  export type AsObject = {
    countrycodetype: CountryCodeType,
    name: string,
  }
}

export class SsnProvider extends jspb.Message {
  getSsnprovidertype(): SsnProviderType;
  setSsnprovidertype(value: SsnProviderType): SsnProvider;

  getName(): string;
  setName(value: string): SsnProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SsnProvider.AsObject;
  static toObject(includeInstance: boolean, msg: SsnProvider): SsnProvider.AsObject;
  static serializeBinaryToWriter(message: SsnProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SsnProvider;
  static deserializeBinaryFromReader(message: SsnProvider, reader: jspb.BinaryReader): SsnProvider;
}

export namespace SsnProvider {
  export type AsObject = {
    ssnprovidertype: SsnProviderType,
    name: string,
  }
}

export class Ssn extends jspb.Message {
  getSsn(): string;
  setSsn(value: string): Ssn;

  getSsnhash(): string;
  setSsnhash(value: string): Ssn;

  getSsnidentifier(): string;
  setSsnidentifier(value: string): Ssn;

  getSsnprovider(): SsnProvider | undefined;
  setSsnprovider(value?: SsnProvider): Ssn;
  hasSsnprovider(): boolean;
  clearSsnprovider(): Ssn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ssn.AsObject;
  static toObject(includeInstance: boolean, msg: Ssn): Ssn.AsObject;
  static serializeBinaryToWriter(message: Ssn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ssn;
  static deserializeBinaryFromReader(message: Ssn, reader: jspb.BinaryReader): Ssn;
}

export namespace Ssn {
  export type AsObject = {
    ssn: string,
    ssnhash: string,
    ssnidentifier: string,
    ssnprovider?: SsnProvider.AsObject,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getPassword(): string;
  setPassword(value: string): User;

  getGender(): Gender;
  setGender(value: Gender): User;

  getBirthday(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setBirthday(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasBirthday(): boolean;
  clearBirthday(): User;

  getCountry(): CountryCode | undefined;
  setCountry(value?: CountryCode): User;
  hasCountry(): boolean;
  clearCountry(): User;

  getBlocked(): boolean;
  setBlocked(value: boolean): User;

  getPreferredlanguage(): LanguageCode | undefined;
  setPreferredlanguage(value?: LanguageCode): User;
  hasPreferredlanguage(): boolean;
  clearPreferredlanguage(): User;

  getName(): string;
  setName(value: string): User;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedat(): boolean;
  clearCreatedat(): User;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasUpdatedat(): boolean;
  clearUpdatedat(): User;

  getSsnid(): string;
  setSsnid(value: string): User;

  getSsnhash(): string;
  setSsnhash(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    email: string,
    password: string,
    gender: Gender,
    birthday?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    country?: CountryCode.AsObject,
    blocked: boolean,
    preferredlanguage?: LanguageCode.AsObject,
    name: string,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ssnid: string,
    ssnhash: string,
  }
}

export class ClientMetadata extends jspb.Message {
  getIsopen(): boolean;
  setIsopen(value: boolean): ClientMetadata;

  getAllowedemailsList(): Array<string>;
  setAllowedemailsList(value: Array<string>): ClientMetadata;
  clearAllowedemailsList(): ClientMetadata;
  addAllowedemails(value: string, index?: number): ClientMetadata;

  getAbout(): string;
  setAbout(value: string): ClientMetadata;

  getUserownerid(): string;
  setUserownerid(value: string): ClientMetadata;

  getAgelowerlimit(): number;
  setAgelowerlimit(value: number): ClientMetadata;

  getAgeupperlimit(): number;
  setAgeupperlimit(value: number): ClientMetadata;

  getAllowedcountriesList(): Array<CountryCode>;
  setAllowedcountriesList(value: Array<CountryCode>): ClientMetadata;
  clearAllowedcountriesList(): ClientMetadata;
  addAllowedcountries(value?: CountryCode, index?: number): CountryCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMetadata): ClientMetadata.AsObject;
  static serializeBinaryToWriter(message: ClientMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMetadata;
  static deserializeBinaryFromReader(message: ClientMetadata, reader: jspb.BinaryReader): ClientMetadata;
}

export namespace ClientMetadata {
  export type AsObject = {
    isopen: boolean,
    allowedemailsList: Array<string>,
    about: string,
    userownerid: string,
    agelowerlimit: number,
    ageupperlimit: number,
    allowedcountriesList: Array<CountryCode.AsObject>,
  }
}

export class ClientApp extends jspb.Message {
  getId(): string;
  setId(value: string): ClientApp;

  getName(): string;
  setName(value: string): ClientApp;

  getPassword(): string;
  setPassword(value: string): ClientApp;

  getContactemail(): string;
  setContactemail(value: string): ClientApp;

  getOwnerid(): string;
  setOwnerid(value: string): ClientApp;

  getAppwebsite(): string;
  setAppwebsite(value: string): ClientApp;

  getLogourl(): string;
  setLogourl(value: string): ClientApp;

  getTermsurl(): string;
  setTermsurl(value: string): ClientApp;

  getClientmetadata(): ClientMetadata | undefined;
  setClientmetadata(value?: ClientMetadata): ClientApp;
  hasClientmetadata(): boolean;
  clearClientmetadata(): ClientApp;

  getAudienceList(): Array<string>;
  setAudienceList(value: Array<string>): ClientApp;
  clearAudienceList(): ClientApp;
  addAudience(value: string, index?: number): ClientApp;

  getScopesList(): Array<Scope>;
  setScopesList(value: Array<Scope>): ClientApp;
  clearScopesList(): ClientApp;
  addScopes(value?: Scope, index?: number): Scope;

  getGrantsList(): Array<Grant>;
  setGrantsList(value: Array<Grant>): ClientApp;
  clearGrantsList(): ClientApp;
  addGrants(value?: Grant, index?: number): Grant;

  getResponsesList(): Array<OauthResponse>;
  setResponsesList(value: Array<OauthResponse>): ClientApp;
  clearResponsesList(): ClientApp;
  addResponses(value?: OauthResponse, index?: number): OauthResponse;

  getCallbacksList(): Array<string>;
  setCallbacksList(value: Array<string>): ClientApp;
  clearCallbacksList(): ClientApp;
  addCallbacks(value: string, index?: number): ClientApp;

  getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): ClientApp;
  hasCreatedat(): boolean;
  clearCreatedat(): ClientApp;

  getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): ClientApp;
  hasUpdatedat(): boolean;
  clearUpdatedat(): ClientApp;

  getAvailablescopesList(): Array<Scope>;
  setAvailablescopesList(value: Array<Scope>): ClientApp;
  clearAvailablescopesList(): ClientApp;
  addAvailablescopes(value?: Scope, index?: number): Scope;

  getAvailablegrantsList(): Array<Grant>;
  setAvailablegrantsList(value: Array<Grant>): ClientApp;
  clearAvailablegrantsList(): ClientApp;
  addAvailablegrants(value?: Grant, index?: number): Grant;

  getAvailableresponsesList(): Array<OauthResponse>;
  setAvailableresponsesList(value: Array<OauthResponse>): ClientApp;
  clearAvailableresponsesList(): ClientApp;
  addAvailableresponses(value?: OauthResponse, index?: number): OauthResponse;

  getAvailablecountriesList(): Array<CountryCode>;
  setAvailablecountriesList(value: Array<CountryCode>): ClientApp;
  clearAvailablecountriesList(): ClientApp;
  addAvailablecountries(value?: CountryCode, index?: number): CountryCode;

  getAdvancedscopesList(): Array<Scope>;
  setAdvancedscopesList(value: Array<Scope>): ClientApp;
  clearAdvancedscopesList(): ClientApp;
  addAdvancedscopes(value?: Scope, index?: number): Scope;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientApp.AsObject;
  static toObject(includeInstance: boolean, msg: ClientApp): ClientApp.AsObject;
  static serializeBinaryToWriter(message: ClientApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientApp;
  static deserializeBinaryFromReader(message: ClientApp, reader: jspb.BinaryReader): ClientApp;
}

export namespace ClientApp {
  export type AsObject = {
    id: string,
    name: string,
    password: string,
    contactemail: string,
    ownerid: string,
    appwebsite: string,
    logourl: string,
    termsurl: string,
    clientmetadata?: ClientMetadata.AsObject,
    audienceList: Array<string>,
    scopesList: Array<Scope.AsObject>,
    grantsList: Array<Grant.AsObject>,
    responsesList: Array<OauthResponse.AsObject>,
    callbacksList: Array<string>,
    createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    availablescopesList: Array<Scope.AsObject>,
    availablegrantsList: Array<Grant.AsObject>,
    availableresponsesList: Array<OauthResponse.AsObject>,
    availablecountriesList: Array<CountryCode.AsObject>,
    advancedscopesList: Array<Scope.AsObject>,
  }
}

export class PublicUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): PublicUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicUserRequest): PublicUserRequest.AsObject;
  static serializeBinaryToWriter(message: PublicUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicUserRequest;
  static deserializeBinaryFromReader(message: PublicUserRequest, reader: jspb.BinaryReader): PublicUserRequest;
}

export namespace PublicUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class PublicUserResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): PublicUserResponse;
  hasUser(): boolean;
  clearUser(): PublicUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicUserResponse): PublicUserResponse.AsObject;
  static serializeBinaryToWriter(message: PublicUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicUserResponse;
  static deserializeBinaryFromReader(message: PublicUserResponse, reader: jspb.BinaryReader): PublicUserResponse;
}

export namespace PublicUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class AdminUserRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): AdminUserRequest;

  getEmail(): string;
  setEmail(value: string): AdminUserRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): AdminUserRequest;
  clearIdsList(): AdminUserRequest;
  addIds(value: string, index?: number): AdminUserRequest;

  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): AdminUserRequest;
  clearEmailsList(): AdminUserRequest;
  addEmails(value: string, index?: number): AdminUserRequest;

  getDecrypt(): boolean;
  setDecrypt(value: boolean): AdminUserRequest;

  getUser(): User | undefined;
  setUser(value?: User): AdminUserRequest;
  hasUser(): boolean;
  clearUser(): AdminUserRequest;

  getOverwriteid(): boolean;
  setOverwriteid(value: boolean): AdminUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUserRequest): AdminUserRequest.AsObject;
  static serializeBinaryToWriter(message: AdminUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUserRequest;
  static deserializeBinaryFromReader(message: AdminUserRequest, reader: jspb.BinaryReader): AdminUserRequest;
}

export namespace AdminUserRequest {
  export type AsObject = {
    userid: string,
    email: string,
    idsList: Array<string>,
    emailsList: Array<string>,
    decrypt: boolean,
    user?: User.AsObject,
    overwriteid: boolean,
  }
}

export class AdminUserResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): AdminUserResponse;
  hasUser(): boolean;
  clearUser(): AdminUserResponse;

  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): AdminUserResponse;
  clearUsersList(): AdminUserResponse;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUserResponse): AdminUserResponse.AsObject;
  static serializeBinaryToWriter(message: AdminUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUserResponse;
  static deserializeBinaryFromReader(message: AdminUserResponse, reader: jspb.BinaryReader): AdminUserResponse;
}

export namespace AdminUserResponse {
  export type AsObject = {
    user?: User.AsObject,
    usersList: Array<User.AsObject>,
  }
}

export class AuthPublicRequest extends jspb.Message {
  getChallenge(): string;
  setChallenge(value: string): AuthPublicRequest;

  getEmail(): string;
  setEmail(value: string): AuthPublicRequest;

  getPassword(): string;
  setPassword(value: string): AuthPublicRequest;

  getGender(): Gender;
  setGender(value: Gender): AuthPublicRequest;

  getConsent(): boolean;
  setConsent(value: boolean): AuthPublicRequest;

  getJwtidtoken(): string;
  setJwtidtoken(value: string): AuthPublicRequest;

  getSsnprovider(): SsnProvider | undefined;
  setSsnprovider(value?: SsnProvider): AuthPublicRequest;
  hasSsnprovider(): boolean;
  clearSsnprovider(): AuthPublicRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthPublicRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthPublicRequest): AuthPublicRequest.AsObject;
  static serializeBinaryToWriter(message: AuthPublicRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthPublicRequest;
  static deserializeBinaryFromReader(message: AuthPublicRequest, reader: jspb.BinaryReader): AuthPublicRequest;
}

export namespace AuthPublicRequest {
  export type AsObject = {
    challenge: string,
    email: string,
    password: string,
    gender: Gender,
    consent: boolean,
    jwtidtoken: string,
    ssnprovider?: SsnProvider.AsObject,
  }
}

export class AuthPublicResponse extends jspb.Message {
  getClient(): ClientApp | undefined;
  setClient(value?: ClientApp): AuthPublicResponse;
  hasClient(): boolean;
  clearClient(): AuthPublicResponse;

  getNameofuser(): string;
  setNameofuser(value: string): AuthPublicResponse;

  getRedirectaddr(): string;
  setRedirectaddr(value: string): AuthPublicResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthPublicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthPublicResponse): AuthPublicResponse.AsObject;
  static serializeBinaryToWriter(message: AuthPublicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthPublicResponse;
  static deserializeBinaryFromReader(message: AuthPublicResponse, reader: jspb.BinaryReader): AuthPublicResponse;
}

export namespace AuthPublicResponse {
  export type AsObject = {
    client?: ClientApp.AsObject,
    nameofuser: string,
    redirectaddr: string,
  }
}

export class ConnectAdminRequest extends jspb.Message {
  getApp(): ClientApp | undefined;
  setApp(value?: ClientApp): ConnectAdminRequest;
  hasApp(): boolean;
  clearApp(): ConnectAdminRequest;

  getOverwriteid(): boolean;
  setOverwriteid(value: boolean): ConnectAdminRequest;

  getTimespan(): Timespan;
  setTimespan(value: Timespan): ConnectAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectAdminRequest): ConnectAdminRequest.AsObject;
  static serializeBinaryToWriter(message: ConnectAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectAdminRequest;
  static deserializeBinaryFromReader(message: ConnectAdminRequest, reader: jspb.BinaryReader): ConnectAdminRequest;
}

export namespace ConnectAdminRequest {
  export type AsObject = {
    app?: ClientApp.AsObject,
    overwriteid: boolean,
    timespan: Timespan,
  }
}

export class ConnectAdminResponse extends jspb.Message {
  getApp(): ClientApp | undefined;
  setApp(value?: ClientApp): ConnectAdminResponse;
  hasApp(): boolean;
  clearApp(): ConnectAdminResponse;

  getMetricsMap(): jspb.Map<number, ConnectMetrics>;
  clearMetricsMap(): ConnectAdminResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectAdminResponse): ConnectAdminResponse.AsObject;
  static serializeBinaryToWriter(message: ConnectAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectAdminResponse;
  static deserializeBinaryFromReader(message: ConnectAdminResponse, reader: jspb.BinaryReader): ConnectAdminResponse;
}

export namespace ConnectAdminResponse {
  export type AsObject = {
    app?: ClientApp.AsObject,
    metricsMap: Array<[number, ConnectMetrics.AsObject]>,
  }
}

export class PublicDashboardRequest extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): PublicDashboardRequest;

  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): PublicDashboardRequest;
  hasOrganization(): boolean;
  clearOrganization(): PublicDashboardRequest;

  getConnectapp(): ClientApp | undefined;
  setConnectapp(value?: ClientApp): PublicDashboardRequest;
  hasConnectapp(): boolean;
  clearConnectapp(): PublicDashboardRequest;

  getTimespan(): Timespan;
  setTimespan(value: Timespan): PublicDashboardRequest;

  getCollaboration(): Collaboration | undefined;
  setCollaboration(value?: Collaboration): PublicDashboardRequest;
  hasCollaboration(): boolean;
  clearCollaboration(): PublicDashboardRequest;

  getSecret(): string;
  setSecret(value: string): PublicDashboardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDashboardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDashboardRequest): PublicDashboardRequest.AsObject;
  static serializeBinaryToWriter(message: PublicDashboardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDashboardRequest;
  static deserializeBinaryFromReader(message: PublicDashboardRequest, reader: jspb.BinaryReader): PublicDashboardRequest;
}

export namespace PublicDashboardRequest {
  export type AsObject = {
    accesstoken: string,
    organization?: Organization.AsObject,
    connectapp?: ClientApp.AsObject,
    timespan: Timespan,
    collaboration?: Collaboration.AsObject,
    secret: string,
  }
}

export class PublicDashboardResponse extends jspb.Message {
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): PublicDashboardResponse;
  hasOrganization(): boolean;
  clearOrganization(): PublicDashboardResponse;

  getOrganizationsList(): Array<Organization>;
  setOrganizationsList(value: Array<Organization>): PublicDashboardResponse;
  clearOrganizationsList(): PublicDashboardResponse;
  addOrganizations(value?: Organization, index?: number): Organization;

  getCollaboration(): Collaboration | undefined;
  setCollaboration(value?: Collaboration): PublicDashboardResponse;
  hasCollaboration(): boolean;
  clearCollaboration(): PublicDashboardResponse;

  getCollaborationsList(): Array<Collaboration>;
  setCollaborationsList(value: Array<Collaboration>): PublicDashboardResponse;
  clearCollaborationsList(): PublicDashboardResponse;
  addCollaborations(value?: Collaboration, index?: number): Collaboration;

  getSecret(): string;
  setSecret(value: string): PublicDashboardResponse;

  getConnectapp(): ClientApp | undefined;
  setConnectapp(value?: ClientApp): PublicDashboardResponse;
  hasConnectapp(): boolean;
  clearConnectapp(): PublicDashboardResponse;

  getConnectappsList(): Array<ClientApp>;
  setConnectappsList(value: Array<ClientApp>): PublicDashboardResponse;
  clearConnectappsList(): PublicDashboardResponse;
  addConnectapps(value?: ClientApp, index?: number): ClientApp;

  getMetricsMap(): jspb.Map<number, ConnectMetrics>;
  clearMetricsMap(): PublicDashboardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDashboardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDashboardResponse): PublicDashboardResponse.AsObject;
  static serializeBinaryToWriter(message: PublicDashboardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDashboardResponse;
  static deserializeBinaryFromReader(message: PublicDashboardResponse, reader: jspb.BinaryReader): PublicDashboardResponse;
}

export namespace PublicDashboardResponse {
  export type AsObject = {
    organization?: Organization.AsObject,
    organizationsList: Array<Organization.AsObject>,
    collaboration?: Collaboration.AsObject,
    collaborationsList: Array<Collaboration.AsObject>,
    secret: string,
    connectapp?: ClientApp.AsObject,
    connectappsList: Array<ClientApp.AsObject>,
    metricsMap: Array<[number, ConnectMetrics.AsObject]>,
  }
}

export class AdminCollaborationRequest extends jspb.Message {
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): AdminCollaborationRequest;
  hasOrganization(): boolean;
  clearOrganization(): AdminCollaborationRequest;

  getConnectapp(): ClientApp | undefined;
  setConnectapp(value?: ClientApp): AdminCollaborationRequest;
  hasConnectapp(): boolean;
  clearConnectapp(): AdminCollaborationRequest;

  getAccesstoken(): string;
  setAccesstoken(value: string): AdminCollaborationRequest;

  getCollaboration(): Collaboration | undefined;
  setCollaboration(value?: Collaboration): AdminCollaborationRequest;
  hasCollaboration(): boolean;
  clearCollaboration(): AdminCollaborationRequest;

  getAcceptcollaboration(): boolean;
  setAcceptcollaboration(value: boolean): AdminCollaborationRequest;

  getSecret(): string;
  setSecret(value: string): AdminCollaborationRequest;

  getOnlyconnect(): boolean;
  setOnlyconnect(value: boolean): AdminCollaborationRequest;

  getOnlyorganization(): boolean;
  setOnlyorganization(value: boolean): AdminCollaborationRequest;

  getOnlyaccepted(): boolean;
  setOnlyaccepted(value: boolean): AdminCollaborationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCollaborationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCollaborationRequest): AdminCollaborationRequest.AsObject;
  static serializeBinaryToWriter(message: AdminCollaborationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCollaborationRequest;
  static deserializeBinaryFromReader(message: AdminCollaborationRequest, reader: jspb.BinaryReader): AdminCollaborationRequest;
}

export namespace AdminCollaborationRequest {
  export type AsObject = {
    organization?: Organization.AsObject,
    connectapp?: ClientApp.AsObject,
    accesstoken: string,
    collaboration?: Collaboration.AsObject,
    acceptcollaboration: boolean,
    secret: string,
    onlyconnect: boolean,
    onlyorganization: boolean,
    onlyaccepted: boolean,
  }
}

export class AdminCollaborationResponse extends jspb.Message {
  getCollaboration(): Collaboration | undefined;
  setCollaboration(value?: Collaboration): AdminCollaborationResponse;
  hasCollaboration(): boolean;
  clearCollaboration(): AdminCollaborationResponse;

  getCollaborationsList(): Array<Collaboration>;
  setCollaborationsList(value: Array<Collaboration>): AdminCollaborationResponse;
  clearCollaborationsList(): AdminCollaborationResponse;
  addCollaborations(value?: Collaboration, index?: number): Collaboration;

  getSecret(): string;
  setSecret(value: string): AdminCollaborationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCollaborationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCollaborationResponse): AdminCollaborationResponse.AsObject;
  static serializeBinaryToWriter(message: AdminCollaborationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCollaborationResponse;
  static deserializeBinaryFromReader(message: AdminCollaborationResponse, reader: jspb.BinaryReader): AdminCollaborationResponse;
}

export namespace AdminCollaborationResponse {
  export type AsObject = {
    collaboration?: Collaboration.AsObject,
    collaborationsList: Array<Collaboration.AsObject>,
    secret: string,
  }
}

export class Request extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
  }
}

export class Response extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    msg: string,
  }
}

export enum Timespan { 
  INVALID_TIMESPAN = 0,
  TIMESPAN_DAY = 1,
  TIMESPAN_WEEK = 2,
  TIMESPAN_MONTH = 3,
  TIMESPAN_YEAR = 4,
  TIMESPAN_ALL = 5,
}
export enum Gender { 
  INVALID_GENDER = 0,
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}
export enum ScopeType { 
  INVALID_SCOPE = 0,
  DEFAULT_SCOPE = 1,
  OFFLINE_ACCESS_SCOPE = 2,
  GENDER_SCOPE = 3,
  NAME_SCOPE = 4,
  BIRTHDAY_SCOPE = 5,
  PREFERRED_LANGUAGE_SCOPE = 6,
  COUNTRY_SCOPE = 7,
}
export enum AgeGroup { 
  AGE_GROUP_INVALID = 0,
  AGE_GROUP_1_12 = 1,
  AGE_GROUP_13_19 = 2,
  AGE_GROUP_20_29 = 3,
  AGE_GROUP_30_39 = 4,
  AGE_GROUP_40_49 = 5,
  AGE_GROUP_50_59 = 6,
  AGE_GROUP_60_69 = 7,
  AGE_GROUP_70_79 = 8,
  AGE_GROUP_80_89 = 9,
  AGE_GROUP_90_99 = 10,
  AGE_GROUP_100_120 = 11,
}
export enum CollaborationType { 
  INVALID_COLLABORATION = 0,
  ORGANIZATION_COLLABORATION = 1,
  CONNECT_COLLABORATION = 2,
}
export enum CollaborationRole { 
  INVALID_COLLABORATION_ROLE = 0,
  OWNER = 1,
  VIEWER = 2,
  EDITOR = 3,
  ADMIN = 4,
}
export enum GrantType { 
  INVALID_GRANT = 0,
  AUTH_GRANT = 1,
  REFRESH_GRANT = 2,
}
export enum ResponeType { 
  INVALID_RESPONSE = 0,
  CODE_RESPONSE = 1,
  TOKEN_RESPONSE = 2,
  ID_RESPONSE = 3,
}
export enum LanguageCodeType { 
  INVALID_LANGUAGE = 0,
  LANGUAGE_DK = 1,
  LANGUAGE_EN = 2,
  LANGUAGE_DE = 3,
}
export enum CountryCodeType { 
  INVALID_COUNTRY = 0,
  COUTRY_DK = 1,
  COUNTRY_NO = 2,
  COUNTRY_DE = 3,
}
export enum SsnProviderType { 
  INVALID = 0,
  MIT_ID = 1,
}
