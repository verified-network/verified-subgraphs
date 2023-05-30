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

export class CashIssued extends ethereum.Event {
  get params(): CashIssued__Params {
    return new CashIssued__Params(this);
  }
}

export class CashIssued__Params {
  _event: CashIssued;

  constructor(event: CashIssued) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get currency(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class CashRedeemed extends ethereum.Event {
  get params(): CashRedeemed__Params {
    return new CashRedeemed__Params(this);
  }
}

export class CashRedeemed__Params {
  _event: CashRedeemed;

  constructor(event: CashRedeemed) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get currency(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get redeemedFor(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CashDeposits extends ethereum.Event {
  get params(): CashDeposits__Params {
    return new CashDeposits__Params(this);
  }
}

export class CashDeposits__Params {
  _event: CashDeposits;

  constructor(event: CashDeposits) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get currency(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CashTransfer extends ethereum.Event {
  get params(): CashTransfer__Params {
    return new CashTransfer__Params(this);
  }
}

export class CashTransfer__Params {
  _event: CashTransfer;

  constructor(event: CashTransfer) {
    this._event = event;
  }

  get party(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get counterparty(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get currency(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get deposit(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class redemption extends ethereum.Event {
  get params(): redemption__Params {
    return new redemption__Params(this);
  }
}

export class redemption__Params {
  _event: redemption;

  constructor(event: redemption) {
    this._event = event;
  }

  get currency(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get condition(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class balanceAmount extends ethereum.Event {
  get params(): balanceAmount__Params {
    return new balanceAmount__Params(this);
  }
}

export class balanceAmount__Params {
  _event: balanceAmount;

  constructor(event: balanceAmount) {
    this._event = event;
  }

  get issued(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }
}

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

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Cash___depositsResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;

  constructor(value0: BigInt, value1: BigInt, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }
}

export class Cash extends ethereum.SmartContract {
  static bind(address: Address): Cash {
    return new Cash("Cash", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  _deposits(param0: Address, param1: Bytes): Cash___depositsResult {
    let result = super.call(
      "_deposits",
      "_deposits(address,bytes32):(uint256,uint256,address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return new Cash___depositsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress()
    );
  }

  try__deposits(
    param0: Address,
    param1: Bytes
  ): ethereum.CallResult<Cash___depositsResult> {
    let result = super.tryCall(
      "_deposits",
      "_deposits(address,bytes32):(uint256,uint256,address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Cash___depositsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress()
      )
    );
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _cashtokenName(): Bytes {
    let result = super.call("_cashtokenName", "_cashtokenName():(bytes32)", []);

    return result[0].toBytes();
  }

  try__cashtokenName(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "_cashtokenName",
      "_cashtokenName():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  payIn(amount: BigInt, payer: Address, currency: Bytes): boolean {
    let result = super.call("payIn", "payIn(uint256,address,bytes32):(bool)", [
      ethereum.Value.fromUnsignedBigInt(amount),
      ethereum.Value.fromAddress(payer),
      ethereum.Value.fromFixedBytes(currency)
    ]);

    return result[0].toBoolean();
  }

  try_payIn(
    amount: BigInt,
    payer: Address,
    currency: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "payIn",
      "payIn(uint256,address,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(payer),
        ethereum.Value.fromFixedBytes(currency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  requestAddToBalance(tokens: BigInt, sender: Address): boolean {
    let result = super.call(
      "requestAddToBalance",
      "requestAddToBalance(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(tokens),
        ethereum.Value.fromAddress(sender)
      ]
    );

    return result[0].toBoolean();
  }

  try_requestAddToBalance(
    tokens: BigInt,
    sender: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "requestAddToBalance",
      "requestAddToBalance(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(tokens),
        ethereum.Value.fromAddress(sender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  burnCashTokens(amount: BigInt, party: Address, currency: Bytes): boolean {
    let result = super.call(
      "burnCashTokens",
      "burnCashTokens(uint256,address,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(party),
        ethereum.Value.fromFixedBytes(currency)
      ]
    );

    return result[0].toBoolean();
  }

  try_burnCashTokens(
    amount: BigInt,
    party: Address,
    currency: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "burnCashTokens",
      "burnCashTokens(uint256,address,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(party),
        ethereum.Value.fromFixedBytes(currency)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  requestDeductFromBalance(tokens: BigInt, receiver: Address): BigInt {
    let result = super.call(
      "requestDeductFromBalance",
      "requestDeductFromBalance(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokens),
        ethereum.Value.fromAddress(receiver)
      ]
    );

    return result[0].toBigInt();
  }

  try_requestDeductFromBalance(
    tokens: BigInt,
    receiver: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "requestDeductFromBalance",
      "requestDeductFromBalance(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokens),
        ethereum.Value.fromAddress(receiver)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transferFrom(sender: Address, receiver: Address, tokens: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(tokens)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    receiver: Address,
    tokens: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(tokens)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
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

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
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

  get name(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get currency(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get owner(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get oracle(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get token(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get fee(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class Initialize1Call extends ethereum.Call {
  get inputs(): Initialize1Call__Inputs {
    return new Initialize1Call__Inputs(this);
  }

  get outputs(): Initialize1Call__Outputs {
    return new Initialize1Call__Outputs(this);
  }
}

export class Initialize1Call__Inputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Initialize1Call__Outputs {
  _call: Initialize1Call;

  constructor(call: Initialize1Call) {
    this._call = call;
  }
}

export class RequestIssueCall extends ethereum.Call {
  get inputs(): RequestIssueCall__Inputs {
    return new RequestIssueCall__Inputs(this);
  }

  get outputs(): RequestIssueCall__Outputs {
    return new RequestIssueCall__Outputs(this);
  }
}

export class RequestIssueCall__Inputs {
  _call: RequestIssueCall;

  constructor(call: RequestIssueCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get buyer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get currency(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class RequestIssueCall__Outputs {
  _call: RequestIssueCall;

  constructor(call: RequestIssueCall) {
    this._call = call;
  }
}

export class PayInCall extends ethereum.Call {
  get inputs(): PayInCall__Inputs {
    return new PayInCall__Inputs(this);
  }

  get outputs(): PayInCall__Outputs {
    return new PayInCall__Outputs(this);
  }
}

export class PayInCall__Inputs {
  _call: PayInCall;

  constructor(call: PayInCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get payer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get currency(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class PayInCall__Outputs {
  _call: PayInCall;

  constructor(call: PayInCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RequestAddToBalanceCall extends ethereum.Call {
  get inputs(): RequestAddToBalanceCall__Inputs {
    return new RequestAddToBalanceCall__Inputs(this);
  }

  get outputs(): RequestAddToBalanceCall__Outputs {
    return new RequestAddToBalanceCall__Outputs(this);
  }
}

export class RequestAddToBalanceCall__Inputs {
  _call: RequestAddToBalanceCall;

  constructor(call: RequestAddToBalanceCall) {
    this._call = call;
  }

  get tokens(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RequestAddToBalanceCall__Outputs {
  _call: RequestAddToBalanceCall;

  constructor(call: RequestAddToBalanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCashTokensCall extends ethereum.Call {
  get inputs(): BurnCashTokensCall__Inputs {
    return new BurnCashTokensCall__Inputs(this);
  }

  get outputs(): BurnCashTokensCall__Outputs {
    return new BurnCashTokensCall__Outputs(this);
  }
}

export class BurnCashTokensCall__Inputs {
  _call: BurnCashTokensCall;

  constructor(call: BurnCashTokensCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get party(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get currency(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class BurnCashTokensCall__Outputs {
  _call: BurnCashTokensCall;

  constructor(call: BurnCashTokensCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RequestDeductFromBalanceCall extends ethereum.Call {
  get inputs(): RequestDeductFromBalanceCall__Inputs {
    return new RequestDeductFromBalanceCall__Inputs(this);
  }

  get outputs(): RequestDeductFromBalanceCall__Outputs {
    return new RequestDeductFromBalanceCall__Outputs(this);
  }
}

export class RequestDeductFromBalanceCall__Inputs {
  _call: RequestDeductFromBalanceCall;

  constructor(call: RequestDeductFromBalanceCall) {
    this._call = call;
  }

  get tokens(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RequestDeductFromBalanceCall__Outputs {
  _call: RequestDeductFromBalanceCall;

  constructor(call: RequestDeductFromBalanceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiver(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokens(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}
