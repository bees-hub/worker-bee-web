/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "williamfeng323.workerbee.workerbee";

export interface MsgCreateProfile {
  creator: string;
  avatar: string;
  country: string;
  province: string;
  city: string;
  district: string;
  contact: string;
  introduction: string;
  skills: string[];
}

export interface MsgCreateProfileResponse {
  creator: string;
  credit: number;
}

export interface MsgUpdateProfile {
  creator: string;
  avatar: string;
  country: string;
  province: string;
  city: string;
  district: string;
  contact: string;
  introduction: string;
  skills: string[];
}

export interface MsgUpdateProfileResponse {
  creator: string;
}

export interface MsgPostTask {
  creator: string;
  summary: string;
  description: string;
  date: string;
  bounty: Coin | undefined;
  country: string;
  province: string;
  city: string;
  address: string;
}

export interface MsgPostTaskResponse {}

export interface MsgApplyTask {
  creator: string;
  taskId: string;
  requestReward: Coin | undefined;
}

export interface MsgApplyTaskResponse {}

export interface MsgAssignBee {
  creator: string;
  taskId: string;
  beeId: string;
}

export interface MsgAssignBeeResponse {}

export interface MsgStartTask {
  creator: string;
  taskId: string;
}

export interface MsgStartTaskResponse {}

export interface MsgCompleteTask {
  creator: string;
  taskId: string;
}

export interface MsgCompleteTaskResponse {}

export interface MsgRefund {
  creator: string;
  taskId: string;
}

export interface MsgRefundResponse {}

const baseMsgCreateProfile: object = {
  creator: "",
  avatar: "",
  country: "",
  province: "",
  city: "",
  district: "",
  contact: "",
  introduction: "",
  skills: "",
};

export const MsgCreateProfile = {
  encode(message: MsgCreateProfile, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.avatar !== "") {
      writer.uint32(18).string(message.avatar);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    if (message.province !== "") {
      writer.uint32(34).string(message.province);
    }
    if (message.city !== "") {
      writer.uint32(42).string(message.city);
    }
    if (message.district !== "") {
      writer.uint32(50).string(message.district);
    }
    if (message.contact !== "") {
      writer.uint32(58).string(message.contact);
    }
    if (message.introduction !== "") {
      writer.uint32(66).string(message.introduction);
    }
    for (const v of message.skills) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateProfile } as MsgCreateProfile;
    message.skills = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.avatar = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        case 4:
          message.province = reader.string();
          break;
        case 5:
          message.city = reader.string();
          break;
        case 6:
          message.district = reader.string();
          break;
        case 7:
          message.contact = reader.string();
          break;
        case 8:
          message.introduction = reader.string();
          break;
        case 9:
          message.skills.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProfile {
    const message = { ...baseMsgCreateProfile } as MsgCreateProfile;
    message.skills = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = String(object.avatar);
    } else {
      message.avatar = "";
    }
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
    return message;
  },

  toJSON(message: MsgCreateProfile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.country !== undefined && (obj.country = message.country);
    message.province !== undefined && (obj.province = message.province);
    message.city !== undefined && (obj.city = message.city);
    message.district !== undefined && (obj.district = message.district);
    message.contact !== undefined && (obj.contact = message.contact);
    message.introduction !== undefined &&
      (obj.introduction = message.introduction);
    if (message.skills) {
      obj.skills = message.skills.map((e) => e);
    } else {
      obj.skills = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateProfile>): MsgCreateProfile {
    const message = { ...baseMsgCreateProfile } as MsgCreateProfile;
    message.skills = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = object.avatar;
    } else {
      message.avatar = "";
    }
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
    return message;
  },
};

const baseMsgCreateProfileResponse: object = { creator: "", credit: 0 };

