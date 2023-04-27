// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class closures extends ethereum.Event {
  get params(): closures__Params {
    return new closures__Params(this);
  }
}

export class closures__Params {
  _event: closures;

  constructor(event: closures) {
    this._event = event;
  }

  get poolId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get security(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class subscribers extends ethereum.Event {
  get params(): subscribers__Params {
    return new subscribers__Params(this);
  }
}

export class subscribers__Params {
  _event: subscribers;

  constructor(event: subscribers) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get counterparty(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get securityTraded(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get securityAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get currencySettled(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get cashAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class tradeSettled extends ethereum.Event {
  get params(): tradeSettled__Params {
    return new tradeSettled__Params(this);
  }
}

export class tradeSettled__Params {
  _event: tradeSettled;

  constructor(event: tradeSettled) {
    this._event = event;
  }

  get poolid(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get transferor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get transferee(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get unitsToTransfer(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get security(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get currency(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get settlementStatus(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }

  get tradeRef(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get fee(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class MarginIssueManager extends ethereum.SmartContract {
  static bind(address: Address): MarginIssueManager {
    return new MarginIssueManager("MarginIssueManager", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTradingFeeCollected(_token: Address): BigInt {
    let result = super.call(
      "getTradingFeeCollected",
      "getTradingFeeCollected(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBigInt();
  }

  try_getTradingFeeCollected(_token: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTradingFeeCollected",
      "getTradingFeeCollected(address):(uint256)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get poolFactory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get vault(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get products(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get distribution(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class IssueProductCall extends ethereum.Call {
  get inputs(): IssueProductCall__Inputs {
    return new IssueProductCall__Inputs(this);
  }

  get outputs(): IssueProductCall__Outputs {
    return new IssueProductCall__Outputs(this);
  }
}

export class IssueProductCall__Inputs {
  _call: IssueProductCall;

  constructor(call: IssueProductCall) {
    this._call = call;
  }

  get security(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get securityType(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get currency(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get cficode(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get securityAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get minimumOrderSize(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get cashAmount(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get margin(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get collateral(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get tradeFee(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }
}

export class IssueProductCall__Outputs {
  _call: IssueProductCall;

  constructor(call: IssueProductCall) {
    this._call = call;
  }
}

export class OnMatchCall extends ethereum.Call {
  get inputs(): OnMatchCall__Inputs {
    return new OnMatchCall__Inputs(this);
  }

  get outputs(): OnMatchCall__Outputs {
    return new OnMatchCall__Outputs(this);
  }
}

export class OnMatchCall__Inputs {
  _call: OnMatchCall;

  constructor(call: OnMatchCall) {
    this._call = call;
  }

  get party(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get counterparty(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get orderRef(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get security(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get securityTraded(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get currency(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get cashTraded(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class OnMatchCall__Outputs {
  _call: OnMatchCall;

  constructor(call: OnMatchCall) {
    this._call = call;
  }
}

export class OnTradeCall extends ethereum.Call {
  get inputs(): OnTradeCall__Inputs {
    return new OnTradeCall__Inputs(this);
  }

  get outputs(): OnTradeCall__Outputs {
    return new OnTradeCall__Outputs(this);
  }
}

export class OnTradeCall__Inputs {
  _call: OnTradeCall;

  constructor(call: OnTradeCall) {
    this._call = call;
  }

  get ref(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get cref(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get security(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get securityTraded(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get currency(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get currencyTraded(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class OnTradeCall__Outputs {
  _call: OnTradeCall;

  constructor(call: OnTradeCall) {
    this._call = call;
  }
}

export class GetTradingFeeCollectedCall extends ethereum.Call {
  get inputs(): GetTradingFeeCollectedCall__Inputs {
    return new GetTradingFeeCollectedCall__Inputs(this);
  }

  get outputs(): GetTradingFeeCollectedCall__Outputs {
    return new GetTradingFeeCollectedCall__Outputs(this);
  }
}

export class GetTradingFeeCollectedCall__Inputs {
  _call: GetTradingFeeCollectedCall;

  constructor(call: GetTradingFeeCollectedCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class GetTradingFeeCollectedCall__Outputs {
  _call: GetTradingFeeCollectedCall;

  constructor(call: GetTradingFeeCollectedCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CloseCall extends ethereum.Call {
  get inputs(): CloseCall__Inputs {
    return new CloseCall__Inputs(this);
  }

  get outputs(): CloseCall__Outputs {
    return new CloseCall__Outputs(this);
  }
}

export class CloseCall__Inputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }

  get poolId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CloseCall__Outputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }
}
