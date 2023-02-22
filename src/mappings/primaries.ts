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
    let primaryIssueManagerAddress = event.address;

    let lps = LiquidityProviders.load(primaryIssueManagerAddress.toHexString());
    if(lps==null){
        let lpId = primaryIssueManagerAddress.toHexString();
        let lps = new LiquidityProviders(lpId);
        lps.id = event.params.security.toHexString();
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
    let primaryIssueManagerAddress = event.address;

    let investors = Subscribers.load(primaryIssueManagerAddress.toHexString());
    if(investors==null){
        let subscriberId = primaryIssueManagerAddress.toHexString();
        let investors = new Subscribers(subscriberId);
        investors.id = event.params.security.toHexString();
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
        investors.investor = event.params.investor;
        investors.currency = event.params.currency;
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.save();
    }
}

export function handleOffers(event: offers): void {
    let primaryIssueManagerAddress = event.address;
    
    let offers = Offers.load(primaryIssueManagerAddress.toHexString());
    if(offers==null){
        let offerId = primaryIssueManagerAddress.toHexString();
        let offers = new Offers(offerId);
        offers.id = event.params.offered.toHexString();
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