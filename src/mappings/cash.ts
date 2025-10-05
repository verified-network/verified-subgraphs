import {
  CashIssued,
  CashRedeemed,
  CashDeposits,
  CashTransfer,
} from "../../generated/templates/Cash/Cash";
import {
  CashIssues,
  CashDeposited,
  CashRedemptions,
  CashTransfers,
} from "../../generated/schema";

export function handleCashIssued(event: CashIssued): void {
  let issues = CashIssues.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(issues==null){
    let issue = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let issues = new CashIssues(issue);
    issues.party = event.params.party.toHexString(); 
    issues.currency = event.address.toHexString();   
    //issues.currency = event.params.currency.toHexString();
    issues.amount = event.params.amount.toBigDecimal();
    issues.balance = event.params.balance.toBigDecimal();
    issues.save();
  }
  else{
    issues.party = event.params.party.toHexString();    
    issues.currency = event.address.toHexString();   
    //issues.currency = event.params.currency.toHexString();
    issues.amount = event.params.amount.toBigDecimal();
    issues.balance = event.params.balance.toBigDecimal();
    issues.save();
  }  
}

export function handleCashRedeemed(event: CashRedeemed): void {
  let redemptions = CashRedemptions.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(redemptions==null){
    let redemption = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let redemptions = new CashRedemptions(redemption);
    redemptions.party = event.params.party.toHexString();    
    redemptions.currency = event.address.toHexString();
    //redemptions.currency = event.params.currency.toHexString();
    redemptions.amount = event.params.amount.toBigDecimal();
    redemptions.redeemedFor = event.params.redeemedFor.toBigDecimal();
    redemptions.balance = event.params.balance.toBigDecimal();
    redemptions.save();
  }
  else{
    redemptions.party = event.params.party.toHexString();  
    redemptions.currency = event.address.toHexString();  
    //redemptions.currency = event.params.currency.toHexString();
    redemptions.amount = event.params.amount.toBigDecimal();
    redemptions.redeemedFor = event.params.redeemedFor.toBigDecimal();
    redemptions.balance = event.params.balance.toBigDecimal();
    redemptions.save();
  }
}

export function handleCashDeposits(event: CashDeposits): void {
  let deposits = CashDeposited.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(deposits==null){
    let deposit = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let deposits = new CashDeposited(deposit);
    deposits.party = event.params.party.toHexString();
    deposits.amount = event.params.amount.toBigDecimal();
    deposits.currency = event.address.toHexString();
    //deposits.currency = event.params.currency.toHexString();
    deposits.save();
  }
  else{
    deposits.party = event.params.party.toHexString();
    deposits.amount = event.params.amount.toBigDecimal();
    deposits.currency = event.address.toHexString();
    //deposits.currency = event.params.currency.toHexString();
    deposits.save();
  }  
}

export function handleCashTransfer(event: CashTransfer): void {
  let transfers = CashTransfers.load(event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
  if(transfers==null){
    let transfer = event.params.party.toHexString().concat('-').concat(event.transaction.hash.toHexString());
    let transfers = new CashTransfers(transfer);
    transfers.transferor = event.params.party.toHexString();
    transfers.transferee = event.params.counterparty.toHexString();
    transfers.currency = event.address.toHexString();
    //transfers.currency = event.params.currency.toHexString();
    transfers.amount = event.params.amount.toBigDecimal();
    transfers.deposit = event.params.deposit.toBigDecimal();
    transfers.save();
  }
  else{
    transfers.transferor = event.params.party.toHexString();
    transfers.transferee = event.params.counterparty.toHexString();
    transfers.currency = event.address.toHexString();
    //transfers.currency = event.params.currency.toHexString();
    transfers.amount = event.params.amount.toBigDecimal();
    transfers.deposit = event.params.deposit.toBigDecimal();
    transfers.save();
  }
}
