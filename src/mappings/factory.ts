import { 
        securitiesAdded 
      } from "../../generated/SecuritiesFactory/SecuritiesFactory";
import {
        CashIssuerCreated,
        BondIssuerCreated,
        TokenCreated
      } from "../../generated/Factory/Factory";
import { 
        Currency,
        Security,
        Token
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

export function handleCashCreated(event: CashIssuerCreated): void {
  let currencies = Currency.load(event.params.issuer.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(currencies==null){
    let currency = event.params.issuer.toHexString();
    let currencies = new Currency(currency);
    currencies.name = event.params.tokenName;
    currencies.save();
  }
  else{
    currencies.name = event.params.tokenName;
    currencies.save();
  }
}

export function handleBondCreated(event: BondIssuerCreated): void {
  let bonds = Token.load(event.params.issuer.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(bonds==null){
    let bond = event.params.issuer.toHexString();
    let bonds = new Token(bond);
    bonds.token = event.params.issuer;
    bonds.tokenName = event.params.tokenName;
    bonds.tokenType = event.params.tokenType;
    bonds.save();
  }
  else{
    bonds.token = event.params.issuer;
    bonds.tokenName = event.params.tokenName;
    bonds.tokenType = event.params.tokenType;
    bonds.save();
  }
}

export function handleBondTokenCreated(event: TokenCreated): void {
  let bonds = Token.load(event.params.token.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(bonds==null){
    let bond = event.params.token.toHexString();
    let bonds = new Token(bond);
    bonds.token = event.params.token;
    bonds.tokenName = event.params.tokenName;
    bonds.tokenType = event.params.tokenType;
    bonds.save();
  }
  else{
    bonds.token = event.params.token;
    bonds.tokenName = event.params.tokenName;
    bonds.tokenType = event.params.tokenType;
    bonds.save();
  }
}