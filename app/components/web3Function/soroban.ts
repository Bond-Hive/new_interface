import {
    Contract,
    SorobanRpc,
    TransactionBuilder,
    Networks,
    BASE_FEE,
    nativeToScVal,
    Address,
    xdr,
    Memo,
    MemoType,
    Operation,
    scValToNative,
    TimeoutInfinite,
    Transaction,
} from "@stellar/stellar-sdk";
import { userSignTransaction } from './freighter';
import { getPublicKey } from '@stellar/freighter-api';
import { getTxBuilder } from "@/app/helpers/soroban";

const rpcUrl = "https://soroban-testnet.stellar.org";
const contractAddress = 'CDFAPYA7SOZQFPAPOYGCCAEN3S7RFWHJ5HSLH2PHEY5ZN5G7LQECCABG';

const stringToSymbol = (value: string) => {
    return nativeToScVal(value, { type: "symbol" });
};

const accountToScVal = (account: string) => new Address(account).toScVal();

export const stringToI128 = (value: string): xdr.ScVal =>
    nativeToScVal(value, { type: "i128" });

const params = {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET
};
const provider = new SorobanRpc.Server(rpcUrl, { allowHttp: true });
async function contractInt(caller: string, functName: string, values: xdr.ScVal[] | null) {

    const contract = new Contract(contractAddress);
    const sourceAccount = await provider.getAccount(caller);

    let buildTx;
    if (values === null) {
        buildTx = new TransactionBuilder(sourceAccount, params)
            .addOperation(contract.call(functName))
            .setTimeout(30)
            .build();
    } else {
        buildTx = new TransactionBuilder(sourceAccount, params)
            .addOperation(contract.call(functName, ...values))
            .setTimeout(30)
            .build();
    }

    try {
       const result = await simulateTx(buildTx, provider)
       return result
    } catch (error) {
        console.error(error)
    }

}

export const simulateTx = async <ArgType>(
    tx: Transaction<Memo<MemoType>, Operation[]>,
    server: SorobanRpc.Server,
  ): Promise<ArgType> => {
    const response = await server.simulateTransaction(tx);
  
    if (
      SorobanRpc.Api.isSimulationSuccess(response) &&
      response.result !== undefined
    ) {
      return scValToNative(response.result.retval);
    }
  
    throw new Error("cannot simulate transaction");
  };
async function fetchBalance(addr: any) {
    const caller = await getPublicKey();
    const result = await contractInt(caller, 'balance', [accountToScVal(caller)]);
}

// const getQuoteCont = async (
//     id: string,
//     txBuilder: TransactionBuilder,
//     connection: any,
//     destinationPubKey: string | null = null,
//     functName: string
//   ) => {
//     const contract = new Contract(id);
//     if (!destinationPubKey) {
//       return false;
//     }
//     const tx = txBuilder
//       .addOperation(
//         contract.call(functName)
//       )
//       .setTimeout(30)
//       .build();

//     const result = await simulateTx<string>(tx, connection);
//     return result;
//   };
//   const readContract = async (functName: string) => {
//     const caller = await getPublicKey()
//     const txBuilderBalance = await getTxBuilder(
//       caller!,
//       BASE_FEE,
//       provider,
//       Networks.TESTNET
//     );

//     const result: any = await getQuoteCont(selectedPool.contractAddress, txBuilderBalance, provider, connectorWalletAddress, functName);
//     console.log({[functName]: result});
//     return result
//   }

export { fetchBalance, contractInt,provider };
