/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "williamfeng323.workerbee.workerbee";

export interface Profile {
  index: string;
  avatar: string;
  serviceArea: ServiceArea | undefined;
  contact: string;
  introduction: string;
  skills: string[];
  credit: number;
  nonce: number;
  ownTasks: string[];
  appliedTasks: string[];
  assignedTasks: string[];
}

export interface ServiceArea {
  country: string;
  province: string;
  city: string;
  district: string;
}

const baseProfile: object = {
  index: "",
  avatar: "",
  contact: "",
  introduction: "",
  skills: "",
  credit: 0,
  nonce: 0,
  ownTasks: "",
  appliedTasks: "",
  assignedTasks: "",
};

export const Profile = {
  encode(message: Profile, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.avatar !== "") {
      writer.uint32(18).string(message.avatar);
    }
    if (message.serviceArea !== undefined) {
      ServiceArea.encode(
        message.serviceArea,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.contact !== "") {
      writer.uint32(34).string(message.contact);
    }
    if (message.introduction !== "") {
      writer.uint32(42).string(message.introduction);
    }
    for (const v of message.skills) {
      writer.uint32(50).string(v!);
    }
    if (message.credit !== 0) {
      writer.uint32(56).uint64(message.credit);
    }
    if (message.nonce !== 0) {
      writer.uint32(64).uint64(message.nonce);
    }
    for (const v of message.ownTasks) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.appliedTasks) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.assignedTasks) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    message.skills = [];
    message.ownTasks = [];
    message.appliedTasks = [];
    message.assignedTasks = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.avatar = reader.string();
          break;
        case 3:
          message.serviceArea = ServiceArea.decode(reader, reader.uint32());
          break;
        case 4:
          message.contact = reader.string();
          break;
        case 5:
          message.introduction = reader.string();
          break;
        case 6:
          message.skills.push(reader.string());
          break;
        case 7:
          message.credit = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.ownTasks.push(reader.string());
          break;
        case 10:
          message.appliedTasks.push(reader.string());
          break;
        case 11:
          message.assignedTasks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    message.skills = [];
    message.ownTasks = [];
    message.appliedTasks = [];
    message.assignedTasks = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = String(object.avatar);
    } else {
      message.avatar = "";
    }
    if (object.serviceArea !== undefined && object.serviceArea !== null) {
      message.serviceArea = ServiceArea.fromJSON(object.serviceArea);
    } else {
      message.serviceArea = undefined;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = String(object.contact);
    } else {
      message.contact = "";
    }
    if (object.introduction !== undefined && object.introduction !== null) {
      message.introduction = String(object.introduction);
    } else {
      message.introduction = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(String(e));
      }
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Number(object.credit);
    } else {
      message.credit = 0;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    if (object.ownTasks !== undefined && object.ownTasks !== null) {
      for (const e of object.ownTasks) {
        message.ownTasks.push(String(e));
      }
    }
    if (object.appliedTasks !== undefined && object.appliedTasks !== null) {
      for (const e of object.appliedTasks) {
        message.appliedTasks.push(String(e));
      }
    }
    if (object.assignedTasks !== undefined && object.assignedTasks !== null) {
      for (const e of object.assignedTasks) {
        message.assignedTasks.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.serviceArea !== undefined &&
      (obj.serviceArea = message.serviceArea
        ? ServiceArea.toJSON(message.serviceArea)
        : undefined);
    message.contact !== undefined && (obj.contact = message.contact);
    message.introduction !== undefined &&
      (obj.introduction = message.introduction);
    if (message.skills) {
      obj.skills = message.skills.map((e) => e);
    } else {
      obj.skills = [];
    }
    message.credit !== undefined && (obj.credit = message.credit);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    if (message.ownTasks) {
      obj.ownTasks = message.ownTasks.map((e) => e);
    } else {
      obj.ownTasks = [];
    }
    if (message.appliedTasks) {
      obj.appliedTasks = message.appliedTasks.map((e) => e);
    } else {
      obj.appliedTasks = [];
    }
    if (message.assignedTasks) {
      obj.assignedTasks = message.assignedTasks.map((e) => e);
    } else {
      obj.assignedTasks = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    message.skills = [];
    message.ownTasks = [];
    message.appliedTasks = [];
    message.assignedTasks = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = object.avatar;
    } else {
      message.avatar = "";
    }
    if (object.serviceArea !== undefined && object.serviceArea !== null) {
      message.serviceArea = ServiceArea.fromPartial(object.serviceArea);
    } else {
      message.serviceArea = undefined;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    } else {
      message.contact = "";
    }
    if (object.introduction !== undefined && object.introduction !== null) {
      message.introduction = object.introduction;
    } else {
      message.introduction = "";
    }
    if (object.skills !== undefined && object.skills !== null) {
      for (const e of object.skills) {
        message.skills.push(e);
      }
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = object.credit;
    } else {
      message.credit = 0;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    if (object.ownTasks !== undefined && object.ownTasks !== null) {
      for (const e of object.ownTasks) {
        message.ownTasks.push(e);
      }
    }
    if (object.appliedTasks !== undefined && object.appliedTasks !== null) {
      for (const e of object.appliedTasks) {
        message.appliedTasks.push(e);
      }
    }
    if (object.assignedTasks !== undefined && object.assignedTasks !== null) {
      for (const e of object.assignedTasks) {
        message.assignedTasks.push(e);
      }
    }
    return message;
  },
};

const baseServiceArea: object = {
  country: "",
  province: "",
  city: "",
  district: "",
};

export const ServiceArea = {
  encode(message: ServiceArea, writer: Writer = Writer.create()): Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.province !== "") {
      writer.uint32(18).string(message.province);
    }
    if (message.city !== "") {
      writer.uint32(26).string(message.city);
    }
    if (message.district !== "") {
      writer.uint32(34).string(message.district);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServiceArea {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServiceArea } as ServiceArea;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.country = reader.string();
          break;
        case 2:
          message.province = reader.string();
          break;
        case 3:
          message.city = reader.string();
          break;
        case 4:
          message.district = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceArea {
    const message = { ...baseServiceArea } as ServiceArea;
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    if (object.province !== undefined && object.province !== null) {
      message.province = String(object.province);
    } else {
      message.province = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = String(object.city);
    } else {
      message.city = "";
    }
    if (object.district !== undefined && object.district !== null) {
      message.district = String(object.district);
    } else {
      message.district = "";
    }
    return message;
  },

  toJSON(message: ServiceArea): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    message.province !== undefined && (obj.province = message.province);
    message.city !== undefined && (obj.city = message.city);
    message.district !== undefined && (obj.district = message.district);
    return obj;
  },

  fromPartial(object: DeepPartial<ServiceArea>): ServiceArea {
    const message = { ...baseServiceArea } as ServiceArea;
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    if (object.province !== undefined && object.province !== null) {
      message.province = object.province;
    } else {
      message.province = "";
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city;
    } else {
      message.city = "";
    }
    if (object.district !== undefined && object.district !== null) {
      message.district = object.district;
    } else {
      message.district = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
