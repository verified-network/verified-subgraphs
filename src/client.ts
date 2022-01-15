import { BigInt } from "@graphprotocol/graph-ts"
import {
    Client,
    ManagerAdded
} from "../generated/Client/Client"
import { Manager } from "../generated/schema"

export function handleManagerAdded(event: ManagerAdded): void {
  let manager = new Manager(event.params.manager.toHex())
  manager.role = event.params.role
  manager.country = event.params.country
  manager.save()
}