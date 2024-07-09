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
  minimum: string
}

// Define the pool options
export const pool: Pool[] = [
    {
        name: "BTC (Sept-24)",
        contractAddress: "CBEAGBYBILDESVNLVS4BMBD3RWAEOGJKFYREWWUJFJDSXJAGU45HYN5Y",
        tokenAddress: "CDCECUBPH3UGAKNLR2Q64TWJRHWDUI7CNQTIK2C35DGWI265KJOWBXEZ",
        tokenDecimals: 7,
        tokenSymbol: "USDC",
        shareId: "CBWN7DXJYWT65K5A7ZDAHUTGZMHOIQLBBFDZ6HUJ27H2IKY2RDLAI4VT",
        shareDecimals: 7,
        shareSymbol: "VST",
        apy: "10.92%",
        expiration: "27, Sept 2024",
        underlying: "BTC Futures and Spot",
        img: BTCBgLogo,
        ticker: "BTC",
        reserves: "0",
        minimum: "100"
      },
      {
        name: "ETH (Sept-24)",
        contractAddress: "CBEAGBYBILDESVNLVS4BMBD3RWAEOGJKFYREWWUJFJDSXJAGU45HYN5Y",
        tokenAddress: "CDCECUBPH3UGAKNLR2Q64TWJRHWDUI7CNQTIK2C35DGWI265KJOWBXEZ",
        tokenDecimals: 7,
        tokenSymbol: "USDC",
        shareId: "CBWN7DXJYWT65K5A7ZDAHUTGZMHOIQLBBFDZ6HUJ27H2IKY2RDLAI4VT",
        shareDecimals: 7,
        shareSymbol: "VST",
        apy: "11.16%",
        expiration: "27, Sept 2024",
        underlying: "Ethereum Futures and Spot",
        img: EthBgWhiteLogo,
        ticker: "ETH",
        reserves: "0",
                minimum: "100"
      },
      {
        name: "BTC (Dec-24)",
        contractAddress: "CBEAGBYBILDESVNLVS4BMBD3RWAEOGJKFYREWWUJFJDSXJAGU45HYN5Y",
        tokenAddress: "CDCECUBPH3UGAKNLR2Q64TWJRHWDUI7CNQTIK2C35DGWI265KJOWBXEZ",
        tokenDecimals: 7,
        tokenSymbol: "USDC",
        shareId: "CBWN7DXJYWT65K5A7ZDAHUTGZMHOIQLBBFDZ6HUJ27H2IKY2RDLAI4VT",
        shareDecimals: 7,
        shareSymbol: "VST",
        apy: "12.04%",
        expiration: "27, Dec 2024",
        underlying: "BTC Futures and Spot",
        img: BTCBgLogo,
        ticker: "BTC",
        reserves: "0",
                minimum: "100"
      },
      {
        name: "ETH (Dec-24)",
        contractAddress: "CBEAGBYBILDESVNLVS4BMBD3RWAEOGJKFYREWWUJFJDSXJAGU45HYN5Y",
        tokenAddress: "CDCECUBPH3UGAKNLR2Q64TWJRHWDUI7CNQTIK2C35DGWI265KJOWBXEZ",
        tokenDecimals: 7,
        tokenSymbol: "USDC",
        shareId: "CBWN7DXJYWT65K5A7ZDAHUTGZMHOIQLBBFDZ6HUJ27H2IKY2RDLAI4VT",
        shareDecimals: 7,
        shareSymbol: "VST",
        apy: "9.78%",
        expiration: "27, Dec 2024",
        underlying: "Ethereum Futures and Spot",
        img: EthBgWhiteLogo,
        ticker: "ETH",
        reserves: "0",
                minimum: "100"
      },
];
