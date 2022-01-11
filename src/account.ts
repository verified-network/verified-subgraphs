import { BigInt } from "@graphprotocol/graph-ts"
import { Account, postAccountEntry } from "../generated/Account/Account"
import { Entry } from "../generated/schema"

export function handlepostAccountEntry(event: postAccountEntry): void {
    let post = new Entry(event.params.accountAddress.toHex())
    post.accountName = event.params.accountName
    post.txDate = event.params.txDate
    post.party = event.params.party.toString()
    post.txType = event.params.txType
    post.txDescription = event.params.txDescription
    post.currency = event.params.currency
    post.txAmount = event.params.txAmount
    post.voucherType = event.params.voucherType
    post.save()
}
