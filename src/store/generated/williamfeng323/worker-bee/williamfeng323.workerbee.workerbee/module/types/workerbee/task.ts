/* eslint-disable */
import { Timestamp } from "../google/protobuf/timestamp";
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "williamfeng323.workerbee.workerbee";

export enum Status {
  Proposing = 0,
  Decided = 1,
  Started = 2,
  Completed = 3,
  Paid = 4,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "Proposing":
      return Status.Proposing;
    case 1:
    case "Decided":
      return Status.Decided;
    case 2:
    case "Started":
      return Status.Started;
    case 3:
    case "Completed":
      return Status.Completed;
    case 4:
    case "Paid":
      return Status.Paid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.Proposing:
      return "Proposing";
    case Status.Decided:
      return "Decided";
    case Status.Started:
      return "Started";
    case Status.Completed:
      return "Completed";
    case Status.Paid:
      return "Paid";
    default:
      return "UNKNOWN";
  }
}

export interface Task {
  index: string;
  summary: string;
  description: string;
  owner: string;
  assignee: string;
  proposingBees: ProposeBee[];
  bounty: Coin | undefined;
  location: Location | undefined;
  startDateTime: Date | undefined;
  status: Status;
  ownerConfirmStarted: boolean;
  assigneeConfirmStarted: boolean;
  ownerConfirmCompleted: boolean;
  assigneeConfirmCompleted: boolean;
}

export interface Location {
  country: string;
  province: string;
  city: string;
  address: string;
}

export interface ProposeBee {
  bee: string;
  bounty: Coin | undefined;
}

const baseTask: object = {
  index: "",
  summary: "",
  description: "",
  owner: "",
  assignee: "",
  status: 0,
  ownerConfirmStarted: false,
  assigneeConfirmStarted: false,
  ownerConfirmCompleted: false,
  assigneeConfirmCompleted: false,
};

export const Task = {
  encode(message: Task, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.assignee !== "") {
      writer.uint32(42).string(message.assignee);
    }
    for (const v of message.proposingBees) {
      ProposeBee.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.bounty !== undefined) {
      Coin.encode(message.bounty, writer.uint32(58).fork()).ldelim();
    }
    if (message.location !== undefined) {
      Location.encode(message.location, writer.uint32(66).fork()).ldelim();
    }
    if (message.startDateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startDateTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(80).int32(message.status);
    }
    if (message.ownerConfirmStarted === true) {
      writer.uint32(88).bool(message.ownerConfirmStarted);
    }
    if (message.assigneeConfirmStarted === true) {
      writer.uint32(96).bool(message.assigneeConfirmStarted);
    }
    if (message.ownerConfirmCompleted === true) {
      writer.uint32(104).bool(message.ownerConfirmCompleted);
    }
    if (message.assigneeConfirmCompleted === true) {
      writer.uint32(112).bool(message.assigneeConfirmCompleted);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Task {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTask } as Task;
    message.proposingBees = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.summary = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.assignee = reader.string();
          break;
        case 6:
          message.proposingBees.push(
            ProposeBee.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.bounty = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.location = Location.decode(reader, reader.uint32());
          break;
        case 9:
          message.startDateTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.status = reader.int32() as any;
          break;
        case 11:
          message.ownerConfirmStarted = reader.bool();
          break;
        case 12:
          message.assigneeConfirmStarted = reader.bool();
          break;
        case 13:
          message.ownerConfirmCompleted = reader.bool();
          break;
        case 14:
          message.assigneeConfirmCompleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Task {
    const message = { ...baseTask } as Task;
    message.proposingBees = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = String(object.assignee);
    } else {
      message.assignee = "";
    }
    if (object.proposingBees !== undefined && object.proposingBees !== null) {
      for (const e of object.proposingBees) {
        message.proposingBees.push(ProposeBee.fromJSON(e));
      }
    }
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Coin.fromJSON(object.bounty);
    } else {
      message.bounty = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.startDateTime !== undefined && object.startDateTime !== null) {
      message.startDateTime = fromJsonTimestamp(object.startDateTime);
    } else {
      message.startDateTime = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = statusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.ownerConfirmStarted !== undefined &&
      object.ownerConfirmStarted !== null
    ) {
      message.ownerConfirmStarted = Boolean(object.ownerConfirmStarted);
    } else {
      message.ownerConfirmStarted = false;
    }
    if (
      object.assigneeConfirmStarted !== undefined &&
      object.assigneeConfirmStarted !== null
    ) {
      message.assigneeConfirmStarted = Boolean(object.assigneeConfirmStarted);
    } else {
      message.assigneeConfirmStarted = false;
    }
    if (
      object.ownerConfirmCompleted !== undefined &&
      object.ownerConfirmCompleted !== null
    ) {
      message.ownerConfirmCompleted = Boolean(object.ownerConfirmCompleted);
    } else {
      message.ownerConfirmCompleted = false;
    }
    if (
      object.assigneeConfirmCompleted !== undefined &&
      object.assigneeConfirmCompleted !== null
    ) {
      message.assigneeConfirmCompleted = Boolean(
        object.assigneeConfirmCompleted
      );
    } else {
      message.assigneeConfirmCompleted = false;
    }
    return message;
  },

  toJSON(message: Task): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.summary !== undefined && (obj.summary = message.summary);
    message.description !== undefined &&
      (obj.description = message.description);
    message.owner !== undefined && (obj.owner = message.owner);
    message.assignee !== undefined && (obj.assignee = message.assignee);
    if (message.proposingBees) {
      obj.proposingBees = message.proposingBees.map((e) =>
        e ? ProposeBee.toJSON(e) : undefined
      );
    } else {
      obj.proposingBees = [];
    }
    message.bounty !== undefined &&
      (obj.bounty = message.bounty ? Coin.toJSON(message.bounty) : undefined);
    message.location !== undefined &&
      (obj.location = message.location
        ? Location.toJSON(message.location)
        : undefined);
    message.startDateTime !== undefined &&
      (obj.startDateTime =
        message.startDateTime !== undefined
          ? message.startDateTime.toISOString()
          : null);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    message.ownerConfirmStarted !== undefined &&
      (obj.ownerConfirmStarted = message.ownerConfirmStarted);
    message.assigneeConfirmStarted !== undefined &&
      (obj.assigneeConfirmStarted = message.assigneeConfirmStarted);
    message.ownerConfirmCompleted !== undefined &&
      (obj.ownerConfirmCompleted = message.ownerConfirmCompleted);
    message.assigneeConfirmCompleted !== undefined &&
      (obj.assigneeConfirmCompleted = message.assigneeConfirmCompleted);
    return obj;
  },

  fromPartial(object: DeepPartial<Task>): Task {
    const message = { ...baseTask } as Task;
    message.proposingBees = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    } else {
      message.assignee = "";
    }
    if (object.proposingBees !== undefined && object.proposingBees !== null) {
      for (const e of object.proposingBees) {
        message.proposingBees.push(ProposeBee.fromPartial(e));
      }
    }
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Coin.fromPartial(object.bounty);
    } else {
      message.bounty = undefined;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Location.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.startDateTime !== undefined && object.startDateTime !== null) {
      message.startDateTime = object.startDateTime;
    } else {
      message.startDateTime = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.ownerConfirmStarted !== undefined &&
      object.ownerConfirmStarted !== null
    ) {
      message.ownerConfirmStarted = object.ownerConfirmStarted;
    } else {
      message.ownerConfirmStarted = false;
    }
    if (
      object.assigneeConfirmStarted !== undefined &&
      object.assigneeConfirmStarted !== null
    ) {
      message.assigneeConfirmStarted = object.assigneeConfirmStarted;
    } else {
      message.assigneeConfirmStarted = false;
    }
    if (
      object.ownerConfirmCompleted !== undefined &&
      object.ownerConfirmCompleted !== null
    ) {
      message.ownerConfirmCompleted = object.ownerConfirmCompleted;
    } else {
      message.ownerConfirmCompleted = false;
    }
    if (
      object.assigneeConfirmCompleted !== undefined &&
      object.assigneeConfirmCompleted !== null
    ) {
      message.assigneeConfirmCompleted = object.assigneeConfirmCompleted;
    } else {
      message.assigneeConfirmCompleted = false;
    }
    return message;
  },
};

