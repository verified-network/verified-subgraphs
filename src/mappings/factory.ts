import { 
        securitiesAdded 
      } from "../../generated/SecuritiesFactory/SecuritiesFactory";
import { 
        Security
      } from "../../generated/schema";
import { 
        Cash, 
        Bond 
      } from "../../generated/templates";

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
    securities.restricted = event.params.restricted;
    securities.issueManager = event.params.issueManager;
    securities.save();
  }
  else{
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer;
    securities.restricted = event.params.restricted;
    securities.issueManager = event.params.issueManager;
    securities.save();
  }
}
