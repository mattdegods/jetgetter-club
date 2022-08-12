import { PublicKey } from "@solana/web3.js";
import DEFAULTS from "../globals";

const getDustBalance = async (publicKey, connection) => {
  return await connection.getParsedTokenAccountsByOwner(publicKey, {
    mint: new PublicKey(DEFAULTS.DUST_TOKEN_ADDRESS)
  }).then(res => {
    if(res?.value[0]?.account?.data?.parsed?.info?.tokenAmount?.uiAmount) {
      return parseInt(res?.value[0]?.account?.data?.parsed?.info?.tokenAmount?.uiAmount)
    } else {
      return 0
    }
  }).catch(err => {
    console.log("DUST ERROR:", err)
  })
};

export default getDustBalance