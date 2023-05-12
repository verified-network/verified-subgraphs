import { Address } from '@graphprotocol/graph-ts';
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

import {Security as SecurityTemplate } from '../../generated/templates';
import {Cash as CashTemplate } from '../../generated/templates';
import {Bond as BondTemplate } from '../../generated/templates';

/*import { 
        Cash, 
        Bond,
        //Security
      } from "../../generated/templates";*/

export function handleSecurityCreated(event: securitiesAdded): void {
  let securityAddress: Address = event.params.security;  
  let securities = Security.load(event.params.security.toHexString());//.concat('-').concat(event.transaction.hash.toHexString()));
  if(securities==null){
    let securityId = event.params.security.toHexString();
    let securities = new Security(securityId);    
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer.toHexString();
    securities.restricted = event.params.restricted;
    securities.issueManager = event.params.issueManager;
    securities.productCategory = event.params.productCategory;
    securities.restrictions = event.params.restrictions;
    securities.country = event.params.country;
    securities.save();
    SecurityTemplate.create(securityAddress);
  }
  else{
    securities.isin = event.params.isin;
    securities.currency = event.params.currency;
    securities.security = event.params.security;
    securities.issuer = event.params.issuer.toHexString();
    securities.restricted = event.params.restricted;
    securities.issueManager = event.params.issueManager;
    securities.productCategory = event.params.productCategory;
    securities.restrictions = event.params.restrictions;
    securities.country = event.params.country;
    securities.save();
    SecurityTemplate.create(securityAddress);
  }
}

export function handleCashCreated(event: CashIssuerCreated): void {
  let currencyAddress: Address = event.params.issuer; 
  let currencies = Currency.load(event.params.issuer.toHexString());//.concat('-').concat(event.transaction.hash.toHexString()));
  if(currencies==null){
    let currency = event.params.issuer.toHexString();
    let currencies = new Currency(currency);
    currencies.name = event.params.tokenName;
    currencies.save();
    CashTemplate.create(currencyAddress);
  }
  else{
    currencies.name = event.params.tokenName;
    currencies.save();
    CashTemplate.create(currencyAddress);
  }
}

export function handleBondCreated(event: BondIssuerCreated): void {
  let bondAddress: Address = event.params.issuer;   
  let bonds = Token.load(event.params.issuer.toHexString());//.concat('-').concat(event.transaction.hash.toHexString()));
  if(bonds==null){
    let bond = event.params.issuer.toHexString();
    let bonds = new Token(bond);
    bonds.token = event.params.issuer;
    bonds.tokenName = event.params.tokenName;
    bonds.tokenType = event.params.tokenType;
    bonds.save();
    BondTemplate.create(bondAddress);
  }
  else{
    bonds.token = event.params.issuer;
    bonds.tokenName = event.params.tokenName;
    bonds.tokenType = event.params.tokenType;
    bonds.save();
    BondTemplate.create(bondAddress);
  }
}

export function handleBondTokenCreated(event: TokenCreated): void {
  let bonds = Token.load(event.params.token.toHexString());//.concat('-').concat(event.transaction.hash.toHexString()));
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