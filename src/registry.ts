import { BigInt } from "@graphprotocol/graph-ts"
import {
  SecuritiesRegistry,
  SecurityCreated,
  CorporateActionCreated,
  ReportCreditScore
} from "../generated/SecuritiesRegistry/SecuritiesRegistry"
import { TokenizedSecurity, Company, ISIN, CorporateAction, CreditScore } from "../generated/schema"
import { Security } from "../generated/templates"

export function handleSecurityCreated(event: SecurityCreated): void {  
  Security.create(event.params.security)
  let security = new TokenizedSecurity(event.params.security.toHex())
  security.security = event.params.security
  security.company = event.params.company.toString()
  security.isin = event.params.isin.toString()
  security.currency = event.params.currency.toString()
  security.issuer = event.params.issuer
  security.save()
}

export function handleCorporateAction(event: CorporateActionCreated): void {
  let ca = new CorporateAction(event.params.action.toString())
  ca.security = event.params.security.toString()
  ca.company = event.params.company.toString()
  ca.isin = event.params.isin.toString()
  ca.category = event.params.category
  ca.action = event.params.action
  ca.save()
}

export function handleReportCreditScore(event: ReportCreditScore):void {
  let score = new CreditScore(event.params.score.toString())
  score.company = event.params.company.toString()
  score.isin = event.params.isin.toString()
  score.save()
}