export const MsgCreateProfileResponse = {
  encode(
    message: MsgCreateProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.credit !== 0) {
      writer.uint32(16).uint64(message.credit);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateProfileResponse,
    } as MsgCreateProfileResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.credit = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateProfileResponse {
    const message = {
      ...baseMsgCreateProfileResponse,
    } as MsgCreateProfileResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = Number(object.credit);
    } else {
      message.credit = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateProfileResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.credit !== undefined && (obj.credit = message.credit);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateProfileResponse>
  ): MsgCreateProfileResponse {
    const message = {
      ...baseMsgCreateProfileResponse,
    } as MsgCreateProfileResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.credit !== undefined && object.credit !== null) {
      message.credit = object.credit;
    } else {
      message.credit = 0;
    }
    return message;
  },
};

const baseMsgUpdateProfile: object = {
  creator: "",
  avatar: "",
  country: "",
  province: "",
  city: "",
  district: "",
  contact: "",
  introduction: "",
  skills: "",
};

export const MsgUpdateProfile = {
  encode(message: MsgUpdateProfile, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.avatar !== "") {
      writer.uint32(18).string(message.avatar);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    if (message.province !== "") {
      writer.uint32(34).string(message.province);
    }
    if (message.city !== "") {
      writer.uint32(42).string(message.city);
    }
    if (message.district !== "") {
      writer.uint32(50).string(message.district);
    }
    if (message.contact !== "") {
      writer.uint32(58).string(message.contact);
    }
    if (message.introduction !== "") {
      writer.uint32(66).string(message.introduction);
    }
    for (const v of message.skills) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProfile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile;
    message.skills = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.avatar = reader.string();
          break;
        case 3:
          message.country = reader.string();
          break;
        case 4:
          message.province = reader.string();
          break;
        case 5:
          message.city = reader.string();
          break;
        case 6:
          message.district = reader.string();
          break;
        case 7:
          message.contact = reader.string();
          break;
        case 8:
          message.introduction = reader.string();
          break;
        case 9:
          message.skills.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProfile {
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile;
    message.skills = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = String(object.avatar);
    } else {
      message.avatar = "";
    }
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
    return message;
  },

  toJSON(message: MsgUpdateProfile): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.country !== undefined && (obj.country = message.country);
    message.province !== undefined && (obj.province = message.province);
    message.city !== undefined && (obj.city = message.city);
    message.district !== undefined && (obj.district = message.district);
    message.contact !== undefined && (obj.contact = message.contact);
    message.introduction !== undefined &&
      (obj.introduction = message.introduction);
    if (message.skills) {
      obj.skills = message.skills.map((e) => e);
    } else {
      obj.skills = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateProfile>): MsgUpdateProfile {
    const message = { ...baseMsgUpdateProfile } as MsgUpdateProfile;
    message.skills = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = object.avatar;
    } else {
      message.avatar = "";
    }
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
    return message;
  },
};

const baseMsgUpdateProfileResponse: object = { creator: "" };

export const MsgUpdateProfileResponse = {
  encode(
    message: MsgUpdateProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateProfileResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateProfileResponse,
    } as MsgUpdateProfileResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateProfileResponse {
    const message = {
      ...baseMsgUpdateProfileResponse,
    } as MsgUpdateProfileResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateProfileResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateProfileResponse>
  ): MsgUpdateProfileResponse {
    const message = {
      ...baseMsgUpdateProfileResponse,
    } as MsgUpdateProfileResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgPostTask: object = {
  creator: "",
  summary: "",
  description: "",
  date: "",
  country: "",
  province: "",
  city: "",
  address: "",
};

export const MsgPostTask = {
  encode(message: MsgPostTask, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.date !== "") {
      writer.uint32(34).string(message.date);
    }
    if (message.bounty !== undefined) {
      Coin.encode(message.bounty, writer.uint32(42).fork()).ldelim();
    }
    if (message.country !== "") {
      writer.uint32(50).string(message.country);
    }
    if (message.province !== "") {
      writer.uint32(58).string(message.province);
    }
    if (message.city !== "") {
      writer.uint32(66).string(message.city);
    }
    if (message.address !== "") {
      writer.uint32(74).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPostTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPostTask } as MsgPostTask;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.summary = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.date = reader.string();
          break;
        case 5:
          message.bounty = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.country = reader.string();
          break;
        case 7:
          message.province = reader.string();
          break;
        case 8:
          message.city = reader.string();
          break;
        case 9:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPostTask {
    const message = { ...baseMsgPostTask } as MsgPostTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    } else {
      message.summary = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = String(object.date);
    } else {
      message.date = "";
    }
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Coin.fromJSON(object.bounty);
    } else {
      message.bounty = undefined;
    }
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgPostTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.summary !== undefined && (obj.summary = message.summary);
    message.description !== undefined &&
      (obj.description = message.description);
    message.date !== undefined && (obj.date = message.date);
    message.bounty !== undefined &&
      (obj.bounty = message.bounty ? Coin.toJSON(message.bounty) : undefined);
    message.country !== undefined && (obj.country = message.country);
    message.province !== undefined && (obj.province = message.province);
    message.city !== undefined && (obj.city = message.city);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgPostTask>): MsgPostTask {
    const message = { ...baseMsgPostTask } as MsgPostTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    } else {
      message.summary = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = "";
    }
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Coin.fromPartial(object.bounty);
    } else {
      message.bounty = undefined;
    }
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
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgPostTaskResponse: object = {};

