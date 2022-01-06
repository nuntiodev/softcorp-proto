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

goog.provide('proto.Softcorp.Scope');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.Softcorp.ScopeType');
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
proto.Softcorp.Scope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Softcorp.Scope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Softcorp.Scope.displayName = 'proto.Softcorp.Scope';
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
proto.Softcorp.Scope.prototype.toObject = function(opt_includeInstance) {
  return proto.Softcorp.Scope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Softcorp.Scope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Softcorp.Scope.toObject = function(includeInstance, msg) {
  var f, obj = {
    scopetype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    readid: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    reademail: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    readgender: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    readcreatedat: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    offlineaccess: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    readname: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    readbirthday: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    readcountry: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    readpreflangauge: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    name: jspb.Message.getFieldWithDefault(msg, 11, ""),
    key: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.Softcorp.Scope}
 */
proto.Softcorp.Scope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Softcorp.Scope;
  return proto.Softcorp.Scope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Softcorp.Scope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Softcorp.Scope}
 */
proto.Softcorp.Scope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Softcorp.ScopeType} */ (reader.readEnum());
      msg.setScopetype(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReademail(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadgender(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadcreatedat(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOfflineaccess(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadname(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadbirthday(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadcountry(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReadpreflangauge(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.Softcorp.Scope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Softcorp.Scope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Softcorp.Scope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Softcorp.Scope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScopetype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getReadid();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getReademail();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getReadgender();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getReadcreatedat();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getOfflineaccess();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getReadname();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getReadbirthday();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getReadcountry();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getReadpreflangauge();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional ScopeType scopeType = 1;
 * @return {!proto.Softcorp.ScopeType}
 */
proto.Softcorp.Scope.prototype.getScopetype = function() {
  return /** @type {!proto.Softcorp.ScopeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Softcorp.ScopeType} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setScopetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool readId = 2;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool readEmail = 3;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReademail = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReademail = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool readGender = 4;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadgender = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadgender = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool readCreatedAt = 5;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadcreatedat = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadcreatedat = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool offlineAccess = 6;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getOfflineaccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setOfflineaccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool readName = 7;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadname = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadname = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool readBirthday = 8;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadbirthday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadbirthday = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool readCountry = 9;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadcountry = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadcountry = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool readPrefLangauge = 10;
 * @return {boolean}
 */
proto.Softcorp.Scope.prototype.getReadpreflangauge = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setReadpreflangauge = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string name = 11;
 * @return {string}
 */
proto.Softcorp.Scope.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string key = 12;
 * @return {string}
 */
proto.Softcorp.Scope.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.Softcorp.Scope} returns this
 */
proto.Softcorp.Scope.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


