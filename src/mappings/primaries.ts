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
    let primaryIssueManagerContract = PrimaryIssueManager.bind(primaryIssueManagerAddress);
    let primaryIssue = primaryIssueManagerContract.try_getLiquidityProviders(primaryIssueManagerAddress);
    let primaryIssueId = primaryIssue.value;

    let lps = LiquidityProviders.load(event.transaction.hash.toHexString().concat('-').concat(primaryIssueManagerAddress.toHexString()));
    if(lps==null){
        let lpId = event.transaction.hash.toHexString().concat('-').concat(primaryIssueManagerAddress.toHexString());
        let lps = new LiquidityProviders(lpId);
        lps.id = primaryIssueId.toLocaleString();
        lps.owner = event.params.provider.toString();
        lps.tokenOffered = event.params.currency.toString();
        lps.subscribed = event.params.tokenOffered.toBigDecimal();
        lps.underwritten = event.params.underwritten.toBigDecimal();
        lps.earned = event.params.earnings.toBigDecimal();
        lps.save();
    }
    else{
        lps.owner = event.params.provider.toString();
        lps.tokenOffered = event.params.currency.toString();
        lps.subscribed = event.params.tokenOffered.toBigDecimal();
        lps.underwritten = event.params.underwritten.toBigDecimal();
        lps.earned = event.params.earnings.toBigDecimal();
        lps.save();
    }
}

export function handlePrimaryInvestors(event: subscribers): void {
    let primaryIssueManagerAddress = event.address;
    let primaryIssueManagerContract = PrimaryIssueManager.bind(primaryIssueManagerAddress);
    let primaryIssue = primaryIssueManagerContract.try_getSubscribers(primaryIssueManagerAddress);
    let primaryIssueId = primaryIssue.value;

    let investors = Subscribers.load(event.transaction.hash.toHexString().concat('-').concat(primaryIssueManagerAddress.toHexString()));
    if(investors==null){
        let subscriberId = event.transaction.hash.toHexString().concat('-').concat(primaryIssueManagerAddress.toHexString());
        let investors = new Subscribers(subscriberId);
        investors.id = primaryIssueId.toLocaleString();
        investors.platform = event.params.platform;
        investors.security = event.params.security.toString();
        investors.investor = event.params.investor.toString();
        investors.currency = event.params.currency.toString();
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.save();
    }
    else{
        investors.platform = event.params.platform;
        investors.security = event.params.security.toString();
        investors.investor = event.params.investor.toString();
        investors.currency = event.params.currency.toString();
        investors.cashSwapped = event.params.cashSwapped.toBigDecimal();
        investors.securitySwapped = event.params.securitySwapped.toBigDecimal();
        investors.save();
    }
}

export function handleOffers(event: offers): void {
    let primaryIssueManagerAddress = event.address;
    let primaryIssueManagerContract = PrimaryIssueManager.bind(primaryIssueManagerAddress);
    let primaryIssue = primaryIssueManagerContract.try_getOffered(primaryIssueManagerAddress);
    let primaryIssueId = primaryIssue.value;

    let offers = Offers.load(event.transaction.hash.toHexString().concat('-').concat(primaryIssueManagerAddress.toHexString()));
    if(offers==null){
        let offerId = event.transaction.hash.toHexString().concat('-').concat(primaryIssueManagerAddress.toHexString());
        let offers = new Offers(offerId);
        offers.id = primaryIssueId.toLocaleString();
        offers.platform = event.params.platform;
        offers.offeredBy = event.params.party.toString();
        offers.offered = event.params.offered.toString();
        offers.isin = event.params.isin;
        offers.amount = event.params.amountOffered.toBigDecimal();
        offers.orderSize = event.params.minimumOrderSize;
        offers.offeringDocs = event.params.offeringDocs;
        offers.save();
    }
    else{
        offers.platform = event.params.platform;
        offers.offeredBy = event.params.party.toString();
        offers.offered = event.params.offered.toString();
        offers.isin = event.params.isin;
        offers.amount = event.params.amountOffered.toBigDecimal();
        offers.orderSize = event.params.minimumOrderSize;
        offers.offeringDocs = event.params.offeringDocs;
        offers.save();
    }
}