export const MsgPostTaskResponse = {
  encode(_: MsgPostTaskResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgPostTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgPostTaskResponse } as MsgPostTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgPostTaskResponse {
    const message = { ...baseMsgPostTaskResponse } as MsgPostTaskResponse;
    return message;
  },

  toJSON(_: MsgPostTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgPostTaskResponse>): MsgPostTaskResponse {
    const message = { ...baseMsgPostTaskResponse } as MsgPostTaskResponse;
    return message;
  },
};

const baseMsgApplyTask: object = { creator: "", taskId: "" };

export const MsgApplyTask = {
  encode(message: MsgApplyTask, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    if (message.requestReward !== undefined) {
      Coin.encode(message.requestReward, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApplyTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApplyTask } as MsgApplyTask;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.taskId = reader.string();
          break;
        case 3:
          message.requestReward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApplyTask {
    const message = { ...baseMsgApplyTask } as MsgApplyTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = String(object.taskId);
    } else {
      message.taskId = "";
    }
    if (object.requestReward !== undefined && object.requestReward !== null) {
      message.requestReward = Coin.fromJSON(object.requestReward);
    } else {
      message.requestReward = undefined;
    }
    return message;
  },

  toJSON(message: MsgApplyTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskId !== undefined && (obj.taskId = message.taskId);
    message.requestReward !== undefined &&
      (obj.requestReward = message.requestReward
        ? Coin.toJSON(message.requestReward)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgApplyTask>): MsgApplyTask {
    const message = { ...baseMsgApplyTask } as MsgApplyTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = object.taskId;
    } else {
      message.taskId = "";
    }
    if (object.requestReward !== undefined && object.requestReward !== null) {
      message.requestReward = Coin.fromPartial(object.requestReward);
    } else {
      message.requestReward = undefined;
    }
    return message;
  },
};

const baseMsgApplyTaskResponse: object = {};

export const MsgApplyTaskResponse = {
  encode(_: MsgApplyTaskResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApplyTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApplyTaskResponse } as MsgApplyTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgApplyTaskResponse {
    const message = { ...baseMsgApplyTaskResponse } as MsgApplyTaskResponse;
    return message;
  },

  toJSON(_: MsgApplyTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgApplyTaskResponse>): MsgApplyTaskResponse {
    const message = { ...baseMsgApplyTaskResponse } as MsgApplyTaskResponse;
    return message;
  },
};

const baseMsgAssignBee: object = { creator: "", taskId: "", beeId: "" };

export const MsgAssignBee = {
  encode(message: MsgAssignBee, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    if (message.beeId !== "") {
      writer.uint32(26).string(message.beeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAssignBee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAssignBee } as MsgAssignBee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.taskId = reader.string();
          break;
        case 3:
          message.beeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAssignBee {
    const message = { ...baseMsgAssignBee } as MsgAssignBee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = String(object.taskId);
    } else {
      message.taskId = "";
    }
    if (object.beeId !== undefined && object.beeId !== null) {
      message.beeId = String(object.beeId);
    } else {
      message.beeId = "";
    }
    return message;
  },

  toJSON(message: MsgAssignBee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskId !== undefined && (obj.taskId = message.taskId);
    message.beeId !== undefined && (obj.beeId = message.beeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAssignBee>): MsgAssignBee {
    const message = { ...baseMsgAssignBee } as MsgAssignBee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = object.taskId;
    } else {
      message.taskId = "";
    }
    if (object.beeId !== undefined && object.beeId !== null) {
      message.beeId = object.beeId;
    } else {
      message.beeId = "";
    }
    return message;
  },
};

const baseMsgAssignBeeResponse: object = {};

export const MsgAssignBeeResponse = {
  encode(_: MsgAssignBeeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAssignBeeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAssignBeeResponse } as MsgAssignBeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAssignBeeResponse {
    const message = { ...baseMsgAssignBeeResponse } as MsgAssignBeeResponse;
    return message;
  },

  toJSON(_: MsgAssignBeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAssignBeeResponse>): MsgAssignBeeResponse {
    const message = { ...baseMsgAssignBeeResponse } as MsgAssignBeeResponse;
    return message;
  },
};

const baseMsgStartTask: object = { creator: "", taskId: "" };

export const MsgStartTask = {
  encode(message: MsgStartTask, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgStartTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStartTask } as MsgStartTask;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.taskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartTask {
    const message = { ...baseMsgStartTask } as MsgStartTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = String(object.taskId);
    } else {
      message.taskId = "";
    }
    return message;
  },

  toJSON(message: MsgStartTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskId !== undefined && (obj.taskId = message.taskId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgStartTask>): MsgStartTask {
    const message = { ...baseMsgStartTask } as MsgStartTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = object.taskId;
    } else {
      message.taskId = "";
    }
    return message;
  },
};

const baseMsgStartTaskResponse: object = {};

export const MsgStartTaskResponse = {
  encode(_: MsgStartTaskResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgStartTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStartTaskResponse } as MsgStartTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgStartTaskResponse {
    const message = { ...baseMsgStartTaskResponse } as MsgStartTaskResponse;
    return message;
  },

  toJSON(_: MsgStartTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgStartTaskResponse>): MsgStartTaskResponse {
    const message = { ...baseMsgStartTaskResponse } as MsgStartTaskResponse;
    return message;
  },
};

const baseMsgCompleteTask: object = { creator: "", taskId: "" };

export const MsgCompleteTask = {
  encode(message: MsgCompleteTask, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCompleteTask {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCompleteTask } as MsgCompleteTask;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.taskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCompleteTask {
    const message = { ...baseMsgCompleteTask } as MsgCompleteTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = String(object.taskId);
    } else {
      message.taskId = "";
    }
    return message;
  },

  toJSON(message: MsgCompleteTask): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskId !== undefined && (obj.taskId = message.taskId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCompleteTask>): MsgCompleteTask {
    const message = { ...baseMsgCompleteTask } as MsgCompleteTask;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = object.taskId;
    } else {
      message.taskId = "";
    }
    return message;
  },
};

