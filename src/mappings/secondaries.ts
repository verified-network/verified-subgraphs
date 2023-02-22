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

    let trades = Trades.load(secondaryIssueManagerAddress.toHexString());
    if(trades==null){
        let tradeId = secondaryIssueManagerAddress.toHexString();
        let trades = new Trades(tradeId);
        trades.id = event.params.security.toHexString();
        trades.transferor = event.params.transferor;
        trades.transferee = event.params.transferee;
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.currency = event.params.currency;
        trades.price = event.params.price.toBigDecimal();
        trades.save();
    }
    else{
        trades.transferor = event.params.transferor;
        trades.transferee = event.params.transferee;
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.currency = event.params.currency;
        trades.price = event.params.price.toBigDecimal();
        trades.save();
    }
}

export function handleSecondaryInvestors(event: subscribers): void {
    let secondaryIssueManagerAddress = event.address;

    let investors = Investors.load(secondaryIssueManagerAddress.toHexString());
    if(investors==null){
        let investorId = secondaryIssueManagerAddress.toHexString();
        let investors = new Investors(investorId);
        investors.id = event.params.securityTraded.toHexString();
        investors.platform = event.params.platform;
        investors.pool = event.params.poolId;
        investors.security = event.params.securityTraded.toHexString();
        investors.issuer = event.params.party;
        investors.investor = event.params.counterparty;
        investors.currency = event.params.currencySettled;
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
        investors.issuer = event.params.party;
        investors.investor = event.params.counterparty;
        investors.currency = event.params.currencySettled;
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.transferorDPID = event.params.transferorDPID;
        investors.transfereeDPID = event.params.transfereeDPID;
        investors.save();
    }
}