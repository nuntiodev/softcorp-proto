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

goog.provide('proto.Softcorp.ConnectMetric');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');

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
proto.Softcorp.ConnectMetric = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Softcorp.ConnectMetric, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Softcorp.ConnectMetric.displayName = 'proto.Softcorp.ConnectMetric';
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
proto.Softcorp.ConnectMetric.prototype.toObject = function(opt_includeInstance) {
  return proto.Softcorp.ConnectMetric.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Softcorp.ConnectMetric} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Softcorp.ConnectMetric.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    numberofrequests: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numberofconsenttrue: jspb.Message.getFieldWithDefault(msg, 3, 0),
    numberofconsentfalse: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numberofagegroup1to12: jspb.Message.getFieldWithDefault(msg, 5, 0),
    numberofagegroup13to19: jspb.Message.getFieldWithDefault(msg, 6, 0),
    numberofagegroup20to29: jspb.Message.getFieldWithDefault(msg, 7, 0),
    numberofagegroup30to39: jspb.Message.getFieldWithDefault(msg, 8, 0),
    numberofagegroup40to49: jspb.Message.getFieldWithDefault(msg, 9, 0),
    numberofagegroup50to59: jspb.Message.getFieldWithDefault(msg, 10, 0),
    numberofagegroup60to69: jspb.Message.getFieldWithDefault(msg, 11, 0),
    numberofagegroup70to79: jspb.Message.getFieldWithDefault(msg, 12, 0),
    numberofagegroup80to89: jspb.Message.getFieldWithDefault(msg, 13, 0),
    numberofagegroup90to99: jspb.Message.getFieldWithDefault(msg, 14, 0),
    numberofagegroup100to120: jspb.Message.getFieldWithDefault(msg, 15, 0),
    numberoffemales: jspb.Message.getFieldWithDefault(msg, 16, 0),
    numberofmales: jspb.Message.getFieldWithDefault(msg, 17, 0),
    numberofothers: jspb.Message.getFieldWithDefault(msg, 18, 0),
    amountfromdk: jspb.Message.getFieldWithDefault(msg, 19, 0),
    amountfromno: jspb.Message.getFieldWithDefault(msg, 20, 0),
    amountfromde: jspb.Message.getFieldWithDefault(msg, 21, 0)
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
 * @return {!proto.Softcorp.ConnectMetric}
 */
proto.Softcorp.ConnectMetric.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Softcorp.ConnectMetric;
  return proto.Softcorp.ConnectMetric.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Softcorp.ConnectMetric} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Softcorp.ConnectMetric}
 */
proto.Softcorp.ConnectMetric.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofrequests(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofconsenttrue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofconsentfalse(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup1to12(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup13to19(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup20to29(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup30to39(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup40to49(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup50to59(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup60to69(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup70to79(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup80to89(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup90to99(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofagegroup100to120(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberoffemales(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofmales(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofothers(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmountfromdk(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmountfromno(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAmountfromde(value);
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
proto.Softcorp.ConnectMetric.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Softcorp.ConnectMetric.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Softcorp.ConnectMetric} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Softcorp.ConnectMetric.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNumberofrequests();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getNumberofconsenttrue();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNumberofconsentfalse();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getNumberofagegroup1to12();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getNumberofagegroup13to19();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getNumberofagegroup20to29();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getNumberofagegroup30to39();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getNumberofagegroup40to49();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getNumberofagegroup50to59();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getNumberofagegroup60to69();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getNumberofagegroup70to79();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getNumberofagegroup80to89();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getNumberofagegroup90to99();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = message.getNumberofagegroup100to120();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getNumberoffemales();
  if (f !== 0) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = message.getNumberofmales();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = message.getNumberofothers();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getAmountfromdk();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getAmountfromno();
  if (f !== 0) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = message.getAmountfromde();
  if (f !== 0) {
    writer.writeInt32(
      21,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Softcorp.ConnectMetric.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
*/
proto.Softcorp.ConnectMetric.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Softcorp.ConnectMetric.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 numberOfRequests = 2;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofrequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofrequests = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 numberOfConsentTrue = 3;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofconsenttrue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofconsenttrue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 numberOfConsentFalse = 4;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofconsentfalse = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofconsentfalse = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 numberOfAgeGroup1To12 = 5;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup1to12 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup1to12 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 numberOfAgeGroup13To19 = 6;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup13to19 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup13to19 = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 numberOfAgeGroup20To29 = 7;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup20to29 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup20to29 = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 numberOfAgeGroup30To39 = 8;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup30to39 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup30to39 = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 numberOfAgeGroup40To49 = 9;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup40to49 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup40to49 = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 numberOfAgeGroup50To59 = 10;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup50to59 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup50to59 = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 numberOfAgeGroup60To69 = 11;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup60to69 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup60to69 = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 numberOfAgeGroup70To79 = 12;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup70to79 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup70to79 = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 numberOfAgeGroup80To89 = 13;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup80to89 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup80to89 = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 numberOfAgeGroup90To99 = 14;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup90to99 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup90to99 = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 numberOfAgeGroup100To120 = 15;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofagegroup100to120 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofagegroup100to120 = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int32 numberOfFemales = 16;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberoffemales = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberoffemales = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int32 numberOfMales = 17;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofmales = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofmales = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int32 numberOfOthers = 18;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getNumberofothers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setNumberofothers = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int32 amountFromDk = 19;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getAmountfromdk = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setAmountfromdk = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int32 amountFromNo = 20;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getAmountfromno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setAmountfromno = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int32 amountFromDe = 21;
 * @return {number}
 */
proto.Softcorp.ConnectMetric.prototype.getAmountfromde = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.Softcorp.ConnectMetric} returns this
 */
proto.Softcorp.ConnectMetric.prototype.setAmountfromde = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};

