// source: softcorp.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.Softcorp.User');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Softcorp.CountryCode');
goog.require('proto.Softcorp.LanguageCode');
goog.require('proto.google.protobuf.Timestamp');

goog.forwardDeclare('proto.Softcorp.Gender');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Softcorp.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Softcorp.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Softcorp.User.displayName = 'proto.Softcorp.User';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Softcorp.User.prototype.toObject = function(opt_includeInstance) {
  return proto.Softcorp.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Softcorp.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Softcorp.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 4, 0),
    birthday: (f = msg.getBirthday()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    country: (f = msg.getCountry()) && proto.Softcorp.CountryCode.toObject(includeInstance, f),
    blocked: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    preferredlanguage: (f = msg.getPreferredlanguage()) && proto.Softcorp.LanguageCode.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdat: (f = msg.getCreatedat()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    updatedat: (f = msg.getUpdatedat()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    ssnid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    ssnhash: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Softcorp.User}
 */
proto.Softcorp.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Softcorp.User;
  return proto.Softcorp.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Softcorp.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Softcorp.User}
 */
proto.Softcorp.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {!proto.Softcorp.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 5:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setBirthday(value);
      break;
    case 6:
      var value = new proto.Softcorp.CountryCode;
      reader.readMessage(value,proto.Softcorp.CountryCode.deserializeBinaryFromReader);
      msg.setCountry(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocked(value);
      break;
    case 8:
      var value = new proto.Softcorp.LanguageCode;
      reader.readMessage(value,proto.Softcorp.LanguageCode.deserializeBinaryFromReader);
      msg.setPreferredlanguage(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedat(value);
      break;
    case 11:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedat(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsnid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSsnhash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Softcorp.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Softcorp.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Softcorp.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Softcorp.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getBirthday();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCountry();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Softcorp.CountryCode.serializeBinaryToWriter
    );
  }
  f = message.getBlocked();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPreferredlanguage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.Softcorp.LanguageCode.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedat();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSsnid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSsnhash();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Softcorp.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.Softcorp.User.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.Softcorp.User.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Gender gender = 4;
 * @return {!proto.Softcorp.Gender}
 */
proto.Softcorp.User.prototype.getGender = function() {
  return /** @type {!proto.Softcorp.Gender} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.Softcorp.Gender} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp birthday = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Softcorp.User.prototype.getBirthday = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.Softcorp.User} returns this
*/
proto.Softcorp.User.prototype.setBirthday = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.clearBirthday = function() {
  return this.setBirthday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Softcorp.User.prototype.hasBirthday = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CountryCode country = 6;
 * @return {?proto.Softcorp.CountryCode}
 */
proto.Softcorp.User.prototype.getCountry = function() {
  return /** @type{?proto.Softcorp.CountryCode} */ (
    jspb.Message.getWrapperField(this, proto.Softcorp.CountryCode, 6));
};


/**
 * @param {?proto.Softcorp.CountryCode|undefined} value
 * @return {!proto.Softcorp.User} returns this
*/
proto.Softcorp.User.prototype.setCountry = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.clearCountry = function() {
  return this.setCountry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Softcorp.User.prototype.hasCountry = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool blocked = 7;
 * @return {boolean}
 */
proto.Softcorp.User.prototype.getBlocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setBlocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional LanguageCode preferredLanguage = 8;
 * @return {?proto.Softcorp.LanguageCode}
 */
proto.Softcorp.User.prototype.getPreferredlanguage = function() {
  return /** @type{?proto.Softcorp.LanguageCode} */ (
    jspb.Message.getWrapperField(this, proto.Softcorp.LanguageCode, 8));
};


/**
 * @param {?proto.Softcorp.LanguageCode|undefined} value
 * @return {!proto.Softcorp.User} returns this
*/
proto.Softcorp.User.prototype.setPreferredlanguage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.clearPreferredlanguage = function() {
  return this.setPreferredlanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Softcorp.User.prototype.hasPreferredlanguage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.Softcorp.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp createdAt = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Softcorp.User.prototype.getCreatedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.Softcorp.User} returns this
*/
proto.Softcorp.User.prototype.setCreatedat = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.clearCreatedat = function() {
  return this.setCreatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Softcorp.User.prototype.hasCreatedat = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp updatedAt = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Softcorp.User.prototype.getUpdatedat = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.Softcorp.User} returns this
*/
proto.Softcorp.User.prototype.setUpdatedat = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.clearUpdatedat = function() {
  return this.setUpdatedat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Softcorp.User.prototype.hasUpdatedat = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string ssnId = 12;
 * @return {string}
 */
proto.Softcorp.User.prototype.getSsnid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setSsnid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string ssnHash = 13;
 * @return {string}
 */
proto.Softcorp.User.prototype.getSsnhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.User} returns this
 */
proto.Softcorp.User.prototype.setSsnhash = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


