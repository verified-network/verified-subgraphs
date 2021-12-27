import { BigInt } from "@graphprotocol/graph-ts"
import {
  System,
  HolderCreated,
  LedgerCreated,
  AccountCreated
} from "../generated/System/System"
import { Holder, Ledger, Account } from "../generated/schema"

export function handleHolderCreated(event: HolderCreated): void {
  let holder = new Holder(event.params.holder.toHex())
  holder.holderName = event.params.holderName
  holder.accountCreator = event.params.accountCreator.toString()
}

export function handleLedgerCreated(event: LedgerCreated): void {
  let ledger = new Ledger(event.params.ledger.toHex())
  ledger.ledgerName = event.params.ledgerName
  ledger.group = event.params.group
  ledger.holder = Holder.toString()
}

export function handleAccountCreated(event: AccountCreated): void {
  let account = new Account(event.params.account.toHex())
  account.accountName = event.params.accountName
  account.ledger = Ledger.toString()
}

