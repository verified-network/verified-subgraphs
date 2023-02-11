import { BigInt } from "@graphprotocol/graph-ts";
import {
  BondIssued,
  BondRedeemed,
  BondPurchased,
  BondIssueRequest,
} from "../../generated/templates/Bond/Bond";
import {
  User,
  BondIssues,
  BondPurchases,
  BondRedemptions,
  BondIssueRequests,
  Currency,
} from "../../generated/schema";

export function handleBondIssued(event: BondIssued): void {
  let issue = new BondIssues(event.params.token.toHex());
  issue.issuer = event.params.issuer.toString();
  issue.token = event.params.token.toString();
  issue.collateralCurrency = event.params.collateralCurrency.toString();
  issue.issuedAmount = event.params.issuedAmount.toBigDecimal();
  issue.save();
}

export function handleBondRedeemed(event: BondRedeemed): void {
  let redemption = new BondRedemptions(event.params.token.toHex());
  redemption.redeemer = event.params.redeemer.toString();
  redemption.token = event.params.token.toString();
  redemption.redemptionCurrency = event.params.redemptionCurrency.toString();
  redemption.redemptionAmount = event.params.redemptionAmount.toBigDecimal();
  redemption.save();
}

export function handleBondPurchased(event: BondPurchased): void {
  let purchase = new BondPurchases(event.params.token.toHex());
  purchase.purchaser = event.params.purchaser.toString();
  purchase.token = event.params.token.toString();
  purchase.paidInCurrency = event.params.paidInCurrency.toString();
  purchase.purchasedAmount = event.params.purchasedAmount.toBigDecimal();
  purchase.save();
}

export function handleBondIssueRequest(event: BondIssueRequest): void {
  let request = new BondIssueRequests(event.params.issuer.toHex());
  request.issuer = event.params.issuer.toString();
  request.currency = event.params.currency.toString();
  request.amount = event.params.amount.toBigDecimal();
  request.save();
}
