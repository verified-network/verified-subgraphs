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

export class ManagerAdded extends ethereum.Event {
  get params(): ManagerAdded__Params {
    return new ManagerAdded__Params(this);
  }
}

export class ManagerAdded__Params {
  _event: ManagerAdded;

  constructor(event: ManagerAdded) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get submanager(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get role(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get country(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get managerId(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class ManagerRemoved extends ethereum.Event {
  get params(): ManagerRemoved__Params {
    return new ManagerRemoved__Params(this);
  }
}

export class ManagerRemoved__Params {
  _event: ManagerRemoved;

  constructor(event: ManagerRemoved) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get submanager(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get role(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get country(): Bytes {
    return this._event.parameters[3].value.toBytes();
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

export class UserAdded extends ethereum.Event {
  get params(): UserAdded__Params {
    return new UserAdded__Params(this);
  }
}

export class UserAdded__Params {
  _event: UserAdded;

  constructor(event: UserAdded) {
    this._event = event;
  }

  get client(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get surname(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get country(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get status(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Client__getRoleResult {
  value0: Bytes;
  value1: Bytes;
  value2: Bytes;

  constructor(value0: Bytes, value1: Bytes, value2: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    return map;
  }
}

export class Client__getClientKYCResult {
  value0: Bytes;
  value1: Bytes;
  value2: Bytes;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Bytes,
    value1: Bytes,
    value2: Bytes,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Client extends ethereum.SmartContract {
  static bind(address: Address): Client {
    return new Client("Client", address);
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

  getRole(_user: Address): Client__getRoleResult {
    let result = super.call(
      "getRole",
      "getRole(address):(bytes32,bytes32,bytes32)",
      [ethereum.Value.fromAddress(_user)]
    );

    return new Client__getRoleResult(
      result[0].toBytes(),
      result[1].toBytes(),
      result[2].toBytes()
    );
  }

  try_getRole(_user: Address): ethereum.CallResult<Client__getRoleResult> {
    let result = super.tryCall(
      "getRole",
      "getRole(address):(bytes32,bytes32,bytes32)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Client__getRoleResult(
        value[0].toBytes(),
        value[1].toBytes(),
        value[2].toBytes()
      )
    );
  }

  getAMLStatus(client: Address): boolean {
    let result = super.call("getAMLStatus", "getAMLStatus(address):(bool)", [
      ethereum.Value.fromAddress(client)
    ]);

    return result[0].toBoolean();
  }

  try_getAMLStatus(client: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("getAMLStatus", "getAMLStatus(address):(bool)", [
      ethereum.Value.fromAddress(client)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getClientKYC(client: Address): Client__getClientKYCResult {
    let result = super.call(
      "getClientKYC",
      "getClientKYC(address):(bytes32,bytes32,bytes32,uint256,uint256)",
      [ethereum.Value.fromAddress(client)]
    );

    return new Client__getClientKYCResult(
      result[0].toBytes(),
      result[1].toBytes(),
      result[2].toBytes(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getClientKYC(
    client: Address
  ): ethereum.CallResult<Client__getClientKYCResult> {
    let result = super.tryCall(
      "getClientKYC",
      "getClientKYC(address):(bytes32,bytes32,bytes32,uint256,uint256)",
      [ethereum.Value.fromAddress(client)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Client__getClientKYCResult(
        value[0].toBytes(),
        value[1].toBytes(),
        value[2].toBytes(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getTransferAgent(party: Address): Bytes {
    let result = super.call(
      "getTransferAgent",
      "getTransferAgent(address):(bytes32)",
      [ethereum.Value.fromAddress(party)]
    );

    return result[0].toBytes();
  }

  try_getTransferAgent(party: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getTransferAgent",
      "getTransferAgent(address):(bytes32)",
      [ethereum.Value.fromAddress(party)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  get _signer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
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

export class AddRoleCall extends ethereum.Call {
  get inputs(): AddRoleCall__Inputs {
    return new AddRoleCall__Inputs(this);
  }

  get outputs(): AddRoleCall__Outputs {
    return new AddRoleCall__Outputs(this);
  }
}

export class AddRoleCall__Inputs {
  _call: AddRoleCall;

  constructor(call: AddRoleCall) {
    this._call = call;
  }

  get _manager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _submanager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _country(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _role(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _id(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _hashedMessage(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _v(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }
}

export class AddRoleCall__Outputs {
  _call: AddRoleCall;

  constructor(call: AddRoleCall) {
    this._call = call;
  }
}

export class RemoveRoleCall extends ethereum.Call {
  get inputs(): RemoveRoleCall__Inputs {
    return new RemoveRoleCall__Inputs(this);
  }

  get outputs(): RemoveRoleCall__Outputs {
    return new RemoveRoleCall__Outputs(this);
  }
}

export class RemoveRoleCall__Inputs {
  _call: RemoveRoleCall;

  constructor(call: RemoveRoleCall) {
    this._call = call;
  }

  get _manager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _submanager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _country(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _role(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _hashedMessage(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _v(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class RemoveRoleCall__Outputs {
  _call: RemoveRoleCall;

  constructor(call: RemoveRoleCall) {
    this._call = call;
  }
}

export class KycUpdateCall extends ethereum.Call {
  get inputs(): KycUpdateCall__Inputs {
    return new KycUpdateCall__Inputs(this);
  }

  get outputs(): KycUpdateCall__Outputs {
    return new KycUpdateCall__Outputs(this);
  }
}

export class KycUpdateCall__Inputs {
  _call: KycUpdateCall;

  constructor(call: KycUpdateCall) {
    this._call = call;
  }

  get client(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get surname(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get country(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get status(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _hashedMessage(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _v(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }
}

export class KycUpdateCall__Outputs {
  _call: KycUpdateCall;

  constructor(call: KycUpdateCall) {
    this._call = call;
  }
}

export class SetAmlScoreCall extends ethereum.Call {
  get inputs(): SetAmlScoreCall__Inputs {
    return new SetAmlScoreCall__Inputs(this);
  }

  get outputs(): SetAmlScoreCall__Outputs {
    return new SetAmlScoreCall__Outputs(this);
  }
}

export class SetAmlScoreCall__Inputs {
  _call: SetAmlScoreCall;

  constructor(call: SetAmlScoreCall) {
    this._call = call;
  }

  get client(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get score(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetAmlScoreCall__Outputs {
  _call: SetAmlScoreCall;

  constructor(call: SetAmlScoreCall) {
    this._call = call;
  }
}
