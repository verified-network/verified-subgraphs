import { Factory, IssuerCreated, securitiesAdded } from "../../generated/Factory/Factory";
import { Issuer, Security, Token } from "../../generated/schema";
import { Cash, Bond } from "../../generated/templates";

export function handleIssuerCreated(event: IssuerCreated): void {
  let factoryAddress = event.address;
  let factoryContract = Factory.bind(factoryAddress);
  let issues = factoryContract.try_getIssues();
  let issueId = issues.value;

  let issuers = Issuer.load(event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString()));
  if(issues==null){
    let issuerId = event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString());
    let issuers = new Issuer(issuerId);
    issuers.id = issueId.toString();
    if (event.params.tokenType.toString() == "ViaCash")
      Cash.create(event.params.issuer);
    else if (event.params.tokenType.toString() == "ViaBond")
      Bond.create(event.params.issuer);
    issuers.tokenName = event.params.tokenName;
    issuers.tokenType = event.params.tokenType;
    issuers.save();
  }
  /*else{
    issuers.tokenName = event.params.tokenName;
    issuers.tokenType = event.params.tokenType;
    issuers.save();
  }*/
}

export function handleTokenCreated(event: securitiesAdded): void {
  let factoryAddress = event.address;
  let factoryContract = Factory.bind(factoryAddress);
  let securities = factoryContract.try_getSecurity(factoryAddress);
  let securityId = securities.value;

  let tokens = Security.load(event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString()));
  if(tokens==null){
    let tokenId = event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString());
    let tokens = new Security(tokenId);
    tokens.id = securityId.toHexString();
    tokens.isin = event.params.isin;
    tokens.currency = event.params.currency.toHex();
    tokens.security = event.params.security.toHex();
    tokens.issuer = event.params.issuer.toHex();
    tokens.save();
  }
  else{
    tokens.isin = event.params.isin;
    tokens.currency = event.params.currency.toHex();
    tokens.security = event.params.security.toHex();
    tokens.issuer = event.params.issuer.toHex();
    tokens.save();
  }

}
