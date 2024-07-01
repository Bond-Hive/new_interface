"use client"
import Image from "next/image";
import DAppHeader, { kit } from "../components/navigations/dAppHeader";
import Header from "../components/navigations/header";
import {
  ApyArrowIcon,
  BTCBgLogo,
  Calendar,
  ChervonUp,
  EthBgWhiteLogo,
  SortIcon,
  UsdcBgLogo,
  chervonRight,
} from "../components/assets";
import { DappChart, MediumChartBg, MobileDappChart } from "../components/assets/bg";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import DappFooter from "../components/navigations/dAppFooter";
import DepositFunds from "../components/modals/deposit";
import React, { memo, useEffect, useState } from "react";
import { fetchBalance, provider } from "../components/web3Function/soroban";
import { BASE_FEE, accountToScVal, getEstimatedFee, getServer, getTxBuilder, mintTokens, simulateTx, submitTx } from "../helpers/soroban";
import { TESTNET_DETAILS, signTx } from "../helpers/network";
import { Contract, TransactionBuilder } from "@stellar/stellar-sdk";
import UseStore from "@/store/UseStore";
import { ethers } from "ethers";
import { stroopToXlm, xlmToStroop } from "../helpers/format";
import { ERRORS } from "../helpers/error";
import { pool } from "../constants/poolOptions";
import WithdrawFunds from "../components/modals/withdraw";

