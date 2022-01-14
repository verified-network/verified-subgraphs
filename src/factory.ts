import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  IssuerCreated,
  TokenCreated
} from "../generated/Factory/Factory"
import {Issuer, Token} from "../generated/schema"
import { Cash, Bond } from "../generated/templates"

export function handleIssuerCreated(event: IssuerCreated): void {
  /*if(event.params.tokenType.equals("ViaBond"))
    Cash.create(event.params.issuer)
  else
    Bond.create(event.params.issuer)*/
  let issuer = new Issuer(event.params.issuer.toHex())
  issuer.tokenName = event.params.tokenName
  issuer.tokenType = event.params.tokenType
  issuer.save()
}

export function handleTokenCreated(event: TokenCreated): void {
  let token = new Token(event.params.token.toHex())
  token.tokenName = event.params.tokenName
  token.tokenType = event.params.tokenType
  token.save()
}