const baseLocation: object = {
  country: "",
  province: "",
  city: "",
  address: "",
};

export const Location = {
  encode(message: Location, writer: Writer = Writer.create()): Writer {
    if (message.country !== "") {
      writer.uint32(10).string(message.country);
    }
    if (message.province !== "") {
      writer.uint32(18).string(message.province);
    }
    if (message.city !== "") {
      writer.uint32(26).string(message.city);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Location {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLocation } as Location;
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
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Location {
    const message = { ...baseLocation } as Location;
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

  toJSON(message: Location): unknown {
    const obj: any = {};
    message.country !== undefined && (obj.country = message.country);
    message.province !== undefined && (obj.province = message.province);
    message.city !== undefined && (obj.city = message.city);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<Location>): Location {
    const message = { ...baseLocation } as Location;
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

const baseProposeBee: object = { bee: "" };

export const ProposeBee = {
  encode(message: ProposeBee, writer: Writer = Writer.create()): Writer {
    if (message.bee !== "") {
      writer.uint32(10).string(message.bee);
    }
    if (message.bounty !== undefined) {
      Coin.encode(message.bounty, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProposeBee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposeBee } as ProposeBee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bee = reader.string();
          break;
        case 2:
          message.bounty = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposeBee {
    const message = { ...baseProposeBee } as ProposeBee;
    if (object.bee !== undefined && object.bee !== null) {
      message.bee = String(object.bee);
    } else {
      message.bee = "";
    }
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Coin.fromJSON(object.bounty);
    } else {
      message.bounty = undefined;
    }
    return message;
  },

  toJSON(message: ProposeBee): unknown {
    const obj: any = {};
    message.bee !== undefined && (obj.bee = message.bee);
    message.bounty !== undefined &&
      (obj.bounty = message.bounty ? Coin.toJSON(message.bounty) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProposeBee>): ProposeBee {
    const message = { ...baseProposeBee } as ProposeBee;
    if (object.bee !== undefined && object.bee !== null) {
      message.bee = object.bee;
    } else {
      message.bee = "";
    }
    if (object.bounty !== undefined && object.bounty !== null) {
      message.bounty = Coin.fromPartial(object.bounty);
    } else {
      message.bounty = undefined;
    }
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}
