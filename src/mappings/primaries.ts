import{
    marketmakers,
    subscribers,
    offers
} from "../../generated/PrimaryIssueManager/PrimaryIssueManager";

import{
    LiquidityProviders,
    Subscribers,
    Offers
} from "../../generated/schema";

export function handleMarketmakers(event: marketmakers): void {
    let lp = new LiquidityProviders(event.params.security.toHex());
    lp.owner = event.params.provider.toString();
    lp.tokenOffered = event.params.currency.toString();
    lp.subscribed = event.params.tokenOffered.toBigDecimal();
    lp.underwritten = event.params.underwritten.toBigDecimal();
    lp.earned = event.params.earnings.toBigDecimal();
    lp.save();
}

export function handlePrimaryInvestors(event: subscribers): void {
    let investor = new Subscribers(event.params.security.toHex());
    investor.platform = event.params.platform;
    investor.security = event.params.security.toString();
    investor.investor = event.params.investor.toString();
    investor.currency = event.params.currency.toString();
    investor.amount = event.params.amount.toBigDecimal();
    investor.price = event.params.price.toBigDecimal();
    investor.save();
}

export function handleOffers(event: offers): void {
    let platform = new Offers(event.params.platform.toHex());
    platform.platform = event.params.platform;
    platform.offeredBy = event.params.party.toString();
    platform.offered = event.params.offered.toString();
    platform.isin = event.params.isin;
    platform.amount = event.params.amountOffered.toBigDecimal();
    platform.orderSize = event.params.minimumOrderSize;
    platform.offeringDocs = event.params.offeringDocs;
    platform.save();
}