const baseMsgCompleteTaskResponse: object = {};

export const MsgCompleteTaskResponse = {
  encode(_: MsgCompleteTaskResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCompleteTaskResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCompleteTaskResponse,
    } as MsgCompleteTaskResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCompleteTaskResponse {
    const message = {
      ...baseMsgCompleteTaskResponse,
    } as MsgCompleteTaskResponse;
    return message;
  },

  toJSON(_: MsgCompleteTaskResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCompleteTaskResponse>
  ): MsgCompleteTaskResponse {
    const message = {
      ...baseMsgCompleteTaskResponse,
    } as MsgCompleteTaskResponse;
    return message;
  },
};

const baseMsgRefund: object = { creator: "", taskId: "" };

export const MsgRefund = {
  encode(message: MsgRefund, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRefund {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRefund } as MsgRefund;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.taskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefund {
    const message = { ...baseMsgRefund } as MsgRefund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = String(object.taskId);
    } else {
      message.taskId = "";
    }
    return message;
  },

  toJSON(message: MsgRefund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.taskId !== undefined && (obj.taskId = message.taskId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRefund>): MsgRefund {
    const message = { ...baseMsgRefund } as MsgRefund;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = object.taskId;
    } else {
      message.taskId = "";
    }
    return message;
  },
};

