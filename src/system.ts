import { BigInt } from "@graphprotocol/graph-ts"
import {
  System,
  HolderCreated,
  LedgerCreated,
  AccountCreated
} from "../generated/System/System"
import { Holder, Ledger, LedgerAccount } from "../generated/schema"
import { Account } from "../generated/templates"

export function handleHolderCreated(event: HolderCreated): void {
  let holder = new Holder(event.params.holder.toHex())
  holder.holderName = event.params.holderName
  holder.accountCreator = event.params.accountCreator.toString()
  holder.save()
}

export function handleLedgerCreated(event: LedgerCreated): void {
  let ledger = new Ledger(event.params.ledger.toHex())
  ledger.ledgerName = event.params.ledgerName
  ledger.group = event.params.group
  ledger.holder = event.params.holder.toString()
  ledger.save()
}

export function handleAccountCreated(event: AccountCreated): void {
  Account.create(event.params.account)
  let account = new LedgerAccount(event.params.account.toHex())
  account.accountName = event.params.accountName
  account.ledger = event.params.ledger.toString()
  account.save()
}

