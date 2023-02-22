import { 
        IssuerCreated, 
        securitiesAdded 
      } from "../../generated/Factory/Factory";
import { 
        Security,
        Token, 
      } from "../../generated/schema";
import { 
        Cash, 
        Bond 
      } from "../../generated/templates";

export function handleTokenCreated(event: IssuerCreated): void {
  let factoryAddress = event.address;

  let tokens = Token.load(factoryAddress.toHexString());
  if(tokens==null){
    let tokenId = factoryAddress.toHexString();
    let tokens = new Token(tokenId);
    tokens.id = event.params.issuer.toHexString();
    //if (event.params.tokenType.toString() == "ViaCash")
    //  Cash.create(event.params.issuer);
    //else if (event.params.tokenType.toString() == "ViaBond")
    //  Bond.create(event.params.issuer);
    tokens.tokenName = event.params.tokenName;
    tokens.tokenType = event.params.tokenType;
    tokens.save();
  }
  else{
    tokens.tokenName = event.params.tokenName;
    tokens.tokenType = event.params.tokenType;
    tokens.save();
  }
}

export function handleSecurityCreated(event: securitiesAdded): void {
  let factoryAddress = event.address;

  let securities = Security.load(factoryAddress.toHexString());
  if(securities==null){
    let securityId = factoryAddress.toHexString();
    let securities = new Security(securityId);
    securities.id = event.params.security.toHexString();
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer;
    securities.save();
  }
  else{
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer;
    securities.save();
  }
}
