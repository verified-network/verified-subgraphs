import { 
    RequestIssue,
    issuedVitta,
    platformLiquidity,
    managerReturns,
    platformReturns,
    investorReturns 
  } from "../../generated/Liquidity/Liquidity";
import { 
    LiquidityTokenRequests,
    LiquidityTokenIssues,
    PlatformLiquidity,
    ManagerReturns,
    PlatformReturns,
    InvestorReturns
  } from "../../generated/schema";

export function handleIssueRequest(event: RequestIssue): void {
    let lpTokenRequestors = LiquidityTokenRequests.load(event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(lpTokenRequestors==null){
        let lpTokenRequestor = event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let lpTokenRequestors = new LiquidityTokenRequests(lpTokenRequestor);
        lpTokenRequestors.investor = event.params.investor.toHexString();
        lpTokenRequestors.tokenName = event.params.tokenName;
        lpTokenRequestors.tokenAmount = event.params.tokenAmount.toBigDecimal();
        lpTokenRequestors.save();
    }
    else{
        lpTokenRequestors.investor = event.params.investor.toHexString();
        lpTokenRequestors.tokenName = event.params.tokenName;
        lpTokenRequestors.tokenAmount = event.params.tokenAmount.toBigDecimal();
        lpTokenRequestors.save();
    }
}

export function handleIssuedVitta(event: issuedVitta): void {
    let lptokenHolders = LiquidityTokenIssues.load(event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(lptokenHolders==null){
        let lptokenHolder = event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let lptokenHolders = new LiquidityTokenIssues(lptokenHolder);
        lptokenHolders.investor = event.params.investor.toHexString();
        lptokenHolders.tokenName = event.params.tokenName;
        lptokenHolders.tokenAmount = event.params.tokenAmount.toBigDecimal();
        lptokenHolders.LPToIssue = event.params.LPToIssue.toBigDecimal();
        lptokenHolders.save();
    }
    else{
        lptokenHolders.investor = event.params.investor.toHexString();
        lptokenHolders.tokenName = event.params.tokenName;
        lptokenHolders.tokenAmount = event.params.tokenAmount.toBigDecimal();
        lptokenHolders.LPToIssue = event.params.LPToIssue.toBigDecimal();
        lptokenHolders.save();
    }
}

export function handlePlatformLiquidity(event: platformLiquidity): void {
    let platforms = PlatformLiquidity.load(event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(platforms==null){
        let platform = event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let platforms = new PlatformLiquidity(platform);
        platforms.platform = event.params.platform;
        platforms.manager = event.params.manager.toHexString();
        platforms.token = event.params.token;
        platforms.tokenAmount = event.params.tokenAmount.toBigDecimal();
        platforms.LPToken = event.params.LPToken.toBigDecimal();
        platforms.save();
    }
    else{
        platforms.platform = event.params.platform;
        platforms.manager = event.params.manager.toHexString();
        platforms.token = event.params.token;
        platforms.tokenAmount = event.params.tokenAmount.toBigDecimal();
        platforms.LPToken = event.params.LPToken.toBigDecimal();
        platforms.save();
    }
}

export function handleManagerReturns(event: managerReturns): void {
    let managers = ManagerReturns.load(event.params.manager.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(managers==null){
        let manager = event.params.manager.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let managers = new ManagerReturns(manager);
        managers.platform = event.params.platform;
        managers.manager = event.params.manager.toHexString();
        managers.token = event.params.token;
        managers.distribution = event.params.distribution.toBigDecimal();
        managers.save();
    }
    else{
        managers.platform = event.params.platform;
        managers.manager = event.params.manager.toHexString();
        managers.token = event.params.token;
        managers.distribution = event.params.distribution.toBigDecimal();
        managers.save();
    }
}

export function handlePlatformReturns(event: platformReturns): void {
    let platforms = PlatformReturns.load(event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(platforms==null){
        let platform = event.params.platform.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let platforms = new PlatformReturns(platform);
        platforms.platform = event.params.platform;
        platforms.vitta = event.params.vitta;
        platforms.distribution = event.params.distribution.toBigDecimal();
        platforms.save();
    }
    else{
        platforms.platform = event.params.platform;
        platforms.vitta = event.params.vitta;
        platforms.distribution = event.params.distribution.toBigDecimal();
        platforms.save();
    }
}

export function handleInvestorReturns(event: investorReturns): void {
    let investors = InvestorReturns.load(event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString()));
    if(investors==null){
        let investor = event.params.investor.toHexString().concat('-').concat(event.transaction.hash.toHexString());
        let investors = new InvestorReturns(investor);
        investors.platform = event.params.platform;
        investors.investor = event.params.investor.toHexString();
        investors.vitta = event.params.vitta;
        investors.prorataStake = event.params.prorataStake.toBigDecimal();
        investors.save();
    }
    else{
        investors.platform = event.params.platform;
        investors.investor = event.params.investor.toHexString();
        investors.vitta = event.params.vitta;
        investors.prorataStake = event.params.prorataStake.toBigDecimal();
        investors.save();
    }
}