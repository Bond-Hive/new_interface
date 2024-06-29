import { BTCBgLogo } from "../components/assets";

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
    img: any,
    ticker: string
}

// Define the pool options
export const pool: Pool[] = [
    {
        name: "BTC (June-24)",
        contractAddress: "CDFAPYA7SOZQFPAPOYGCCAEN3S7RFWHJ5HSLH2PHEY5ZN5G7LQECCABG",
        tokenAddress: "CB5IWDNEJO3GMXS2ZPDQYR7FEK6HBNIOBLNNUKWN66SRXYCWZIHTRRZ5",
        tokenDecimals: 18,
        tokenSymbol: "USDT",
        shareId: "CD2ZTXAHYJ5CGCIWAVXT4P24CZL4PHN3FQMWFVP5HEHEBIRZCIZZ3DYR",
        shareDecimals: 7,
        shareSymbol: "VST",
        apy: "13.16%",
        expiration: "2024-06-28",
        underlying: "BTC Futures and Spot",
        img: BTCBgLogo,
        ticker: "BTC"
    }
];

