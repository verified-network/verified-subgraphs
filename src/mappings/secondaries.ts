import {
    tradeSettled,
    subscribers,
    SecondaryIssueManager
} from "../../generated/SecondaryIssueManager/SecondaryIssueManager";

import{
    Trades,
    Investors,
} from "../../generated/schema";

export function handleTradeSettled(event: tradeSettled): void {
    let secondaryIssueManagerAddress = event.address;

    let trades = Trades.load(event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString()));
    if(trades==null){
        let tradeId = event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString());
        let trades = new Trades(tradeId);
        trades.id = event.params.security.toHexString();
        trades.transferor = event.params.transferor.toHexString();
        trades.transferee = event.params.transferee.toHexString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.currency = event.params.currency.toHexString();
        trades.price = event.params.price.toBigDecimal();
        trades.save();
    }
    else{
        trades.transferor = event.params.transferor.toHexString();
        trades.transferee = event.params.transferee.toHexString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.currency = event.params.currency.toHexString();
        trades.price = event.params.price.toBigDecimal();
        trades.save();
    }
}

export function handleSecondaryInvestors(event: subscribers): void {
    let secondaryIssueManagerAddress = event.address;

    let investors = Investors.load(event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString()));
    if(investors==null){
        let investorId = event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString());
        let investors = new Investors(investorId);
        investors.id = event.params.securityTraded.toHexString();
        investors.platform = event.params.platform;
        investors.pool = event.params.poolId;
        investors.security = event.params.securityTraded.toHexString();
        investors.issuer = event.params.party.toHexString();
        investors.investor = event.params.counterparty.toHexString();
        investors.currency = event.params.currencySettled.toHexString();
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.transferorDPID = event.params.transferorDPID;
        investors.transfereeDPID = event.params.transfereeDPID;
        investors.save();
    }
    else{
        investors.platform = event.params.platform;
        investors.pool = event.params.poolId;
        investors.security = event.params.securityTraded.toHexString();
        investors.issuer = event.params.party.toHexString();
        investors.investor = event.params.counterparty.toHexString();
        investors.currency = event.params.currencySettled.toHexString();
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.transferorDPID = event.params.transferorDPID;
        investors.transfereeDPID = event.params.transfereeDPID;
        investors.save();
    }
}