const baseMsgRefundResponse: object = {};

export const MsgRefundResponse = {
  encode(_: MsgRefundResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRefundResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRefundResponse } as MsgRefundResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRefundResponse {
    const message = { ...baseMsgRefundResponse } as MsgRefundResponse;
    return message;
  },

  toJSON(_: MsgRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRefundResponse>): MsgRefundResponse {
    const message = { ...baseMsgRefundResponse } as MsgRefundResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateProfile(request: MsgCreateProfile): Promise<MsgCreateProfileResponse>;
  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse>;
  PostTask(request: MsgPostTask): Promise<MsgPostTaskResponse>;
  ApplyTask(request: MsgApplyTask): Promise<MsgApplyTaskResponse>;
  AssignBee(request: MsgAssignBee): Promise<MsgAssignBeeResponse>;
  StartTask(request: MsgStartTask): Promise<MsgStartTaskResponse>;
  CompleteTask(request: MsgCompleteTask): Promise<MsgCompleteTaskResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Refund(request: MsgRefund): Promise<MsgRefundResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateProfile(request: MsgCreateProfile): Promise<MsgCreateProfileResponse> {
    const data = MsgCreateProfile.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "CreateProfile",
      data
    );
    return promise.then((data) =>
      MsgCreateProfileResponse.decode(new Reader(data))
    );
  }

  UpdateProfile(request: MsgUpdateProfile): Promise<MsgUpdateProfileResponse> {
    const data = MsgUpdateProfile.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "UpdateProfile",
      data
    );
    return promise.then((data) =>
      MsgUpdateProfileResponse.decode(new Reader(data))
    );
  }

  PostTask(request: MsgPostTask): Promise<MsgPostTaskResponse> {
    const data = MsgPostTask.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "PostTask",
      data
    );
    return promise.then((data) => MsgPostTaskResponse.decode(new Reader(data)));
  }

  ApplyTask(request: MsgApplyTask): Promise<MsgApplyTaskResponse> {
    const data = MsgApplyTask.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "ApplyTask",
      data
    );
    return promise.then((data) =>
      MsgApplyTaskResponse.decode(new Reader(data))
    );
  }

  AssignBee(request: MsgAssignBee): Promise<MsgAssignBeeResponse> {
    const data = MsgAssignBee.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "AssignBee",
      data
    );
    return promise.then((data) =>
      MsgAssignBeeResponse.decode(new Reader(data))
    );
  }

  StartTask(request: MsgStartTask): Promise<MsgStartTaskResponse> {
    const data = MsgStartTask.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "StartTask",
      data
    );
    return promise.then((data) =>
      MsgStartTaskResponse.decode(new Reader(data))
    );
  }

  CompleteTask(request: MsgCompleteTask): Promise<MsgCompleteTaskResponse> {
    const data = MsgCompleteTask.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "CompleteTask",
      data
    );
    return promise.then((data) =>
      MsgCompleteTaskResponse.decode(new Reader(data))
    );
  }

  Refund(request: MsgRefund): Promise<MsgRefundResponse> {
    const data = MsgRefund.encode(request).finish();
    const promise = this.rpc.request(
      "williamfeng323.workerbee.workerbee.Msg",
      "Refund",
      data
    );
    return promise.then((data) => MsgRefundResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

// if (util.Long !== Long) {
//   util.Long = Long as any;
//   configure();
// }
