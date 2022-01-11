import { BigInt } from "@graphprotocol/graph-ts"
import {
  orderNew,
  orderCancel,
  tradeReport
} from "../generated/Trade/Trade"
import { Order, Trade } from "../generated/schema"

export function handleorderNew(event: orderNew): void {
  let order = new Order(event.params.orderReference.toHex())
  order.party = event.params.party.toString()
  order.price = event.params.price
  order.trigger = event.params.trigger
  order.amount = event.params.amount
  order.order = event.params.order
  order.orderType = event.params.orderType
  order.date = event.params.date
  order.status = event.params.status
  order.currency = event.params.currency.toString()
  order.securityName = event.params.securityName
  order.security = event.params.security.toString()
  order.save()
}

export function handleorderCancel(event: orderCancel): void {
  let order = new Order(event.params.orderRef.toHex())
  order.party = event.params.party.toString()
  order.status = event.params.status
  order.save()
}

export function handletradeReport(event: tradeReport): void {
  let trade = new Trade(event.params.partyReference.toHex())
  trade.counterpartyReference = event.params.counterpartyReference.toString()
  trade.isin = event.params.isin.toString()
  trade.company = event.params.company.toString()
  trade.price = event.params.price
  trade.askprice = event.params.askprice
  trade.currency = event.params.currency.toString()
  trade.amount = event.params.amount
  trade.status = event.params.status
  trade.executionDate = event.params.executionDate
  trade.save()
}
