import { BigInt } from "@graphprotocol/graph-ts"
import {
  BondIssued,
  BondRedeemed,
  BondPurchased,
  BondLiquidated
} from "../generated/Bond/Bond"
import {
  User,
  BondIssues,
  BondPurchases,
  BondRedemptions,
  BondLiquidations,
  Currency,
  Bond
} from "../generated/schema"

export function handleBondIssued(event: BondIssued): void {
  let issue = new BondIssues(event.params.token.toHex())  
  issue.bondName = event.params.bondName.toString()
  issue.party = event.params.party.toString()
  issue.amount = event.params.amount
  issue.currency = event.params.currency.toString()
  issue.collateralAmount = event.params.collateralAmount
  issue.issueTime = event.params.issueTime
  issue.save()
}

export function handleBondRedeemed(event: BondRedeemed): void {
  let redemption = new BondRedemptions(event.params.token.toHex())
  redemption.bondName = event.params.bondName.toString()
  redemption.party = event.params.party.toString()
  redemption.amount = event.params.amount
  redemption.currency = event.params.currency.toString()
  redemption.save()
}

export function handleBondPurchased(event: BondPurchased): void {
  let purchase = new BondPurchases(event.params.token.toHex())
  purchase.bondName = event.params.bondName.toString()
  purchase.party = event.params.party.toString()
  purchase.amount = event.params.amount
  purchase.currency = event.params.currency.toString()
  purchase.paidInAmount = event.params.paidInAmount
  purchase.purchaseTime = event.params.purchaseTime
  purchase.save()
}

export function handleBondLiquidated(event: BondLiquidated): void {
  let liquidation = new BondLiquidations(event.params.token.toHex())
  liquidation.bondName = event.params.bondName.toString()
  liquidation.party = event.params.party.toString()
  liquidation.amount = event.params.amount
  liquidation.currency = event.params.currency.toString()
  liquidation.save()
}

