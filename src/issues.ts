import { BigInt } from "@graphprotocol/graph-ts"
import {
  Issues,
  issued,
  offered,
  opened,
  closed,
  allotted
} from "../generated/Issues/Issues"
import { Issue } from "../generated/schema"

export function handleissued(event: issued): void {
  let issue = new Issue(event.params.security.toHex())
  issue.issueSize = event.params.issueSize
  issue.offerPrice = event.params.offerPrice
  issue.minAskPrice = event.params.minAskPrice
  issue.minSubscription = event.params.minSubscription
  issue.currency = event.params.currency.toString()
  issue.offerType = event.params.offerType
  issue.isin = event.params.isin.toString()
  issue.status = event.params.status
  issue.productCategory = event.params.productCategory
  issue.save()
}

export function handleoffered(event: offered): void {
  let offered = new Issue(event.params.security.toHex())
  offered.status = event.params.status
  offered.save()
}

export function handleopened(event: opened): void {
  let opened = new Issue(event.params.security.toHex())
  opened.status = event.params.status
  opened.save()
}

export function handleclosed(event: closed): void {
  let closed = new Issue(event.params.security.toHex())
  closed.status = event.params.status
  closed.save()
}

export function handleallotted(event: allotted): void {
  let allotted = new Issue(event.params.security.toHex())
  allotted.status = event.params.status
  allotted.save()
}
