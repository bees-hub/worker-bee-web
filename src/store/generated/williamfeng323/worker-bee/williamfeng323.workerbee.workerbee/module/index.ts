// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateProfile } from "./types/workerbee/tx";
import { MsgStartTask } from "./types/workerbee/tx";
import { MsgApplyTask } from "./types/workerbee/tx";
import { MsgUpdateProfile } from "./types/workerbee/tx";
import { MsgPostTask } from "./types/workerbee/tx";
import { MsgCompleteTask } from "./types/workerbee/tx";
import { MsgAssignBee } from "./types/workerbee/tx";
import { MsgRefund } from "./types/workerbee/tx";


const types = [
  ["/williamfeng323.workerbee.workerbee.MsgCreateProfile", MsgCreateProfile],
  ["/williamfeng323.workerbee.workerbee.MsgStartTask", MsgStartTask],
  ["/williamfeng323.workerbee.workerbee.MsgApplyTask", MsgApplyTask],
  ["/williamfeng323.workerbee.workerbee.MsgUpdateProfile", MsgUpdateProfile],
  ["/williamfeng323.workerbee.workerbee.MsgPostTask", MsgPostTask],
  ["/williamfeng323.workerbee.workerbee.MsgCompleteTask", MsgCompleteTask],
  ["/williamfeng323.workerbee.workerbee.MsgAssignBee", MsgAssignBee],
  ["/williamfeng323.workerbee.workerbee.MsgRefund", MsgRefund],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateProfile: (data: MsgCreateProfile): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgCreateProfile", value: MsgCreateProfile.fromPartial( data ) }),
    msgStartTask: (data: MsgStartTask): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgStartTask", value: MsgStartTask.fromPartial( data ) }),
    msgApplyTask: (data: MsgApplyTask): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgApplyTask", value: MsgApplyTask.fromPartial( data ) }),
    msgUpdateProfile: (data: MsgUpdateProfile): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgUpdateProfile", value: MsgUpdateProfile.fromPartial( data ) }),
    msgPostTask: (data: MsgPostTask): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgPostTask", value: MsgPostTask.fromPartial( data ) }),
    msgCompleteTask: (data: MsgCompleteTask): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgCompleteTask", value: MsgCompleteTask.fromPartial( data ) }),
    msgAssignBee: (data: MsgAssignBee): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgAssignBee", value: MsgAssignBee.fromPartial( data ) }),
    msgRefund: (data: MsgRefund): EncodeObject => ({ typeUrl: "/williamfeng323.workerbee.workerbee.MsgRefund", value: MsgRefund.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
