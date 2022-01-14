import { BigInt } from "@graphprotocol/graph-ts"
import {
  SecuritiesRegistry,
  SecurityCreated,
  CorporateAction
} from "../generated/SecuritiesRegistry/SecuritiesRegistry"
import { TokenizedSecurity, Company, ISIN } from "../generated/schema"
import { Security } from "../generated/templates"

export function handleSecurityCreated(event: SecurityCreated): void {  
  Security.create(event.params.security)
  let security = new TokenizedSecurity(event.params.security.toHex())
  security.security = event.params.security
  security.company = event.params.company.toString()
  security.ISIN = event.params.isin.toString()
  security.save()
}

export function handleCorporateAction(event: CorporateAction): void {
  //let ca = new CorporateAction(event.params.action.toHex())
}

