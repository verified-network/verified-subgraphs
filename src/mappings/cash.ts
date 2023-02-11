import { BigInt } from "@graphprotocol/graph-ts";
import {
  CashIssued,
  CashRedeemed,
  CashIssueRequest,
  CashTransfer,
} from "../../generated/templates/Cash/Cash";
import {
  User,
  CashIssues,
  CashDeposited,
  CashRedemptions,
  CashTransfers,
  Currency,
} from "../../generated/schema";

export function handleCashIssued(event: CashIssued): void {
  let issue = new CashIssues(event.params.party.toHex());
  issue.party = event.params.party.toString();
  issue.amount = event.params.amount.toBigDecimal();
  issue.currency = event.params.currency.toString();
  issue.save();
}

export function handleCashRedeemed(event: CashRedeemed): void {
  let redemption = new CashRedemptions(event.params.redeemer.toHex());
  redemption.party = event.params.redeemer.toString();
  redemption.amount = event.params.amount.toBigDecimal();
  redemption.currency = event.params.currency.toString();
  redemption.save();
}

export function handleCashDeposits(event: CashIssueRequest): void {
  let deposit = new CashDeposited(event.params.party.toHex());
  deposit.party = event.params.party.toString();
  deposit.amount = event.params.amount.toBigDecimal();
  deposit.currency = event.params.currency.toString();
  deposit.save();
}

export function handleCashTransfer(event: CashTransfer): void {
  let transfer = new CashTransfers(event.params.transferor.toHex());
  transfer.transferor = event.params.transferor.toString();
  transfer.transferee = event.params.transferee.toString();
  transfer.amount = event.params.amount.toBigDecimal();
  transfer.currency = event.params.currency.toString();
  transfer.save();
}
