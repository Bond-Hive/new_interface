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
        "CCKSPKZ576YRXHBB4E4NAEQSBY55S4NPCRBALMKFDTIC2GTEJTYGDC2P",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CDM2E2QGEAXAN3VHQ4ILXG2SAXF57SAFHBI2ZK2IHOHALQMFW4MTSN6I",
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
      name: "ETH (Sept-24)",
      contractAddress:
        "CCG3PJRSMGLO4NTZ5LKPAJUATIQW4PYVXWKZRQOUPIGMZNYXRAXJKP5S",
      tokenAddress: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
      tokenDecimals: 7,
      tokenSymbol: "USDC",
      shareId: "CDDIUKPZ7IQMLQ4FL5BSBREE5EJBTL6GV7AVQ63A5LDYOQVL57SLSKUO",
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
      shareId: "CBBVLM6W5FEYKCKHRLNTTLITIHMYQ437LVY7I7HXCGTPXPW3P6O4ZYZD",
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
      shareId: "CCVPGWH6KQIFDIJK42PNYHEL3SGPNCGKA4VDSU5ITVL2A4J3XTBTIWG4",
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
