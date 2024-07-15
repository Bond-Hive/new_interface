import { BTCBgLogo, EthBgWhiteLogo } from "../components/assets";

// Define the Pool type
export interface Pool {
  name: string;
  contractAddress: string;
  tokenAddress: string;
  tokenDecimals: number;
  tokenSymbol: string;
  shareId: string;
  shareDecimals: number;
  shareSymbol: string;
  apy: string;
  expiration: string;
  underlying: string;
  img: any;
  ticker: string;
  reserves: string;
  minimum: string;
}

// Define the pool options
export const pool: any= [
    {
      name: "BTC (Sept-24)",
      contractAddress:
        "CCTU5JLVTEOTGQVI7R2AQFM642N5LOD4ZAMDE6T7IF5Y2GGQM5Q72LKK",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CCI2JMTDKVWUBBWDALWQBOLTCTJPTXTNUA46T4ILTWOYRD3TA64NBJDA",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "9.01%",
      expiration: "27, Sept 2024",
      underlying: "BTC Futures and Spot",
      img: BTCBgLogo,
      ticker: "BTC",
      reserves: "0",
      minimum: "100",
    },
    {
      name: "ETH (Sept-24)",
      contractAddress:
        "CCCBQYXP5J7F3MZA55WMIMFGZCNAOPWOVEX7XROJISJRSSO7DDOJEPRM",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CDRKTNM3TCFOFJMO6B6LXZ63GGHVKLABZMJMQG3SBTTFSIUS6SK3242C",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "9.66%",
      expiration: "27, Sept 2024",
      underlying: "Ethereum Futures and Spot",
      img: EthBgWhiteLogo,
      ticker: "ETH",
      reserves: "0",
      minimum: "100",
    },
    {
      name: "BTC (Dec-24)",
      contractAddress:
        "CBKW3RO4V5KAF6ZLLBQBFUWCEI5Z453JPK35XXYWSZKJSFYKOMZUH34F",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CA24PDEIZFOVKV6L7VZC5VCUWTJCCQN7G3TBGXCHY4WZY4HKXXX5C7GG",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "9.47%",
      expiration: "27, Dec 2024",
      underlying: "BTC Futures and Spot",
      img: BTCBgLogo,
      ticker: "BTC",
      reserves: "0",
      minimum: "100",
    },
    {
      name: "ETH (Dec-24)",
      contractAddress:
        "CBMIH3NRB7CJSZYGLUF7ZAOQB5TR25IQTO4URXIQ3XWGAAEXGDMMTXEF",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CCVPGWH6KQIFDIJK42PNYHEL3SGPNCGKA4VDSU5ITVL2A4J3XTBTIWG4",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "9.20%",
      expiration: "27, Dec 2024",
      underlying: "Ethereum Futures and Spot",
      img: EthBgWhiteLogo,
      ticker: "ETH",
      reserves: "0",
      minimum: "100",
    }
  ];
