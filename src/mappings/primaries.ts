import{
    marketmakers,
    subscribers,
    offers,
    PrimaryIssueManager
} from "../../generated/PrimaryIssueManager/PrimaryIssueManager";

import{
    LiquidityProviders,
    Subscribers,
    Offers
} from "../../generated/schema";

export function handleMarketmakers(event: marketmakers): void {
    let lps = LiquidityProviders.load(event.params.provider.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(lps==null){
        let lpId = event.params.provider.toHexString();
        let lps = new LiquidityProviders(lpId);
        lps.platform = event.params.platform;
        lps.owner = event.params.provider;
        lps.tokenOffered = event.params.currency.toHexString();
        lps.subscribed = event.params.tokenOffered.toBigDecimal();
        lps.underwritten = event.params.underwritten.toBigDecimal();
        lps.earned = event.params.earnings.toBigDecimal();
        lps.save();
    }
    else{
        lps.platform = event.params.platform;
        lps.owner = event.params.provider;
        lps.tokenOffered = event.params.currency.toHexString();
        lps.subscribed = event.params.tokenOffered.toBigDecimal();
        lps.underwritten = event.params.underwritten.toBigDecimal();
        lps.earned = event.params.earnings.toBigDecimal();
        lps.save();
    }
}

export function handlePrimaryInvestors(event: subscribers): void {
    let investors = Subscribers.load(event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(investors==null){
        let subscriberId = event.params.investor.toHexString();
        let investors = new Subscribers(subscriberId);
        investors.platform = event.params.platform;
        investors.pool = event.params.poolId;
        investors.security = event.params.security.toHexString();
        investors.investor = event.params.investor;
        investors.currency = event.params.currency;
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.save();
    }
    else{
        investors.platform = event.params.platform;
        investors.pool = event.params.poolId;
        investors.security = event.params.security.toHexString();
        investors.investor = event.params.investor;
        investors.currency = event.params.currency;
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.save();
    }
}

export function handleOffers(event: offers): void {
    let offers = Offers.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(offers==null){
        let offerId = event.params.party.toHexString();
        let offers = new Offers(offerId);
        offers.platform = event.params.platform;
        offers.offeredBy = event.params.party;
        offers.offered = event.params.offered.toHexString();
        offers.isin = event.params.isin;
        offers.amount = event.params.amountOffered.toBigDecimal();
        offers.orderSize = event.params.minimumOrderSize;
        offers.offeringDocs = event.params.offeringDocs;
        offers.save();
    }
    else{
        offers.platform = event.params.platform;
        offers.offeredBy = event.params.party;
        offers.offered = event.params.offered.toHexString();
        offers.isin = event.params.isin;
        offers.amount = event.params.amountOffered.toBigDecimal();
        offers.orderSize = event.params.minimumOrderSize;
        offers.offeringDocs = event.params.offeringDocs;
        offers.save();
    }
}