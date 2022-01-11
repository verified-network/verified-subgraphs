import { BigInt } from "@graphprotocol/graph-ts"
import {
  Issues,
  issued,
  offered,
  opened,
  closed,
  allotted
} from "../generated/Issues/Issues"

export function handleissued(event: issued): void {
  
}

export function handleoffered(event: offered): void {}

export function handleopened(event: opened): void {}

export function handleclosed(event: closed): void {}

export function handleallotted(event: allotted): void {}
