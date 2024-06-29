import {
    isConnected,
    getPublicKey,
    signAuthEntry,
    signTransaction,
    signBlob,
    isAllowed,
    setAllowed,
    requestAccess
  } from "@stellar/freighter-api";

const hasPreviouslyAllowed = async () => {
    const isAllowedd = await isAllowed()
    return isAllowedd
}
const hasFreighterInstalled = async () => {
    let status
    try {
        status = await isConnected()
        return status
    } catch (error) {
        console.log({error})
    }
}

export {
    hasPreviouslyAllowed,
    hasFreighterInstalled
}