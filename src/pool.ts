import { BigInt } from "@graphprotocol/graph-ts"
import {
  PoolFactory,
  PoolCreated
} from "../generated/PoolFactory/PoolFactory"
import { Pool } from "../generated/schema"

export function handlePoolCreated(event: PoolCreated): void {
  let pool = new Pool(event.params.pool.toHex())
  pool.security = event.params.security.toString()
  pool.cash = event.params.cash.toString()
}

