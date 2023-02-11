import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { IssuerCreated, securitiesAdded } from "../../generated/Factory/Factory";
import { Issuer, Security, Token } from "../../generated/schema";
import { Cash, Bond } from "../../generated/templates";

export function handleIssuerCreated(event: IssuerCreated): void {
  if (event.params.tokenType.toString() == "ViaCash")
    Cash.create(event.params.issuer);
  else if (event.params.tokenType.toString() == "ViaBond")
    Bond.create(event.params.issuer);
  let issuer = new Issuer(event.params.issuer.toHex());
  issuer.tokenName = event.params.tokenName;
  issuer.tokenType = event.params.tokenType;
  issuer.save();
}

export function handleTokenCreated(event: securitiesAdded): void {
  let token = new Security(event.params.security.toHex());
  token.isin = event.params.isin;
  token.currency = event.params.currency.toHex();
  token.security = event.params.security.toHex();
  token.issuer = event.params.issuer.toHex();
  token.save();
}
