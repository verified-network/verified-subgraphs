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
    let secondaryIssueManagerContract = SecondaryIssueManager.bind(secondaryIssueManagerAddress);
    let secondaryIssue = secondaryIssueManagerContract.try_getTrade(secondaryIssueManagerAddress);
    let secondaryIssueId = secondaryIssue.value;

    let trades = Trades.load(event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString()));
    if(trades==null){
        let tradeId = event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString());
        let trades = new Trades(tradeId);
        trades.id = secondaryIssueId.toLocaleString();
        trades.transferor = event.params.transferor.toString();
        trades.transferee = event.params.transferee.toString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.currency = event.params.currency.toString();
        trades.price = event.params.price.toBigDecimal();
        trades.save();
    }
    else{
        trades.transferor = event.params.transferor.toString();
        trades.transferee = event.params.transferee.toString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.currency = event.params.currency.toString();
        trades.price = event.params.price.toBigDecimal();
        trades.save();
    }
}

export function handleSecondaryInvestors(event: subscribers): void {
    let secondaryIssueManagerAddress = event.address;
    let secondaryIssueManagerContract = SecondaryIssueManager.bind(secondaryIssueManagerAddress);
    let secondaryIssue = secondaryIssueManagerContract.try_getSubscribers(secondaryIssueManagerAddress);
    let secondaryIssueId = secondaryIssue.value;

    let investors = Investors.load(event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString()));
    if(investors==null){
        let investorId = event.transaction.hash.toHexString().concat('-').concat(secondaryIssueManagerAddress.toHexString());
        let investors = new Investors(investorId);
        investors.id = secondaryIssueId.toLocaleString();
        investors.platform = event.params.platform;
        investors.security = event.params.securityTraded.toString();
        investors.issuer = event.params.party.toString();
        investors.investor = event.params.counterparty.toString();
        investors.currency = event.params.currencySettled.toString();
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.transferorDPID = event.params.transferorDPID;
        investors.transfereeDPID = event.params.transfereeDPID;
        investors.save();
    }
    else{
        investors.platform = event.params.platform;
        investors.security = event.params.securityTraded.toString();
        investors.issuer = event.params.party.toString();
        investors.investor = event.params.counterparty.toString();
        investors.currency = event.params.currencySettled.toString();
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.transferorDPID = event.params.transferorDPID;
        investors.transfereeDPID = event.params.transfereeDPID;
        investors.save();
    }
}