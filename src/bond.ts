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
  
}

export function handleBondRedeemed(event: BondRedeemed): void {
  
}

export function handleBondPurchased(event: BondPurchased): void {

}

export function handleBondLiquidated(event: BondLiquidated): void {

}

