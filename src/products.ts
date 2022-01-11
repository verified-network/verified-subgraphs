import { BigInt } from "@graphprotocol/graph-ts"
import {
  Products,
  ProductIssued
} from "../generated/Products/Products"
import { Product } from "../generated/schema"

export function handleProductIssued(event: ProductIssued): void {
  let product = new Product(event.params.issue.toHex())
  product.productReference = event.params.productReference
  product.productCategory = event.params.productCategory
  product.issuerName = event.params.issuerName
  product.registrationDocs = event.params.registrationDocs
  product.save()
}

