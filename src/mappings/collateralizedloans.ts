import {
  NewRWA,
  PostedCollateral,
  Borrowed,
  Repaid,
} from "../../generated/VerifiedMarkets/VerifiedMarkets";
import {
  RWA,
  Collateral,
  CollaterizedLoan,
  CollaterizedLoanRepayment,
} from "../../generated/schema";

export function handleNewRWA(event: NewRWA): void {
  let rwa = RWA.load(event.params.bond.toHexString());
  if (rwa == null) {
    let bondId = event.params.bond.toHexString();
    let rwa = new RWA(bondId);
    rwa.issuer = event.params.issuer.toHexString();
    rwa.asset = event.params.asset.toHexString();
    rwa.collateral = event.params.collateral;
    rwa.bond = event.params.bond.toHexString();
    rwa.apy = event.params.apy.toBigDecimal();
    rwa.issuingDocs = event.params.issuingDocs;
    rwa.faceValue = event.params.faceValue.toBigDecimal();
    rwa.couponFrequency = event.params.couponFrequency.toBigDecimal();
    rwa.tenure = event.params.tenure.toBigDecimal();
    rwa.save();
  } else {
    rwa.issuer = event.params.issuer.toHexString();
    rwa.asset = event.params.asset.toHexString();
    rwa.collateral = event.params.collateral;
    rwa.bond = event.params.bond.toHexString();
    rwa.apy = event.params.apy.toBigDecimal();
    rwa.issuingDocs = event.params.issuingDocs;
    rwa.faceValue = event.params.faceValue.toBigDecimal();
    rwa.couponFrequency = event.params.couponFrequency.toBigDecimal();
    rwa.tenure = event.params.tenure.toBigDecimal();
    rwa.save();
  }
}

export function handleCollateral(event: PostedCollateral): void {
  let collateral = Collateral.load(event.params.bond.toHexString());
  if (collateral == null) {
    let bond = event.params.bond.toHexString();
    let collateral = new Collateral(bond);
    collateral.issuer = event.params.issuer.toHexString();
    collateral.asset = event.params.bond.toHexString();
    collateral.collateral = event.params.collateral;
    collateral.amount = event.params.amount.toBigDecimal();
    collateral.save();
  } else {
    collateral.issuer = event.params.issuer.toHexString();
    collateral.asset = event.params.bond.toHexString();
    collateral.collateral = event.params.collateral;
    collateral.amount = event.params.amount.toBigDecimal();
    collateral.save();
  }
}

export function handleBorrowing(event: Borrowed): void {
  let borrowings = CollaterizedLoan.load(event.params.borrower.toHexString());
  if (borrowings == null) {
    let borrowerId = event.params.borrower.toHexString();
    let borrowings = new CollaterizedLoan(borrowerId);
    borrowings.borrower = event.params.borrower.toHexString();
    borrowings.base = event.params.base;
    borrowings.amount = event.params.amount.toBigDecimal();
    borrowings.bond = event.params.bond.toHexString();
    borrowings.save();
  } else {
    borrowings.borrower = event.params.borrower.toHexString();
    borrowings.base = event.params.base;
    borrowings.amount = event.params.amount.toBigDecimal();
    borrowings.bond = event.params.bond.toHexString();
    borrowings.save();
  }
}

export function handleRepayment(event: Repaid): void {
  let repayments = CollaterizedLoanRepayment.load(
    event.params.borrower.toHexString()
  );
  if (repayments == null) {
    let borrowerId = event.params.borrower.toHexString();
    let repayments = new CollaterizedLoanRepayment(borrowerId);
    repayments.borrower = event.params.borrower.toHexString();
    repayments.base = event.params.base;
    repayments.amount = event.params.amount.toBigDecimal();
    repayments.bond = event.params.bond.toHexString();
    repayments.save();
  } else {
    repayments.borrower = event.params.borrower.toHexString();
    repayments.base = event.params.base;
    repayments.amount = event.params.amount.toBigDecimal();
    repayments.bond = event.params.bond.toHexString();
    repayments.save();
  }
}
