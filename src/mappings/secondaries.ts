import {
    tradeSettled,
    subscribers
} from "../../generated/SecondaryIssueManager/SecondaryIssueManager";

import{
    Trades,
    Investors,
} from "../../generated/schema";

export function handleTradeSettled(event: tradeSettled): void {
    let trade = new Trades(event.params.security.toHex());
    trade.transferor = event.params.transferor.toString();
    trade.transferee = event.params.transferee.toString();
    trade.unitsToTransfer = event.params.unitsToTransfer;
    trade.currency = event.params.currency.toString();
    trade.price = event.params.price.toBigDecimal();
    trade.save();
}

export function handleSecondaryInvestors(event: subscribers): void {
    let investor = new Investors(event.params.securityTraded.toHex());
    investor.platform = event.params.platform;
    investor.security = event.params.securityTraded.toString();
    investor.issuer = event.params.party.toString();
    investor.investor = event.params.counterparty.toString();
    investor.currency = event.params.currencySettled.toString();
    investor.amount = event.params.amount.toBigDecimal();
    investor.price = event.params.price.toBigDecimal();
    investor.tradeRef = event.params.tradeRef;
    investor.transferorDPID = event.params.transferorDPID;
    investor.transfereeDPID = event.params.transfereeDPID;
    investor.save();
}