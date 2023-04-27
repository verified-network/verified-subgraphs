import {
    tradeSettled,
    subscribers,
    closures
} from "../../generated/SecondaryIssueManager/SecondaryIssueManager";

import{
    Trades,
    Investors,
    Closures
} from "../../generated/schema";

export function handleTradeSettled(event: tradeSettled): void {
    let trades = Trades.load(event.params.transferor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(trades==null){
        let tradeId = event.params.transferor.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let trades = new Trades(tradeId);
        trades.poolid = event.params.poolid;
        trades.transferor = event.params.transferor.toHexString();
        trades.transferee = event.params.transferee.toHexString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.security = event.params.security.toHexString();
        trades.currency = event.params.currency;
        trades.price = event.params.price.toBigDecimal();
        trades.settlementStatus = event.params.settlementStatus;
        trades.tradeRef = event.params.tradeRef;
        trades.tradingCommission = event.params.fee.toBigDecimal();
        trades.save();
    }
    else{
        trades.poolid = event.params.poolid;
        trades.transferor = event.params.transferor.toHexString();
        trades.transferee = event.params.transferee.toHexString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.security = event.params.security.toHexString();
        trades.currency = event.params.currency;
        trades.price = event.params.price.toBigDecimal();
        trades.settlementStatus = event.params.settlementStatus;
        trades.tradeRef = event.params.tradeRef;
        trades.tradingCommission = event.params.fee.toBigDecimal();
        trades.save();
    }
}

export function handleSecondaryInvestors(event: subscribers): void {
    let investors = Investors.load(event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(investors==null){
        let investorId = event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let investors = new Investors(investorId);
        investors.pool = event.params.poolId;
        investors.security = event.params.securityTraded.toHexString();
        investors.issuer = event.params.seller.toHexString();
        investors.investor = event.params.investor.toHexString();
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
        investors.issuer = event.params.seller.toHexString();
        investors.investor = event.params.investor.toHexString();
        investors.currency = event.params.currencySettled;
        investors.amount = event.params.amount.toBigDecimal();
        investors.price = event.params.price.toBigDecimal();
        investors.tradeRef = event.params.tradeRef;
        investors.DPID = event.params.DPID;
        investors.timestamp = event.params.timestamp.toI32();
        investors.save();
    }
}

export function handleClosures(event: closures): void {
    let closures = Closures.load(event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(closures==null){
        let pool = event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let closures = new Closures(pool);
        closures.poolid = event.params.poolId;
        closures.security = event.params.security.toHexString();
        closures.timestamp = event.params.timestamp.toI32();
        closures.save();
    }
    else{
        closures.poolid = event.params.poolId;
        closures.security = event.params.security.toHexString();
        closures.timestamp = event.params.timestamp.toI32();
        closures.save();
    }
}