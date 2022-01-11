import { BigInt } from "@graphprotocol/graph-ts"
import { 
        PostTrade, 
        tradeSettled 
} from "../generated/PostTrade/PostTrade"
import { Settlement } from "../generated/schema"

export function handletradeSettled(event: tradeSettled): void {
  let settlement = new Settlement(event.params.partyReference.toHex())
  settlement.counterpartyReference = event.params.counterpartyReference.toString()
  settlement.save()
}