const MainDapp = () => {
  const {setConnectorWalletAddress, connectorWalletAddress, poolReserve, setPoolReserve,transactionsStatus,setSelectedPool, selectedPool} = UseStore()
  const [openState, setOpenState] = useState(false)
  const [openWithdrawState, setOpenWithdrawState] = useState(false)
  const [shareBalance, setShareBalance] = useState("0")
  const [selectedNetwork] = React.useState(TESTNET_DETAILS);
  const getReserveContractCal = async (
    id: string,
    txBuilder: TransactionBuilder,
    connection: any,
    destinationPubKey: string | null = null,
  ) => {
    console.log("id", id);
    const contract = new Contract(id);
    if ( !destinationPubKey ) {
      console.log("destinationPubKey is null");
      return false;
    }
    const tx = txBuilder
      .addOperation(
        contract.call("reserves"),
      )
      .setTimeout(30)
      .build();

    const result = await simulateTx<string>(tx, connection);
    console.log("result", result);
    console.log("result.toString()", result.toString());
    return ethers.formatUnits(result, pool[0].tokenDecimals);
  }; 


  const getPoolReserve = async (poolIndex: number) => {
    const txBuilderBalance = await getTxBuilder(
      connectorWalletAddress!,
      BASE_FEE,
      provider,
      selectedNetwork.networkPassphrase
    );

    const poolReserve: any = await getReserveContractCal(pool[poolIndex].contractAddress, txBuilderBalance, provider, connectorWalletAddress);
    setPoolReserve({[poolIndex]: parseFloat(poolReserve).toFixed(2).toString()})
    console.log("poolReserve", poolReserve);
    return poolReserve
  }

  // Share Balance
  const getShareCont = async (
    id: string,
    txBuilder: TransactionBuilder,
    connection: any,
    destinationPubKey: string | null = null
  ) => {
    console.log("id", id);
    const contract = new Contract(id);
    if (!destinationPubKey) {
      console.log("destinationPubKey is null");
      return false;
    }
    const tx = txBuilder
      .addOperation(
        contract.call(
          "balance",
          ...[
            accountToScVal(destinationPubKey), // id
          ]
        )
      )
      .setTimeout(30)
      .build();

    const result = await simulateTx<string>(tx, connection);
    console.log("result", result);
    console.log("result.toString()", result.toString());
    return ethers.formatUnits(result, 7);
  };
  const getShareBalance = async (poolIndex: number) => {
    const txBuilderBalance = await getTxBuilder(
      connectorWalletAddress!,
      BASE_FEE,
      provider,
      selectedNetwork.networkPassphrase
    );

    const shareBalance: any = await getShareCont(pool[poolIndex].shareId, txBuilderBalance, provider, connectorWalletAddress);
    setShareBalance(shareBalance)
    console.log({shareBalance});
    return shareBalance
  }


  useEffect(() => {
    console.log({connectorWalletAddress})
    if(connectorWalletAddress){
      pool.forEach((pool, index) =>{
        getPoolReserve(index)
        getShareBalance(index)
      } )
    }
  }, [connectorWalletAddress, transactionsStatus])


  return (
    <>
    <div className="dapp">
      <DAppHeader />

      <div className="md:w-9/12 md:max-lg:w-11/12 mx-auto md:pt-24 pt-8 px-5 h-[80vh]">
        {/* three cards */}
        <div className="max-sm:max-w-10/12 max-sm:overflow-x-scroll max-w-[1500px] mx-auto">
          <div className=" max-sm:gri flex grid-cols-3 md:gap-6 gap-3 max-sm:w-[850px] ">
            <div className="eth_avg max-sm:w-[170px] max-sm:h-[184px] w-3/12 h-[136px] card relative overflow-hidden">
              <div className="flex justify-between items-center md:p-4 p-2">
                <div className="">
                  <div className="flex items-center gap-2">
                    <Image
                      src={EthBgWhiteLogo}
                      width={16}
                      height={16}
                      alt="EthBgWhiteLogo"
                    />
                    <h2 className="text-[9px] text-darkPrimText">
                      ETH Avg Yield
                    </h2>
                    <div className="time_tag flex items-center gap-1 py-[3px] px-[5px]">
                      <div className="w-[14px] max-sm:w-[7px] max-sm:h-[7px] h-[14px] relative">
                        <Image
                          src={Calendar}
                          layout="fill"
                          alt=""
                          className="w-full rounded-t-lg object-center object-cover "
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <p className="text-[6px] text-[#A586FE]">Mar-24</p>
                    </div>
                  </div>
                  <h1 className="text-[20px] text-white mt-2 brFirma_font">13.61%</h1>
                </div>
              </div>
              <div className="mt-7">
              <Image
                  src={DappChart}
                  width={274}
                  height={104}
                  alt="right"
                  className="absolute bottom-0 max-sm:hidden"
                />
                <Image
                  src={MobileDappChart}
                  width={274}
                  height={104}
                  alt="right"
                  className="absolute bottom-0 max-sm:block hidden"
                />
              </div>
            </div>
            <div className="btc_avg max-sm:w-[170px] max-sm:h-[184px] w-3/12 h-[136px] card relative overflow-hidden">
              <div className="flex justify-between items-center md:p-4 px-2 max-sm:py-2">
                <div className="">
                  <div className="flex items-center gap-2">
                    <Image
                      src={BTCBgLogo}
                      width={16}
                      height={16}
                      alt="EthBgWhiteLogo"
                    />
                    <h2 className="text-[9px] text-darkPrimText">
                      BTC Avg Yield
                    </h2>
                    <div className="time_tag flex items-center gap-1 py-[3px] px-[5px]">
                      <div className="w-[14px] max-sm:w-[7px] max-sm:h-[7px] h-[14px] relative">
                        <Image
                          src={Calendar}
                          layout="fill"
                          alt=""
                          className="w-full rounded-t-lg object-center object-cover "
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <p className="text-[8px] text-[#A586FE]">Mar-24</p>
                    </div>
                  </div>
                  <h1 className="text-[20px] text-white mt-2 brFirma_font">20.61%</h1>
                </div> 
              </div>
              <div className="mt-7">
                <Image
                  src={DappChart}
                  width={274}
                  height={104}
                  alt="right"
                  className="absolute bottom-0 max-sm:hidden"
                />
                <Image
                  src={MobileDappChart}
                  width={274}
                  height={104}
                  alt="right"
                  className="absolute bottom-0 max-sm:block hidden"
                />
              </div>
            </div>
            <div className="liquid_staking max-sm:h-[184px] w-[538px] w-6/12 card relative overflow-hidden">
              <div className="flex justify-between items-center p-4">
                <div className="">
                  <div className="flex items-center">
                    <p className="inner-tag text-center shadowBackDrop text-secText px-3 py-1 text-[12px]">
                      Ecosystem update
                    </p>
                  </div>
                  <h1 className="text-[20px] text-white mt-5">
                    Liquid Staking Vaults are Live!
                  </h1>
                </div>
              </div>
              <div className="">
                <div className="w-[159px] max-sm:w-[200px] max-sm:h-[180px] h-[136px] absolute bottom-0 right-0 max-sm:-right-5">
                  <Image
                    src={"/PNG/dappEnergy.png"}
                    layout="fill"
                    alt=""
                    className="w-full rounded-t-lg object-center object-cover "
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Investment pools */}
        <div className="my-16 max-w-[1500px] mx-auto">
          <div className="title_arrange flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <h1 className="text-white">Investment pools</h1>
              <p className="text-secText inner-tag shadowBackDrop text-center py-1 px-3 text-[12px]">
                {pool.length} available{" "}
              </p>
            </div>
            {/* <div className="arrange flex gap-2 items-center max-md:hidden">
              <div className="arrange_icon active text-white flex items-center justify-center cursor-pointer">
                <RectangleGroupIcon className="w-[19px] h-[19px]" />
              </div>
              <div className="arrange_icon text-secText flex items-center justify-center cursor-pointer">
                <RectangleGroupIcon className="w-[19px] h-[19px]" />
              </div>
            </div> */}
          </div>
          <div className="table w-full mt-5">
            <div className="table_heading text-blueish p-4 flex justify-between items-center mb-5">
              <div className="flex items-center gap-2 w-5/12  max-sm:w-7/12">
                <h2 className="text-[15px]">Strategy</h2>
                <Image
                  src={SortIcon}
                  width={14}
                  height={14}
                  alt="right"
                  className=""
                />
              </div>
              <div className="flex items-center gap-2 w-3/12  max-sm:w-5/12">
                <h2 className="text-[15px]">APY</h2>
                <Image
                  src={SortIcon}
                  width={14}
                  height={14}
                  alt="right"
                  className=""
                />
              </div>
              <div className="flex items-center gap-2 w-3/12 max-md:hidden">
                <h2 className="text-[15px]">Deposit Asset</h2>
                <Image
                  src={SortIcon}
                  width={14}
                  height={14}
                  alt="right"
                  className=""
                />
              </div>
              <div className="flex items-center gap-2 w-3/12 max-md:hidden">
                <h2 className="text-[15px]">Reserves</h2>
                <Image
                  src={SortIcon}
                  width={14}
                  height={14}
                  alt="right"
                  className=""
                />
              </div>
              <div className="flex items-center gap-2 w-3/12 max-md:hidden">
                <h2 className="text-[15px]">Maturity</h2>
                <Image
                  src={SortIcon}
                  width={14}
                  height={14}
                  alt="right"
                  className=""
                />
              </div>
            </div>
            <div className="table_pool_container max-md:hidden">
              {pool.map((pool, index) => (
                <div
                  className={`table_pool flex px-4 border-border_pri pb-3 pt-6 ${
                    index !== 0 && "border-t"
                  }`}
                  key={`${index}--pool`}
                >
                  <div className="strategy_Names w-5/12 bg-red-60">
                    <div className="flex items-center mb-3 gap-2">
                      <Image
                        src={pool.img}
                        width={38}
                        height={38}
                        alt="right"
                        className=""
                      />
                      <div className="">
                        <h1 className="text-white text-[18px]">
                          {pool.name}
                        </h1>
                        <p className="text-darkPrimText text-sm capitalize">
                          {pool.name} Futures and Spot
                        </p>
                        <p className="text-darkPrimText text-sm mt-2">Minimum <span className="text-blueish">$100</span></p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                    <button
                      className={` button1 inline-flex items-center px-9 py-[4px] gap-1 ${!connectorWalletAddress && "hover:bg-transparent"}`}
                      onClick={() => {
                        setOpenState(true)
                        setSelectedPool(pool)
                      }}
                      disabled={!connectorWalletAddress}
                      // onClick={() => fetchBalance()}
                    >
                      <p className="text-sm">Invest</p>
                      <Image
                        src={chervonRight}
                        width={13}
                        height={13}
                        alt="chervonRight"
                      />
                    </button>
                    <button
                      className={` button1 inline-flex items-center px-9 py-[4px] gap-1 ${Number(shareBalance) <= 0 || !connectorWalletAddress && "hover:bg-transparent"}`}
                      onClick={() => {
                        setOpenWithdrawState(true)
                        setSelectedPool(pool)
                      }}
                      disabled={!connectorWalletAddress || Number(shareBalance) <= 0}
                    >
                      <p className="text-sm">My position</p>
                    </button>
                    </div>
                  </div>
                  <div className="APY text-blueish  w-3/12">
                    <h1 className="text-lg mb-1 ">{pool.apy}%</h1>
                    <div className="time_tag flex items-center gap-1 py-[3px] px-[5px] w-[150px]">
                      {" "}
                      <Image
                        src={ApyArrowIcon}
                        width={14}
                        height={14}
                        alt="right"
                        className=""
                      />{" "}
                      <p className="text-[13px] text-[#A586FE]">
                        2.1% vs. last month
                      </p>
                    </div>
                  </div>
                  <div className="Deposit_asset text-blueish w-3/12">
                    <div className="asset_logo flex items-center mb-2">
                      <Image
                        src={pool.ticker == "BTC" ? BTCBgLogo: EthBgWhiteLogo}
                        width={25}
                        height={25}
                        alt="token-img"
                        className=""
                      />
                      <Image
                        src={UsdcBgLogo}
                        width={25}
                        height={25}
                        alt="token-img"
                        className="-ml-2 relative z-9"
                      />
                    </div>
                    <h1 className="text-[15px] mb-1 ">{pool.ticker}/{pool.tokenSymbol}</h1>
                  </div>
                  <div className="minimum text-blueish w-3/12">
                    <h1 className="text-[18px] mb-2 ">${poolReserve[index] ? poolReserve[index] : "0.00"}</h1>
                  </div>
                  <div className="maturity text-blueish w-3/12">
                    <h1 className="text-[18px] mb-2 ">{pool.expiration}</h1>
                  </div>
                </div>
              ))}
            </div>
            {/*Mobile Pool Strategies */}
            <div className="table_pool_container_mobile flex-col gap-4 hidden max-md:flex">
              {pool.map((pool, index) => (
                <div
                  className="table_pool_container p-5 text-secText"
                  key={`${index}--pool`}
                >
                  <div className="flex border-border_pri border-b pb-3 justify-between">
                    <div className="flex items-center mb-4 gap-2 ">
                      <Image
                        src={pool.img}
                        width={38}
                        height={38}
                        alt="right"
                        className=""
                      />
                      <div className="">
                        <h1 className="text-white text-[18px]">
                          {" "}
                          {pool.name}
                        </h1>
                        <p className="text-darkPrimText text-[10px] capitalize">
                          {pool.name} Futures and Spot
                        </p>
                      </div>
                    </div>
                    <div className="APY text-blueish  ">
                      <h1 className="text-[16px] mb-1 ">{pool.apy}%</h1>
                      <div className="time_tag flex items-center gap-1 py-[3px] px-[5px] w-[150px]">
                        {" "}
                        <Image
                          src={ApyArrowIcon}
                          width={14}
                          height={14}
                          alt="right"
                          className=""
                        />{" "}
                        <p className="text-[12px] text-[#A586FE]">
                          2.1% vs. last month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[16px] py-4">
                    <div className="maturity flex justify-between">
                      <p className="">Maturity</p>
                      <p className=" text-paraDarkText">
                        <span className="text-blueish mr-2 text-right">
                          {pool.expiration}
                        </span>
                      </p>
                    </div>
                    <div className="deposit_assets flex justify-between items-center my-4">
                      <p className="">Deposit assets</p>
                      <div className="Deposit_asset text-blueish  flex">
                        <div className="asset_logo flex items-center -ml-4">
                          <Image
                            src={pool.ticker == "BTC" ? BTCBgLogo: EthBgWhiteLogo}
                            width={25}
                            height={25}
                            alt="token-img"
                            className=""
                          />
                          <Image
                            src={UsdcBgLogo}
                            width={25}
                            height={25}
                            alt="token-img"
                            className="-ml-2 relative z-9"
                          />
                        </div>
                        <h1 className="text-[16px] mb-1 ml-2">
                        {pool.ticker}/{pool.tokenSymbol}
                        </h1>
                      </div>
                    </div>
                    <div className="min_invest flex justify-between items-center">
                      <p className="">Minimum Inv.</p>
                      <p className=" text-blueish">
                        $100
                        {/* <span className="text-[13px] text-paraDarkText ml-2">
                          -{pool.minimum} USDT
                        </span> */}
                      </p>
                    </div>
                  </div>
                  <button
                    className={`w-full button1 flex items-center justify-center px-9 py-3 gap-1`}
                    onClick={() => {
                      setOpenState(true)
                      setSelectedPool(pool)
                    }}
                    disabled={!connectorWalletAddress}
                  >
                    <p className="text-sm">Invest Now</p>
                    <Image
                      src={chervonRight}
                      width={13}
                      height={13}
                      alt="chervonRight"
                    />
                  </button>
                  <button
                    className={`w-full button1 flex items-center justify-center px-9 py-3 gap-1 mt-3 ${Number(shareBalance) <= 0 && "hover:bg-transparent"}`}
                    onClick={() => {
                      setOpenWithdrawState(true)
                      setSelectedPool(pool)
                    }}
                    disabled={Number(shareBalance) <= 0}
                  >
                    <p className="text-sm">My Position</p>
                    <Image
                      src={chervonRight}
                      width={13}
                      height={13}
                      alt="chervonRight"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DappFooter />
    </div>

    {
      openState &&     <DepositFunds setOpenState={setOpenState}/>
    }
    {
      openWithdrawState && <WithdrawFunds setOpenState={setOpenWithdrawState} shareBalance={shareBalance}/>
    }
    </>
  );
};

export default MainDapp;
