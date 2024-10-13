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
      name: "BTC (Mar-25)",
      contractAddress:
        "CB5LRBLBP5ATWIADFWKBBEAHET5VHPBHNI645CYEWAGZ3FJFCUZ77JJC",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CBEBQCQ7S6INRNRPDMSJHXXFQ3PRYJN6DVS6KSPPV4RIP7MCD55WYOGY",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "0.0%",
      // expiration: "27, Sept 2024",
      underlying: "BTC Futures and Spot",
      img: BTCBgLogo,
      ticker: "BTC",
      reserves: "0",
      minimum: "100",
      symbolFuture:"BTCUSD_240827"
    },
    {
      name: "ETH (Mar-25)",
      contractAddress:
        "CATCQIV7C5QTCLMBXQ3LZ3U6BQFL5AMAFOKXNLSLDK6CLBFBJWO7CHVH",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CCZXWZIEUFSDHINYBS2NAVOOGG3U657EEXNGBUTIZAOMLFC2PYK6ZJDN",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "0.0%",
      // expiration: "27, Sept 2024",
      underlying: "Ethereum Futures and Spot",
      img: EthBgWhiteLogo,
      ticker: "ETH",
      reserves: "0",
      minimum: "10",
        symbolFuture:"ETHUSD_240827"
    },
    {
      name: "BTC (Dec-24)",
      contractAddress:
        "CA47LEDIUMKJ7LSDI3OLNTZFHMX6RX4PC7KADOM3OMAZ4SI4FK254OGW",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CBO43XS6UOAOUUQDEE7JRCJ7SCSXUGTW2PNNSR3V5TQVL7MDXZL6XQ7X",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "0.0%",
      // expiration: "27, Dec 2024",
      underlying: "BTC Futures and Spot",
      img: BTCBgLogo,
      ticker: "BTC",
      reserves: "0",
      minimum: "100",
          symbolFuture:"BTCUSD_241227"
    },
    {
      name: "ETH (Dec-24)",
      contractAddress:
        "CBBB7U7R5DGPYRBZU4U7EN7SEXMA7GJZV53NDA6A5PPJQIBHBOVTT7HW",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CBBVLM6W5FEYKCKHRLNTTLITIHMYQ437LVY7I7HXCGTPXPW3P6O4ZYZD",
      shareDecimals: 7,
      shareSymbol: "VST",
      apy: "0.0%",
      // expiration: "27, Dec 2024",
      underlying: "Ethereum Futures and Spot",
      img: EthBgWhiteLogo,
      ticker: "ETH",
      reserves: "0",
      minimum: "10",
          symbolFuture:"ETHUSD_241227"
    }
  ];
