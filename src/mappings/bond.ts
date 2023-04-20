import {
  BondIssued,
  BondRedeemed,
  BondPurchased,
  BondLiquidated,
} from "../../generated/templates/Bond/Bond";
import {
  BondIssues,
  BondPurchases,
  BondRedemptions,
  BondLiquidations,
} from "../../generated/schema";

export function handleBondIssued(event: BondIssued): void {
  let issues = BondIssues.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(issues==null){
    let issue = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let issues = new BondIssues(issue);
    issues.issuer = event.params.party.toHexString();
    issues.token = event.params.token.toHexString();
    issues.bondName = event.params.bondName;
    issues.issuedAmount = event.params.amount.toBigDecimal();
    issues.collateralCurrency = event.params.currency.toHexString();
    issues.collateralAmount = event.params.collateralAmount.toBigDecimal();
    issues.issueTime = event.params.issueTime.toI32();
    issues.save();
  }
  else{
    issues.issuer = event.params.party.toHexString();
    issues.token = event.params.token.toHexString();
    issues.bondName = event.params.bondName;
    issues.issuedAmount = event.params.amount.toBigDecimal();
    issues.collateralCurrency = event.params.currency.toHexString();
    issues.collateralAmount = event.params.collateralAmount.toBigDecimal();
    issues.issueTime = event.params.issueTime.toI32();
    issues.save();
  }
}

export function handleBondRedeemed(event: BondRedeemed): void {
  let redemptions = BondRedemptions.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(redemptions==null){
    let redemption = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let redemptions = new BondRedemptions(redemption);
    redemptions.redeemer = event.params.party.toHexString();
    redemptions.token = event.params.token.toHexString();
    redemptions.bondName = event.params.tokenName;
    redemptions.redeemedValue = event.params.tokenAmount.toBigDecimal();
    redemptions.redemptionCurrency = event.params.currency.toHexString();
    redemptions.redemptionAmount = event.params.amount.toBigDecimal();
    redemptions.save();
  }
  else{
    redemptions.redeemer = event.params.party.toHexString();
    redemptions.token = event.params.token.toHexString();
    redemptions.bondName = event.params.tokenName;
    redemptions.redeemedValue = event.params.tokenAmount.toBigDecimal();
    redemptions.redemptionCurrency = event.params.currency.toHexString();
    redemptions.redemptionAmount = event.params.amount.toBigDecimal();
    redemptions.save();
  }
}

export function handleBondPurchased(event: BondPurchased): void {
  let purchases = BondPurchases.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(purchases==null){
    let purchase = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let purchases = new BondPurchases(purchase);
    purchases.purchaser = event.params.party.toHexString();
    purchases.token = event.params.token.toHexString();
    purchases.bondName = event.params.bondName;
    purchases.purchaseValue = event.params.amount.toBigDecimal();
    purchases.paidInCurrency = event.params.currency.toHexString();
    purchases.purchasedAmount = event.params.paidInAmount.toBigDecimal();
    purchases.purchaseTime = event.params.purchaseTime.toI32();
    purchases.save();
  }
  else{
    purchases.purchaser = event.params.party.toHexString();
    purchases.token = event.params.token.toHexString();
    purchases.bondName = event.params.bondName;
    purchases.purchaseValue = event.params.amount.toBigDecimal();
    purchases.paidInCurrency = event.params.currency.toHexString();
    purchases.purchasedAmount = event.params.paidInAmount.toBigDecimal();
    purchases.purchaseTime = event.params.purchaseTime.toI32();
    purchases.save();
  }
}

export function handleBondLiquidation(event: BondLiquidated): void {
  let liquidations = BondLiquidations.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(liquidations==null){
    let liquidation = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let liquidations = new BondLiquidations(liquidation);
    liquidations.liquidator = event.params.party.toHexString();
    liquidations.token = event.params.token.toHexString();
    liquidations.bondName = event.params.tokenName;
    liquidations.liquidatedValue = event.params.tokenAmount.toBigDecimal();
    liquidations.liquidationCurrency = event.params.currency.toHexString();
    liquidations.liquidatedAmount = event.params.amount.toBigDecimal();
    liquidations.save();
  }
  else{
    liquidations.liquidator = event.params.party.toHexString();
    liquidations.token = event.params.token.toHexString();
    liquidations.bondName = event.params.tokenName;
    liquidations.liquidatedValue = event.params.tokenAmount.toBigDecimal();
    liquidations.liquidationCurrency = event.params.currency.toHexString();
    liquidations.liquidatedAmount = event.params.amount.toBigDecimal();
    liquidations.save();
  }  
}
