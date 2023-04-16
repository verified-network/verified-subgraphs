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

export class securitiesAdded extends ethereum.Event {
  get params(): securitiesAdded__Params {
    return new securitiesAdded__Params(this);
  }
}

export class securitiesAdded__Params {
  _event: securitiesAdded;

  constructor(event: securitiesAdded) {
    this._event = event;
  }

  get security(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get productCategory(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get issuer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get isin(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get currency(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get restricted(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get issueManager(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get restrictions(): Array<Bytes> {
    return this._event.parameters[7].value.toBytesArray();
  }

  get country(): Bytes {
    return this._event.parameters[8].value.toBytes();
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

export class ProxyCreated extends ethereum.Event {
  get params(): ProxyCreated__Params {
    return new ProxyCreated__Params(this);
  }
}

export class ProxyCreated__Params {
  _event: ProxyCreated;

  constructor(event: ProxyCreated) {
    this._event = event;
  }

  get proxy(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SecuritiesFactory__getSecurityTokenResult {
  value0: Address;
  value1: Bytes;
  value2: Bytes;
  value3: Address;
  value4: boolean;

  constructor(
    value0: Address,
    value1: Bytes,
    value2: Bytes,
    value3: Address,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }
}

export class SecuritiesFactory extends ethereum.SmartContract {
  static bind(address: Address): SecuritiesFactory {
    return new SecuritiesFactory("SecuritiesFactory", address);
  }

  issues(param0: BigInt): Address {
    let result = super.call("issues", "issues(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_issues(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("issues", "issues(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSigner(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): Address {
    let result = super.call(
      "getSigner",
      "getSigner(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );

    return result[0].toAddress();
  }

  try_getSigner(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSigner",
      "getSigner(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deploySigned(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): Address {
    let result = super.call(
      "deploySigned",
      "deploySigned(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );

    return result[0].toAddress();
  }

  try_deploySigned(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes,
    _signature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deploySigned",
      "deploySigned(uint256,address,address,bytes,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_signature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deploy(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes
  ): Address {
    let result = super.call(
      "deploy",
      "deploy(uint256,address,address,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toAddress();
  }

  try_deploy(
    _salt: BigInt,
    _logic: Address,
    _admin: Address,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deploy",
      "deploy(uint256,address,address,bytes):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_logic),
        ethereum.Value.fromAddress(_admin),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDeploymentAddress(_salt: BigInt, _sender: Address): Address {
    let result = super.call(
      "getDeploymentAddress",
      "getDeploymentAddress(uint256,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_sender)
      ]
    );

    return result[0].toAddress();
  }

  try_getDeploymentAddress(
    _salt: BigInt,
    _sender: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getDeploymentAddress",
      "getDeploymentAddress(uint256,address):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_salt),
        ethereum.Value.fromAddress(_sender)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  deployMinimal(_logic: Address, _data: Bytes): Address {
    let result = super.call(
      "deployMinimal",
      "deployMinimal(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_data)]
    );

    return result[0].toAddress();
  }

  try_deployMinimal(
    _logic: Address,
    _data: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployMinimal",
      "deployMinimal(address,bytes):(address)",
      [ethereum.Value.fromAddress(_logic), ethereum.Value.fromBytes(_data)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getIssues(): Array<Address> {
    let result = super.call("getIssues", "getIssues():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getIssues(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall("getIssues", "getIssues():(address[])", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getHolder(_securityToken: Address): Address {
    let result = super.call("getHolder", "getHolder(address):(address)", [
      ethereum.Value.fromAddress(_securityToken)
    ]);

    return result[0].toAddress();
  }

  try_getHolder(_securityToken: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("getHolder", "getHolder(address):(address)", [
      ethereum.Value.fromAddress(_securityToken)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSecurity(_securityToken: Address): Address {
    let result = super.call("getSecurity", "getSecurity(address):(address)", [
      ethereum.Value.fromAddress(_securityToken)
    ]);

    return result[0].toAddress();
  }

  try_getSecurity(_securityToken: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSecurity",
      "getSecurity(address):(address)",
      [ethereum.Value.fromAddress(_securityToken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSecurityToken(
    _securityToken: Address,
    _issuer: Address
  ): SecuritiesFactory__getSecurityTokenResult {
    let result = super.call(
      "getSecurityToken",
      "getSecurityToken(address,address):(address,bytes32,bytes32,address,bool)",
      [
        ethereum.Value.fromAddress(_securityToken),
        ethereum.Value.fromAddress(_issuer)
      ]
    );

    return new SecuritiesFactory__getSecurityTokenResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBytes(),
      result[3].toAddress(),
      result[4].toBoolean()
    );
  }

  try_getSecurityToken(
    _securityToken: Address,
    _issuer: Address
  ): ethereum.CallResult<SecuritiesFactory__getSecurityTokenResult> {
    let result = super.tryCall(
      "getSecurityToken",
      "getSecurityToken(address,address):(address,bytes32,bytes32,address,bool)",
      [
        ethereum.Value.fromAddress(_securityToken),
        ethereum.Value.fromAddress(_issuer)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SecuritiesFactory__getSecurityTokenResult(
        value[0].toAddress(),
        value[1].toBytes(),
        value[2].toBytes(),
        value[3].toAddress(),
        value[4].toBoolean()
      )
    );
  }

  checkProduct(issue: Address): boolean {
    let result = super.call("checkProduct", "checkProduct(address):(bool)", [
      ethereum.Value.fromAddress(issue)
    ]);

    return result[0].toBoolean();
  }

  try_checkProduct(issue: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("checkProduct", "checkProduct(address):(bool)", [
      ethereum.Value.fromAddress(issue)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCustodian(_securityToken: Address, _issuer: Address): Address {
    let result = super.call(
      "getCustodian",
      "getCustodian(address,address):(address)",
      [
        ethereum.Value.fromAddress(_securityToken),
        ethereum.Value.fromAddress(_issuer)
      ]
    );

    return result[0].toAddress();
  }

  try_getCustodian(
    _securityToken: Address,
    _issuer: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCustodian",
      "getCustodian(address,address):(address)",
      [
        ethereum.Value.fromAddress(_securityToken),
        ethereum.Value.fromAddress(_issuer)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRestrictedCountries(_security: Address): Array<Bytes> {
    let result = super.call(
      "getRestrictedCountries",
      "getRestrictedCountries(address):(bytes32[])",
      [ethereum.Value.fromAddress(_security)]
    );

    return result[0].toBytesArray();
  }

  try_getRestrictedCountries(
    _security: Address
  ): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getRestrictedCountries",
      "getRestrictedCountries(address):(bytes32[])",
      [ethereum.Value.fromAddress(_security)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getDP(_securityToken: Address): Address {
    let result = super.call("getDP", "getDP(address):(address)", [
      ethereum.Value.fromAddress(_securityToken)
    ]);

    return result[0].toAddress();
  }

  try_getDP(_securityToken: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("getDP", "getDP(address):(address)", [
      ethereum.Value.fromAddress(_securityToken)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DeploySignedCall extends ethereum.Call {
  get inputs(): DeploySignedCall__Inputs {
    return new DeploySignedCall__Inputs(this);
  }

  get outputs(): DeploySignedCall__Outputs {
    return new DeploySignedCall__Outputs(this);
  }
}

export class DeploySignedCall__Inputs {
  _call: DeploySignedCall;

  constructor(call: DeploySignedCall) {
    this._call = call;
  }

  get _salt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _logic(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _signature(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class DeploySignedCall__Outputs {
  _call: DeploySignedCall;

  constructor(call: DeploySignedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployCall extends ethereum.Call {
  get inputs(): DeployCall__Inputs {
    return new DeployCall__Inputs(this);
  }

  get outputs(): DeployCall__Outputs {
    return new DeployCall__Outputs(this);
  }
}

export class DeployCall__Inputs {
  _call: DeployCall;

  constructor(call: DeployCall) {
    this._call = call;
  }

  get _salt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _logic(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _admin(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DeployCall__Outputs {
  _call: DeployCall;

  constructor(call: DeployCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
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

export class DeployMinimalCall extends ethereum.Call {
  get inputs(): DeployMinimalCall__Inputs {
    return new DeployMinimalCall__Inputs(this);
  }

  get outputs(): DeployMinimalCall__Outputs {
    return new DeployMinimalCall__Outputs(this);
  }
}

export class DeployMinimalCall__Inputs {
  _call: DeployMinimalCall;

  constructor(call: DeployMinimalCall) {
    this._call = call;
  }

  get _logic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class DeployMinimalCall__Outputs {
  _call: DeployMinimalCall;

  constructor(call: DeployMinimalCall) {
    this._call = call;
  }

  get proxy(): Address {
    return this._call.outputValues[0].value.toAddress();
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

  get _security(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bridge(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _client(): Address {
    return this._call.inputValues[2].value.toAddress();
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

export class SetSignerCall extends ethereum.Call {
  get inputs(): SetSignerCall__Inputs {
    return new SetSignerCall__Inputs(this);
  }

  get outputs(): SetSignerCall__Outputs {
    return new SetSignerCall__Outputs(this);
  }
}

export class SetSignerCall__Inputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }

  get _signer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSignerCall__Outputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }
}

export class IssueSecurityCall extends ethereum.Call {
  get inputs(): IssueSecurityCall__Inputs {
    return new IssueSecurityCall__Inputs(this);
  }

  get outputs(): IssueSecurityCall__Outputs {
    return new IssueSecurityCall__Outputs(this);
  }
}

export class IssueSecurityCall__Inputs {
  _call: IssueSecurityCall;

  constructor(call: IssueSecurityCall) {
    this._call = call;
  }

  get security(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get productCategory(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get company(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get isin(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get currency(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get issuer(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get intermediary(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get encodedRestrictions(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get country(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }

  get qualified(): boolean {
    return this._call.inputValues[9].value.toBoolean();
  }
}

export class IssueSecurityCall__Outputs {
  _call: IssueSecurityCall;

  constructor(call: IssueSecurityCall) {
    this._call = call;
  }
}

export class AddBalanceCall extends ethereum.Call {
  get inputs(): AddBalanceCall__Inputs {
    return new AddBalanceCall__Inputs(this);
  }

  get outputs(): AddBalanceCall__Outputs {
    return new AddBalanceCall__Outputs(this);
  }
}

export class AddBalanceCall__Inputs {
  _call: AddBalanceCall;

  constructor(call: AddBalanceCall) {
    this._call = call;
  }

  get security(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get transferor(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get transferee(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AddBalanceCall__Outputs {
  _call: AddBalanceCall;

  constructor(call: AddBalanceCall) {
    this._call = call;
  }
}

export class SetCustodianCall extends ethereum.Call {
  get inputs(): SetCustodianCall__Inputs {
    return new SetCustodianCall__Inputs(this);
  }

  get outputs(): SetCustodianCall__Outputs {
    return new SetCustodianCall__Outputs(this);
  }
}

export class SetCustodianCall__Inputs {
  _call: SetCustodianCall;

  constructor(call: SetCustodianCall) {
    this._call = call;
  }

  get _securityToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _issuer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _custodian(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetCustodianCall__Outputs {
  _call: SetCustodianCall;

  constructor(call: SetCustodianCall) {
    this._call = call;
  }
}

export class RestrictCountryCall extends ethereum.Call {
  get inputs(): RestrictCountryCall__Inputs {
    return new RestrictCountryCall__Inputs(this);
  }

  get outputs(): RestrictCountryCall__Outputs {
    return new RestrictCountryCall__Outputs(this);
  }
}

export class RestrictCountryCall__Inputs {
  _call: RestrictCountryCall;

  constructor(call: RestrictCountryCall) {
    this._call = call;
  }

  get _security(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _countries(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }
}

export class RestrictCountryCall__Outputs {
  _call: RestrictCountryCall;

  constructor(call: RestrictCountryCall) {
    this._call = call;
  }
}
