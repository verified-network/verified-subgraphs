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

  get poolId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get investor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get securityTraded(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get currencySettled(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get tradeRef(): Bytes {
    return this._event.parameters[7].value.toBytes();
  }

  get DPID(): Bytes {
    return this._event.parameters[8].value.toBytes();
  }

  get timestamp(): BigInt {
    return this._event.parameters[9].value.toBigInt();
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

export class SecondaryIssueManager__getSettlementRequestResultValue0Struct extends ethereum.Tuple {
  get transferor(): Address {
    return this[0].toAddress();
  }

  get transferee(): Address {
    return this[1].toAddress();
  }

  get security(): Address {
    return this[2].toAddress();
  }

  get status(): Bytes {
    return this[3].toBytes();
  }

  get DPID(): Bytes {
    return this[4].toBytes();
  }

  get currency(): Address {
    return this[5].toAddress();
  }

  get price(): BigInt {
    return this[6].toBigInt();
  }

  get unitsToTransfer(): BigInt {
    return this[7].toBigInt();
  }

  get consideration(): BigInt {
    return this[8].toBigInt();
  }

  get executionDate(): BigInt {
    return this[9].toBigInt();
  }

  get orderPool(): Address {
    return this[10].toAddress();
  }

  get partyRef(): Bytes {
    return this[11].toBytes();
  }

  get counterpartyRef(): Bytes {
    return this[12].toBytes();
  }
}

export class SecondaryIssueManager__getSubscribersResultValue0Struct extends ethereum.Tuple {
  get investor(): Address {
    return this[0].toAddress();
  }

  get asset(): Address {
    return this[1].toAddress();
  }

  get currency(): Address {
    return this[2].toAddress();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get price(): BigInt {
    return this[4].toBigInt();
  }
}

export class SecondaryIssueManager extends ethereum.SmartContract {
  static bind(address: Address): SecondaryIssueManager {
    return new SecondaryIssueManager("SecondaryIssueManager", address);
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

  getSettlementRequests(dpid: Bytes, poolId: Bytes): Array<Bytes> {
    let result = super.call(
      "getSettlementRequests",
      "getSettlementRequests(bytes32,bytes32):(bytes32[])",
      [
        ethereum.Value.fromFixedBytes(dpid),
        ethereum.Value.fromFixedBytes(poolId)
      ]
    );

    return result[0].toBytesArray();
  }

  try_getSettlementRequests(
    dpid: Bytes,
    poolId: Bytes
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getSettlementRequests",
      "getSettlementRequests(bytes32,bytes32):(bytes32[])",
      [
        ethereum.Value.fromFixedBytes(dpid),
        ethereum.Value.fromFixedBytes(poolId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getSettlementRequest(
    ref: Bytes
  ): SecondaryIssueManager__getSettlementRequestResultValue0Struct {
    let result = super.call(
      "getSettlementRequest",
      "getSettlementRequest(bytes32):((address,address,address,bytes32,bytes32,address,uint256,uint256,uint256,uint256,address,bytes32,bytes32))",
      [ethereum.Value.fromFixedBytes(ref)]
    );

    return changetype<
      SecondaryIssueManager__getSettlementRequestResultValue0Struct
    >(result[0].toTuple());
  }

  try_getSettlementRequest(
    ref: Bytes
  ): ethereum.CallResult<
    SecondaryIssueManager__getSettlementRequestResultValue0Struct
  > {
    let result = super.tryCall(
      "getSettlementRequest",
      "getSettlementRequest(bytes32):((address,address,address,bytes32,bytes32,address,uint256,uint256,uint256,uint256,address,bytes32,bytes32))",
      [ethereum.Value.fromFixedBytes(ref)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<SecondaryIssueManager__getSettlementRequestResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getSubscribers(
    poolId: Bytes
  ): Array<SecondaryIssueManager__getSubscribersResultValue0Struct> {
    let result = super.call(
      "getSubscribers",
      "getSubscribers(bytes32):((address,address,address,uint256,uint256)[])",
      [ethereum.Value.fromFixedBytes(poolId)]
    );

    return result[0].toTupleArray<
      SecondaryIssueManager__getSubscribersResultValue0Struct
    >();
  }

  try_getSubscribers(
    poolId: Bytes
  ): ethereum.CallResult<
    Array<SecondaryIssueManager__getSubscribersResultValue0Struct>
  > {
    let result = super.tryCall(
      "getSubscribers",
      "getSubscribers(bytes32):((address,address,address,uint256,uint256)[])",
      [ethereum.Value.fromFixedBytes(poolId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        SecondaryIssueManager__getSubscribersResultValue0Struct
      >()
    );
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

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _issueFeePercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _client(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _vault(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _distribution(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _products(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class IssueSecondaryCall extends ethereum.Call {
  get inputs(): IssueSecondaryCall__Inputs {
    return new IssueSecondaryCall__Inputs(this);
  }

  get outputs(): IssueSecondaryCall__Outputs {
    return new IssueSecondaryCall__Outputs(this);
  }
}

export class IssueSecondaryCall__Inputs {
  _call: IssueSecondaryCall;

  constructor(call: IssueSecondaryCall) {
    this._call = call;
  }

  get security(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get currency(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get securityAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get minSecurityOrder(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get cashAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class IssueSecondaryCall__Outputs {
  _call: IssueSecondaryCall;

  constructor(call: IssueSecondaryCall) {
    this._call = call;
  }
}

export class RequestSettlementCall extends ethereum.Call {
  get inputs(): RequestSettlementCall__Inputs {
    return new RequestSettlementCall__Inputs(this);
  }

  get outputs(): RequestSettlementCall__Outputs {
    return new RequestSettlementCall__Outputs(this);
  }
}

export class RequestSettlementCall__Inputs {
  _call: RequestSettlementCall;

  constructor(call: RequestSettlementCall) {
    this._call = call;
  }

  get tradeToReport(): RequestSettlementCallTradeToReportStruct {
    return changetype<RequestSettlementCallTradeToReportStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get orderbook(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RequestSettlementCall__Outputs {
  _call: RequestSettlementCall;

  constructor(call: RequestSettlementCall) {
    this._call = call;
  }
}

export class RequestSettlementCallTradeToReportStruct extends ethereum.Tuple {
  get partyAddress(): Address {
    return this[0].toAddress();
  }

  get partyRef(): Bytes {
    return this[1].toBytes();
  }

  get counterpartyRef(): Bytes {
    return this[2].toBytes();
  }

  get dt(): BigInt {
    return this[3].toBigInt();
  }

  get securityTraded(): BigInt {
    return this[4].toBigInt();
  }

  get currencyTraded(): BigInt {
    return this[5].toBigInt();
  }
}

export class SetSettlementStatusCall extends ethereum.Call {
  get inputs(): SetSettlementStatusCall__Inputs {
    return new SetSettlementStatusCall__Inputs(this);
  }

  get outputs(): SetSettlementStatusCall__Outputs {
    return new SetSettlementStatusCall__Outputs(this);
  }
}

export class SetSettlementStatusCall__Inputs {
  _call: SetSettlementStatusCall;

  constructor(call: SetSettlementStatusCall) {
    this._call = call;
  }

  get ref(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get status(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetSettlementStatusCall__Outputs {
  _call: SetSettlementStatusCall;

  constructor(call: SetSettlementStatusCall) {
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
