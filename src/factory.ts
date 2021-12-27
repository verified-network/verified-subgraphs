import { BigInt } from "@graphprotocol/graph-ts"
import {
  IssuerCreated,
  TokenCreated
} from "../generated/Factory/Factory"
import {Issuer, Token} from "../generated/schema"

export function handleIssuerCreated(event: IssuerCreated): void {
  let issuer = new Issuer(event.params.issuer.toHex())
  issuer.tokenName = event.params.tokenName
  issuer.tokenType = event.params.tokenType
}

export function handleTokenCreated(event: TokenCreated): void {
  let token = new Token(event.params.token.toHex())
  token.tokenName = event.params.tokenName
  token.tokenType = event.params.tokenType
}

