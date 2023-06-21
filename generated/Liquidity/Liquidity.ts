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

export class InvestorReturns extends ethereum.Event {
  get params(): InvestorReturns__Params {
    return new InvestorReturns__Params(this);
  }
}

export class InvestorReturns__Params {
  _event: InvestorReturns;

  constructor(event: InvestorReturns) {
    this._event = event;
  }

  get platform(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get investor(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vitta(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get prorataStake(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class IssuedVitta extends ethereum.Event {
  get params(): IssuedVitta__Params {
    return new IssuedVitta__Params(this);
  }
}

export class IssuedVitta__Params {
  _event: IssuedVitta;

  constructor(event: IssuedVitta) {
    this._event = event;
  }

  get investor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get LPToIssue(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ManagerReturns extends ethereum.Event {
  get params(): ManagerReturns__Params {
    return new ManagerReturns__Params(this);
  }
}

export class ManagerReturns__Params {
  _event: ManagerReturns;

  constructor(event: ManagerReturns) {
    this._event = event;
  }

  get platform(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get manager(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get distribution(): BigInt {
    return this._event.parameters[3].value.toBigInt();
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

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PlatformLiquidity extends ethereum.Event {
  get params(): PlatformLiquidity__Params {
    return new PlatformLiquidity__Params(this);
  }
}

export class PlatformLiquidity__Params {
  _event: PlatformLiquidity;

  constructor(event: PlatformLiquidity) {
    this._event = event;
  }

  get platform(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get manager(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get LPToken(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PlatformManagers extends ethereum.Event {
  get params(): PlatformManagers__Params {
    return new PlatformManagers__Params(this);
  }
}

export class PlatformManagers__Params {
  _event: PlatformManagers;

  constructor(event: PlatformManagers) {
    this._event = event;
  }

  get platform(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get manager(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlatformReturns extends ethereum.Event {
  get params(): PlatformReturns__Params {
    return new PlatformReturns__Params(this);
  }
}

export class PlatformReturns__Params {
  _event: PlatformReturns;

  constructor(event: PlatformReturns) {
    this._event = event;
  }

  get platform(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get vitta(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get distribution(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RegisterPlatform extends ethereum.Event {
  get params(): RegisterPlatform__Params {
    return new RegisterPlatform__Params(this);
  }
}

export class RegisterPlatform__Params {
  _event: RegisterPlatform;

  constructor(event: RegisterPlatform) {
    this._event = event;
  }

  get platform(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get platformName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class RequestIssue extends ethereum.Event {
  get params(): RequestIssue__Params {
    return new RequestIssue__Params(this);
  }
}

export class RequestIssue__Params {
  _event: RequestIssue;

  constructor(event: RequestIssue) {
    this._event = event;
  }

  get investor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RequestRate extends ethereum.Event {
  get params(): RequestRate__Params {
    return new RequestRate__Params(this);
  }
}

export class RequestRate__Params {
  _event: RequestRate;

  constructor(event: RequestRate) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SupportToken extends ethereum.Event {
  get params(): SupportToken__Params {
    return new SupportToken__Params(this);
  }
}

export class SupportToken__Params {
  _event: SupportToken;

  constructor(event: SupportToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenName(): string {
    return this._event.parameters[1].value.toString();
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

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Liquidity__getSupportedTokensResultValue0Struct extends ethereum.Tuple {
  get tokenName(): string {
    return this[0].toString();
  }

  get tokenAddress(): Address {
    return this[1].toAddress();
  }
}

export class Liquidity__getPlatformsResultValue0Struct extends ethereum.Tuple {
  get platformName(): Bytes {
    return this[0].toBytes();
  }

  get platformAddress(): Address {
    return this[1].toAddress();
  }
}

export class Liquidity__getInvestorsResultValue0Struct extends ethereum.Tuple {
  get assetInvested(): string {
    return this[0].toString();
  }

  get investorAddress(): Address {
    return this[1].toAddress();
  }
}

export class Liquidity__getPlatformPerformanceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Liquidity__getManagerPerformanceResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Liquidity extends ethereum.SmartContract {
  static bind(address: Address): Liquidity {
    return new Liquidity("Liquidity", address);
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

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkSupportForToken(_token: Address): boolean {
    let result = super.call(
      "checkSupportForToken",
      "checkSupportForToken(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );

    return result[0].toBoolean();
  }

  try_checkSupportForToken(_token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkSupportForToken",
      "checkSupportForToken(address):(bool)",
      [ethereum.Value.fromAddress(_token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getSupportedTokens(): Array<Liquidity__getSupportedTokensResultValue0Struct> {
    let result = super.call(
      "getSupportedTokens",
      "getSupportedTokens():((string,address)[])",
      []
    );

    return result[0].toTupleArray<
      Liquidity__getSupportedTokensResultValue0Struct
    >();
  }

  try_getSupportedTokens(): ethereum.CallResult<
    Array<Liquidity__getSupportedTokensResultValue0Struct>
  > {
    let result = super.tryCall(
      "getSupportedTokens",
      "getSupportedTokens():((string,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Liquidity__getSupportedTokensResultValue0Struct>()
    );
  }

  getPlatforms(): Array<Liquidity__getPlatformsResultValue0Struct> {
    let result = super.call(
      "getPlatforms",
      "getPlatforms():((bytes32,address)[])",
      []
    );

    return result[0].toTupleArray<Liquidity__getPlatformsResultValue0Struct>();
  }

  try_getPlatforms(): ethereum.CallResult<
    Array<Liquidity__getPlatformsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getPlatforms",
      "getPlatforms():((bytes32,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Liquidity__getPlatformsResultValue0Struct>()
    );
  }

  getManagers(_platform: Address): Array<Address> {
    let result = super.call("getManagers", "getManagers(address):(address[])", [
      ethereum.Value.fromAddress(_platform)
    ]);

    return result[0].toAddressArray();
  }

  try_getManagers(_platform: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getManagers",
      "getManagers(address):(address[])",
      [ethereum.Value.fromAddress(_platform)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getInvestors(): Array<Liquidity__getInvestorsResultValue0Struct> {
    let result = super.call(
      "getInvestors",
      "getInvestors():((string,address)[])",
      []
    );

    return result[0].toTupleArray<Liquidity__getInvestorsResultValue0Struct>();
  }

  try_getInvestors(): ethereum.CallResult<
    Array<Liquidity__getInvestorsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getInvestors",
      "getInvestors():((string,address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Liquidity__getInvestorsResultValue0Struct>()
    );
  }

  getInvestment(_investor: Address, _token: Address): BigInt {
    let result = super.call(
      "getInvestment",
      "getInvestment(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_investor),
        ethereum.Value.fromAddress(_token)
      ]
    );

    return result[0].toBigInt();
  }

  try_getInvestment(
    _investor: Address,
    _token: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getInvestment",
      "getInvestment(address,address):(uint256)",
      [
        ethereum.Value.fromAddress(_investor),
        ethereum.Value.fromAddress(_token)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPlatformPerformance(
    _platform: Address
  ): Liquidity__getPlatformPerformanceResult {
    let result = super.call(
      "getPlatformPerformance",
      "getPlatformPerformance(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_platform)]
    );

    return new Liquidity__getPlatformPerformanceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getPlatformPerformance(
    _platform: Address
  ): ethereum.CallResult<Liquidity__getPlatformPerformanceResult> {
    let result = super.tryCall(
      "getPlatformPerformance",
      "getPlatformPerformance(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(_platform)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Liquidity__getPlatformPerformanceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getManagerPerformance(
    _platform: Address,
    _token: Address,
    _manager: Address
  ): Liquidity__getManagerPerformanceResult {
    let result = super.call(
      "getManagerPerformance",
      "getManagerPerformance(address,address,address):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_platform),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_manager)
      ]
    );

    return new Liquidity__getManagerPerformanceResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getManagerPerformance(
    _platform: Address,
    _token: Address,
    _manager: Address
  ): ethereum.CallResult<Liquidity__getManagerPerformanceResult> {
    let result = super.tryCall(
      "getManagerPerformance",
      "getManagerPerformance(address,address,address):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_platform),
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_manager)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Liquidity__getManagerPerformanceResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  balance(investor: Address): BigInt {
    let result = super.call("balance", "balance(address):(uint256)", [
      ethereum.Value.fromAddress(investor)
    ]);

    return result[0].toBigInt();
  }

  try_balance(investor: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balance", "balance(address):(uint256)", [
      ethereum.Value.fromAddress(investor)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _cap(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _limit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _share(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _vitta(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
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

export class CreateSupplyCall extends ethereum.Call {
  get inputs(): CreateSupplyCall__Inputs {
    return new CreateSupplyCall__Inputs(this);
  }

  get outputs(): CreateSupplyCall__Outputs {
    return new CreateSupplyCall__Outputs(this);
  }
}

export class CreateSupplyCall__Inputs {
  _call: CreateSupplyCall;

  constructor(call: CreateSupplyCall) {
    this._call = call;
  }

  get _cap(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _limit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateSupplyCall__Outputs {
  _call: CreateSupplyCall;

  constructor(call: CreateSupplyCall) {
    this._call = call;
  }
}

export class SupportTokensCall extends ethereum.Call {
  get inputs(): SupportTokensCall__Inputs {
    return new SupportTokensCall__Inputs(this);
  }

  get outputs(): SupportTokensCall__Outputs {
    return new SupportTokensCall__Outputs(this);
  }
}

export class SupportTokensCall__Inputs {
  _call: SupportTokensCall;

  constructor(call: SupportTokensCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SupportTokensCall__Outputs {
  _call: SupportTokensCall;

  constructor(call: SupportTokensCall) {
    this._call = call;
  }
}

export class RegisterPlatformCall extends ethereum.Call {
  get inputs(): RegisterPlatformCall__Inputs {
    return new RegisterPlatformCall__Inputs(this);
  }

  get outputs(): RegisterPlatformCall__Outputs {
    return new RegisterPlatformCall__Outputs(this);
  }
}

export class RegisterPlatformCall__Inputs {
  _call: RegisterPlatformCall;

  constructor(call: RegisterPlatformCall) {
    this._call = call;
  }

  get _liquidityPlatform(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _platformName(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class RegisterPlatformCall__Outputs {
  _call: RegisterPlatformCall;

  constructor(call: RegisterPlatformCall) {
    this._call = call;
  }
}

export class AddManagerCall extends ethereum.Call {
  get inputs(): AddManagerCall__Inputs {
    return new AddManagerCall__Inputs(this);
  }

  get outputs(): AddManagerCall__Outputs {
    return new AddManagerCall__Outputs(this);
  }
}

export class AddManagerCall__Inputs {
  _call: AddManagerCall;

  constructor(call: AddManagerCall) {
    this._call = call;
  }

  get _platform(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _manager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddManagerCall__Outputs {
  _call: AddManagerCall;

  constructor(call: AddManagerCall) {
    this._call = call;
  }
}

export class RemoveManagerCall extends ethereum.Call {
  get inputs(): RemoveManagerCall__Inputs {
    return new RemoveManagerCall__Inputs(this);
  }

  get outputs(): RemoveManagerCall__Outputs {
    return new RemoveManagerCall__Outputs(this);
  }
}

export class RemoveManagerCall__Inputs {
  _call: RemoveManagerCall;

  constructor(call: RemoveManagerCall) {
    this._call = call;
  }

  get _platform(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _manager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveManagerCall__Outputs {
  _call: RemoveManagerCall;

  constructor(call: RemoveManagerCall) {
    this._call = call;
  }
}

export class BuyCall extends ethereum.Call {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class IssueCall extends ethereum.Call {
  get inputs(): IssueCall__Inputs {
    return new IssueCall__Inputs(this);
  }

  get outputs(): IssueCall__Outputs {
    return new IssueCall__Outputs(this);
  }
}

export class IssueCall__Inputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }

  get _investor(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _LPToIssue(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class IssueCall__Outputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }
}

export class ProvideLiquidityCall extends ethereum.Call {
  get inputs(): ProvideLiquidityCall__Inputs {
    return new ProvideLiquidityCall__Inputs(this);
  }

  get outputs(): ProvideLiquidityCall__Outputs {
    return new ProvideLiquidityCall__Outputs(this);
  }
}

export class ProvideLiquidityCall__Inputs {
  _call: ProvideLiquidityCall;

  constructor(call: ProvideLiquidityCall) {
    this._call = call;
  }

  get _platform(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _manager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _liquidity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ProvideLiquidityCall__Outputs {
  _call: ProvideLiquidityCall;

  constructor(call: ProvideLiquidityCall) {
    this._call = call;
  }
}

export class DistributeCall extends ethereum.Call {
  get inputs(): DistributeCall__Inputs {
    return new DistributeCall__Inputs(this);
  }

  get outputs(): DistributeCall__Outputs {
    return new DistributeCall__Outputs(this);
  }
}

export class DistributeCall__Inputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }

  get _distribution(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _manager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DistributeCall__Outputs {
  _call: DistributeCall;

  constructor(call: DistributeCall) {
    this._call = call;
  }
}

export class PayOutCall extends ethereum.Call {
  get inputs(): PayOutCall__Inputs {
    return new PayOutCall__Inputs(this);
  }

  get outputs(): PayOutCall__Outputs {
    return new PayOutCall__Outputs(this);
  }
}

export class PayOutCall__Inputs {
  _call: PayOutCall;

  constructor(call: PayOutCall) {
    this._call = call;
  }

  get _distribution(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _platform(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class PayOutCall__Outputs {
  _call: PayOutCall;

  constructor(call: PayOutCall) {
    this._call = call;
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

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
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

export class SetOracleCall extends ethereum.Call {
  get inputs(): SetOracleCall__Inputs {
    return new SetOracleCall__Inputs(this);
  }

  get outputs(): SetOracleCall__Outputs {
    return new SetOracleCall__Outputs(this);
  }
}

export class SetOracleCall__Inputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get _oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOracleCall__Outputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }
}

export class SetExchangeRateCall extends ethereum.Call {
  get inputs(): SetExchangeRateCall__Inputs {
    return new SetExchangeRateCall__Inputs(this);
  }

  get outputs(): SetExchangeRateCall__Outputs {
    return new SetExchangeRateCall__Outputs(this);
  }
}

export class SetExchangeRateCall__Inputs {
  _call: SetExchangeRateCall;

  constructor(call: SetExchangeRateCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rate(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetExchangeRateCall__Outputs {
  _call: SetExchangeRateCall;

  constructor(call: SetExchangeRateCall) {
    this._call = call;
  }
}

export class SetTreasurerCall extends ethereum.Call {
  get inputs(): SetTreasurerCall__Inputs {
    return new SetTreasurerCall__Inputs(this);
  }

  get outputs(): SetTreasurerCall__Outputs {
    return new SetTreasurerCall__Outputs(this);
  }
}

export class SetTreasurerCall__Inputs {
  _call: SetTreasurerCall;

  constructor(call: SetTreasurerCall) {
    this._call = call;
  }

  get _treasurer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTreasurerCall__Outputs {
  _call: SetTreasurerCall;

  constructor(call: SetTreasurerCall) {
    this._call = call;
  }
}
