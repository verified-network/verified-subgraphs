import { BigInt } from "@graphprotocol/graph-ts"
import {
  SecuritiesRegistry,
  SecurityCreated,
  CorporateAction
} from "../generated/SecuritiesRegistry/SecuritiesRegistry"
import { Security, Company, ISIN } from "../generated/schema"

export function handleSecurityCreated(event: SecurityCreated): void {
  let security = new Security(event.params.security.toHex())
  security.security = event.params.security
  security.company = event.params.company.toString()
  security.ISIN = event.params.isin.toString()
  security.save()
}

export function handleCorporateAction(event: CorporateAction): void {
  //let ca = new CorporateAction(event.params.action.toHex())
}

