import { BigInt } from "@graphprotocol/graph-ts"
import {
        Security, 
        Transfer, 
        Approval 
      } from "../generated/Security/Security"
import { SecurityTransfers } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let transfer = new SecurityTransfers(event.params.from.toHex())
  transfer.to = event.params.to.toString()
  transfer.value = event.params.value
  transfer.save()
}

export function handleApproval(event: Approval): void {

}
