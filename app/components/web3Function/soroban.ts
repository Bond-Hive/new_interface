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
    console.log({ result });
}

// Example usage
// const destinationPubKey = "G..."; // Replace with actual destination public key
// const quantity = "1000";
// const values = [
//     accountToScVal(destinationPubKey),
//     stringToI128(quantity),
// ];

export { fetchBalance, contractInt,provider };
