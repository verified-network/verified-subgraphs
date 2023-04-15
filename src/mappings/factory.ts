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
  let securities = Security.load(event.params.security.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(securities==null){
    let securityId = event.params.security.toHexString();
    let securities = new Security(securityId);    
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer;
    securities.restricted = event.params.restricted;
    securities.issueManager = event.params.issueManager;
    securities.productCategory = event.params.productCategory;
    securities.restrictions = event.params.restrictions;
    securities.country = event.params.country;
    securities.save();
  }
  else{
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer;
    securities.restricted = event.params.restricted;
    securities.issueManager = event.params.issueManager;
    securities.productCategory = event.params.productCategory;
    securities.restrictions = event.params.restrictions;
    securities.country = event.params.country;
    securities.save();
  }
}
