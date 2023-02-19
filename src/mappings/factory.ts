import { 
        IssuerCreated, 
        securitiesAdded 
      } from "../../generated/Factory/Factory";
import { 
        Issuer, 
        Security, 
      } from "../../generated/schema";
import { 
        Cash, 
        Bond 
      } from "../../generated/templates";

export function handleIssuerCreated(event: IssuerCreated): void {
  let factoryAddress = event.address;

  let issuers = Issuer.load(event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString()));
  if(issuers==null){
    let issuerId = event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString());
    let issuers = new Issuer(issuerId);
    issuers.id = event.params.issuer.toHexString();
    if (event.params.tokenType.toString() == "ViaCash")
      Cash.create(event.params.issuer);
    else if (event.params.tokenType.toString() == "ViaBond")
      Bond.create(event.params.issuer);
    issuers.tokenName = event.params.tokenName;
    issuers.tokenType = event.params.tokenType;
    issuers.save();
  }
  else{
    issuers.tokenName = event.params.tokenName;
    issuers.tokenType = event.params.tokenType;
    issuers.save();
  }
}

export function handleTokenCreated(event: securitiesAdded): void {
  let factoryAddress = event.address;

  let tokens = Security.load(event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString()));
  if(tokens==null){
    let tokenId = event.transaction.hash.toHexString().concat('-').concat(factoryAddress.toHexString());
    let tokens = new Security(tokenId);
    tokens.id = event.params.security.toHexString();
    tokens.isin = event.params.isin;
    tokens.currency = event.params.currency.toHexString();
    tokens.security = event.params.security.toHexString();
    tokens.issuer = event.params.issuer.toHexString();
    tokens.save();
  }
  else{
    tokens.isin = event.params.isin;
    tokens.currency = event.params.currency.toHexString();
    tokens.security = event.params.security.toHexString();
    tokens.issuer = event.params.issuer.toHexString();
    tokens.save();
  }
}
