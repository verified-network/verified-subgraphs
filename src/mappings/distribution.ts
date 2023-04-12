import { 
    RevenueShare 
  } from "../../generated/Distribution/Distribution";
import { 
    RevenueShares,
    Token
  } from "../../generated/schema";

export function handleDistribution(event: RevenueShare): void {
    let shareholders = RevenueShares.load(event.params.shareholder.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(shareholders==null){
        let shareholder = event.params.shareholder.toHexString();
        let shareholders = new RevenueShares(shareholder);
        shareholders.shareholder = event.params.shareholder.toHexString();
        shareholders.shareholderType = event.params.shareholderType;
        shareholders.tokenName = event.params.tokenName;
        shareholders.amount = event.params.amount.toBigDecimal();
        shareholders.timestamp = event.params.timestamp.toI32();
        shareholders.save();
    }
    else{
        shareholders.shareholder = event.params.shareholder.toHexString();
        shareholders.shareholderType = event.params.shareholderType;
        shareholders.tokenName = event.params.tokenName;
        shareholders.amount = event.params.amount.toBigDecimal();
        shareholders.timestamp = event.params.timestamp.toI32();
        shareholders.save();
    }
}