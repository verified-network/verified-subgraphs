import{
    marketmakers,
    subscribers,
    offers,
    closures,
    allotments,
    refunds,
    settlements,
    feecollection
} from "../../generated/PrimaryIssueManager/PrimaryIssueManager";

import{
    LiquidityProviders,
    Subscribers,
    Offers,
    Closures,
    Allotments,
    Refunds,
    Settlements,
    FeeCollections
} from "../../generated/schema";

export function handleMarketmakers(event: marketmakers): void {
    let lps = LiquidityProviders.load(event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(lps==null){
        let lpId = event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let lps = new LiquidityProviders(lpId);
        lps.platform = event.params.platform;
        lps.owner = event.params.provider.toHexString();
        lps.security = event.params.security.toHexString();
        lps.currency = event.params.currency;
        lps.tokenOffered = event.params.tokenOffered.toBigDecimal();
        lps.underwritten = event.params.underwritten.toBigDecimal();
        lps.earned = event.params.earnings.toBigDecimal();
        lps.save();
    }
    else{
        lps.platform = event.params.platform;
        lps.owner = event.params.provider.toHexString();
        lps.security = event.params.security.toHexString();
        lps.currency = event.params.currency;
        lps.tokenOffered = event.params.tokenOffered.toBigDecimal();
        lps.underwritten = event.params.underwritten.toBigDecimal();
        lps.earned = event.params.earnings.toBigDecimal();
        lps.save();
    }
}

export function handlePrimaryInvestors(event: subscribers): void {
    let investors = Subscribers.load(event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(investors==null){
        let pool = event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let investors = new Subscribers(pool);
        investors.pool = event.params.poolId;
        investors.security = event.params.security.toHexString();
        investors.investor = event.params.investor.toHexString();
        investors.currency = event.params.currency;
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.timestamp = event.params.timestamp.toI32();
        investors.bought = event.params.subscription;
        investors.save();
    }
    else{
        investors.pool = event.params.poolId;
        investors.security = event.params.security.toHexString();
        investors.investor = event.params.investor.toHexString();
        investors.currency = event.params.currency;
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.timestamp = event.params.timestamp.toI32();
        investors.bought = event.params.subscription;
        investors.save();
    }
}

export function handleOffers(event: offers): void {
    let offers = Offers.load(event.params.offered.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(offers==null){
        let offerId = event.params.offered.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let offers = new Offers(offerId);
        offers.offeredBy = event.params.party.toHexString();
        offers.offered = event.params.offered;
        offers.tomatch = event.params.tomatch.toHexString();
        offers.isin = event.params.isin;
        offers.amount = event.params.amountOffered.toBigDecimal();
        offers.desired = event.params.amountDesired.toBigDecimal();
        offers.minimum = event.params.minAmount.toBigDecimal();
        offers.orderSize = event.params.minimumOrderSize;
        offers.offeringDocs = event.params.offeringDocs;
        offers.save();
    }
    else{
        offers.offeredBy = event.params.party.toHexString();
        offers.offered = event.params.offered;
        offers.tomatch = event.params.tomatch.toHexString();
        offers.isin = event.params.isin;
        offers.amount = event.params.amountOffered.toBigDecimal();
        offers.desired = event.params.amountDesired.toBigDecimal();
        offers.minimum = event.params.minAmount.toBigDecimal();
        offers.orderSize = event.params.minimumOrderSize;
        offers.offeringDocs = event.params.offeringDocs;
        offers.save();
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

export function handleAllotments(event: allotments): void {
    let allotments = Allotments.load(event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(allotments==null){
        let pool = event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let allotments = new Allotments(pool);
        allotments.poolid = event.params.poolId;
        allotments.investor = event.params.investor.toHexString();
        allotments.security = event.params.security.toHexString();
        allotments.securitySubscribed = event.params.securitySubscription.toBigDecimal();
        allotments.currency = event.params.currency;
        allotments.allotedAmount = event.params.allotedAmount.toBigDecimal();
        allotments.timestamp = event.params.timestamp.toI32();
        allotments.save();
    }
    else{
        allotments.poolid = event.params.poolId;
        allotments.investor = event.params.investor.toHexString();
        allotments.security = event.params.security.toHexString();
        allotments.securitySubscribed = event.params.securitySubscription.toBigDecimal();
        allotments.currency = event.params.currency;
        allotments.allotedAmount = event.params.allotedAmount.toBigDecimal();
        allotments.timestamp = event.params.timestamp.toI32();
        allotments.save();
    }
}

export function handleRefunds(event: refunds): void {
    let refunds = Refunds.load(event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(refunds==null){
        let pool = event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let refunds = new Refunds(pool);
        refunds.poolid = event.params.poolId;
        refunds.investor = event.params.investor.toHexString();
        refunds.security = event.params.security.toHexString();
        refunds.securitySubscribed = event.params.securitySubscription.toBigDecimal();
        refunds.currency = event.params.currency;
        refunds.refundAmount = event.params.refundAmount.toBigDecimal();
        refunds.timestamp = event.params.timestamp.toI32();
        refunds.save();
    }
    else{
        refunds.poolid = event.params.poolId;
        refunds.investor = event.params.investor.toHexString();
        refunds.security = event.params.security.toHexString();
        refunds.securitySubscribed = event.params.securitySubscription.toBigDecimal();
        refunds.currency = event.params.currency;
        refunds.refundAmount = event.params.refundAmount.toBigDecimal();
        refunds.timestamp = event.params.timestamp.toI32();
        refunds.save();
    }
}

export function handleSettlements(event: settlements): void {
    let settlements = Settlements.load(event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(settlements==null){
        let pool = event.params.poolId.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let settlements = new Settlements(pool);
        settlements.poolid = event.params.poolId;
        settlements.security = event.params.security.toHexString();
        settlements.currency = event.params.currency;
        settlements.liquidityProvider = event.params.liquidityProvider.toHexString();
        settlements.underwritingFee = event.params.underwritingFee.toBigDecimal();
        settlements.issuer = event.params.issuer.toHexString();
        settlements.subscription = event.params.subscription.toBigDecimal();
        settlements.save();
    }
    else{
        settlements.poolid = event.params.poolId;
        settlements.security = event.params.security.toHexString();
        settlements.currency = event.params.currency;
        settlements.liquidityProvider = event.params.liquidityProvider.toHexString();
        settlements.underwritingFee = event.params.underwritingFee.toBigDecimal();
        settlements.issuer = event.params.issuer.toHexString();
        settlements.subscription = event.params.subscription.toBigDecimal();
        settlements.save();
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