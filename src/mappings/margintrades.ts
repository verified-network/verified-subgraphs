import {
    tradeSettled,
    subscribers,
    closures,
    feecollection,
    collateral,
    PnLSettled
} from "../../generated/MarginIssueManager/MarginIssueManager";

import{
    Trades,
    Traders,
    Closures,
    FeeCollections,
    MarginCollateral,
    MarginTradePnL
} from "../../generated/schema";

export function handleTrades(event: tradeSettled): void {
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
        trades.amountPaid = event.params.amountPaid.toBigDecimal();
        trades.tradeRef = event.params.cref;
        trades.orderRef = event.params.ref;
        trades.tradingCommission = event.params.fee.toBigDecimal();
        trades.timestamp = event.params.timestamp.toI32();
        trades.save();
    }
    else{
        trades.poolid = event.params.poolid;
        trades.transferor = event.params.transferor.toHexString();
        trades.transferee = event.params.transferee.toHexString();
        trades.unitsToTransfer = event.params.unitsToTransfer;
        trades.security = event.params.security.toHexString();
        trades.currency = event.params.currency;
        trades.amountPaid = event.params.amountPaid.toBigDecimal();
        trades.tradeRef = event.params.cref;
        trades.orderRef = event.params.ref;
        trades.tradingCommission = event.params.fee.toBigDecimal();
        trades.timestamp = event.params.timestamp.toI32();
        trades.save();
    }
}

export function handleTraders(event: subscribers): void {
    let investors = Traders.load(event.params.counterparty.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(investors==null){
        let investorId = event.params.counterparty.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let investors = new Traders(investorId);
        investors.security = event.params.securityTraded.toHexString();
        investors.transferor = event.params.party.toHexString();
        investors.transferee = event.params.counterparty.toHexString();
        investors.currency = event.params.currencySettled;
        investors.securityTraded = event.params.securityAmount.toBigDecimal();
        investors.cashTraded = event.params.cashAmount.toBigDecimal();
        investors.orderRef = event.params.orderRef;
        investors.timestamp = event.params.timestamp.toI32();
        investors.save();
    }
    else{
        investors.security = event.params.securityTraded.toHexString();
        investors.transferor = event.params.party.toHexString();
        investors.transferee = event.params.counterparty.toHexString();
        investors.currency = event.params.currencySettled;
        investors.securityTraded = event.params.securityAmount.toBigDecimal();
        investors.cashTraded = event.params.cashAmount.toBigDecimal();
        investors.orderRef = event.params.orderRef;
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

export function handleFeeCollections(event: feecollection): void {
    let collections = FeeCollections.load(event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(collections==null){
        let platform = event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let collections = new FeeCollections(platform);
        collections.platform = event.params.platform.toHexString();
        collections.feeCollected = event.params.collection.toBigDecimal();
        collections.timestamp = event.params.timestamp.toI32();
        collections.save();
    }
    else{
        collections.platform = event.params.platform.toHexString();
        collections.feeCollected = event.params.collection.toBigDecimal();
        collections.timestamp = event.params.timestamp.toI32();
        collections.save();
    }
}

export function handleMarginCollateral(event: collateral): void {
    let collaterals = MarginCollateral.load(event.params.user.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(collaterals==null){
        let user = event.params.user.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let collaterals = new MarginCollateral(user);
        collaterals.action = event.params.action;
        collaterals.user = event.params.user.toHexString();
        collaterals.currency = event.params.currency;
        collaterals.balance = event.params.balance.toBigDecimal();
        collaterals.save();
    }
    else{
        collaterals.action = event.params.action;
        collaterals.user = event.params.user.toHexString();
        collaterals.currency = event.params.currency;
        collaterals.balance = event.params.balance.toBigDecimal();
        collaterals.save();
    }
}

export function handleMarginSettlements(event: PnLSettled): void {
    let settlement = MarginTradePnL.load(event.params.user.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(settlement==null){
        let user = event.params.user.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let settlement = new MarginTradePnL(user);        
        settlement.user = event.params.user.toHexString();
        settlement.security = event.params.security.toHexString();
        settlement.currency = event.params.currency;
        settlement.financing = event.params.financing.toBigDecimal();
        settlement.dividend = event.params.dividend.toBigDecimal();
        settlement.commission = event.params.commission.toBigDecimal();
        settlement.save();
    }
    else{
        settlement.user = event.params.user.toHexString();
        settlement.security = event.params.security.toHexString();
        settlement.currency = event.params.currency;
        settlement.financing = event.params.financing.toBigDecimal();
        settlement.dividend = event.params.dividend.toBigDecimal();
        settlement.commission = event.params.commission.toBigDecimal();
        settlement.save();
    }
}