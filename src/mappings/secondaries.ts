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
    let trades = Trades.load(event.params.transferor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(trades==null){
        let tradeId = event.params.transferor.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let trades = new Trades(tradeId);
        trades.poolid = event.params.poolid;
        trades.transferor = event.params.transferor;
        trades.transferee = event.params.transferee;
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.security = event.params.security.toHexString();
        trades.currency = event.params.currency;
        trades.price = event.params.price.toBigDecimal();
        trades.settlementStatus = event.params.settlementStatus;
        trades.tradingCommission = event.params.fee.toBigDecimal();
        trades.save();
    }
    else{
        trades.poolid = event.params.poolid;
        trades.transferor = event.params.transferor;
        trades.transferee = event.params.transferee;
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.security = event.params.security.toHexString();
        trades.currency = event.params.currency;
        trades.price = event.params.price.toBigDecimal();
        trades.settlementStatus = event.params.settlementStatus;
        trades.tradingCommission = event.params.fee.toBigDecimal();
        trades.save();
    }
}

export function handleSecondaryInvestors(event: subscribers): void {
    let investors = Investors.load(event.params.counterparty.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(investors==null){
        let investorId = event.params.counterparty.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let investors = new Investors(investorId);
        investors.pool = event.params.poolId;
        investors.security = event.params.securityTraded.toHexString();
        investors.issuer = event.params.party;
        investors.investor = event.params.counterparty;
        investors.currency = event.params.currencySettled;
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.DPID = event.params.DPID;
        investors.timestamp = event.params.timestamp.toI32();
        investors.save();
    }
    else{
        investors.pool = event.params.poolId;
        investors.security = event.params.securityTraded.toHexString();
        investors.issuer = event.params.party;
        investors.investor = event.params.counterparty;
        investors.currency = event.params.currencySettled;
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.DPID = event.params.DPID;
        investors.timestamp = event.params.timestamp.toI32();
        investors.save();
    }
}