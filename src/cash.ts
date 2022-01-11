import { BigInt } from "@graphprotocol/graph-ts"
import {
  CashIssued,
  CashRedeemed,
  CashDeposits,
  CashTransfer
} from "../generated/Cash/Cash"
import {
  User,
  CashIssues,
  CashDeposited,
  CashRedemptions,
  CashTransfers,
  Currency
} from "../generated/schema"

export function handleCashIssued(event: CashIssued): void {
  let issue = new CashIssues(event.params.party.toHex())
  issue.amount = event.params.amount
  issue.currency = event.params.currency.toString()
  issue.save();
}

export function handleCashRedeemed(event: CashRedeemed): void {
  let redemption = new CashRedemptions(event.params.party.toHex())
  redemption.amount = event.params.amount
  redemption.currency = event.params.currency.toString()
  redemption.save()
}

export function handleCashDeposits(event: CashDeposits): void {
  let deposit = new CashDeposited(event.params.party.toHex())
  deposit.amount = event.params.amount
  deposit.currency = event.params.currency.toString()
  deposit.save()
}

export function handleCashTransfer(event: CashTransfer): void {
  let transfer = new CashTransfers(event.params.party.toHex())
  transfer.amount = event.params.amount
  transfer.currency = event.params.currency.toString()
  transfer.save()
}

