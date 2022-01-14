import { BigInt } from "@graphprotocol/graph-ts"
import {
    Kyc,
    KycUpdate
} from "../generated/Kyc/Kyc"
import { User } from "../generated/schema"

export function handleKycUpdated(event: KycUpdate): void {
  let user = new User(event.params.client.toHex())
  user.client = event.params.client
  user.save()
}