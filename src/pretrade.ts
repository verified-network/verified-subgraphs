import { BigInt } from "@graphprotocol/graph-ts"
import {
    DematAccountRegistered,
    SecurityRegistered
} from "../generated/PreTrade/PreTrade"
import { AccountRegistration, SecuritiesRegistration } from "../generated/schema"

export function handleDematAccountRegistered(event: DematAccountRegistered): void {
  let demat = new AccountRegistration(event.params.registrationRef.toHex())
  demat.user = event.params.user.toString()
  demat.country = event.params.country
  demat.registrationDate = event.params.registrationDate.toI32()
  demat.save()
}

export function handleSecurityRegistered(event: SecurityRegistered): void {
    let security = new SecuritiesRegistration(event.params.registrationRef.toHex())
    security.user = event.params.user.toString()
    security.company = event.params.company.toString()
    security.currencyCode = event.params.currencyCode.toString()
    security.faceValue = event.params.faceValue.toI32()
    security.isin = event.params.isin.toString()
    security.itype = event.params.itype
    security.lockInReason = event.params.lockInReason
    security.lockInReleaseDate = event.params.lockInReleaseDate.toI32()
    security.noOfCertificates = event.params.noOfCertificates.toI32()
    security.registrationDate = event.params.registrationDate.toI32()
    security.status = event.params.status
    security.save()
  }