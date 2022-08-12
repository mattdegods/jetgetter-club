import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { sendTransactionWithRetryWithKeypair } from "./transaction.ts";
import getOrCreateAssociatedTokenAccount from "../composables/getOrCreateAssociatedTokenAccount";
import createTransferInstruction from "../composables/createTransferInstructions";
import DEFAULTS from "../globals";

const sendDustTransaction = async (publicKey, signTransaction, connection) => {
  console.log("Processing transaction...");

  try {
    if (!publicKey || !signTransaction) throw new WalletNotConnectedError();
    const toPublicKey = new PublicKey(DEFAULTS.DEAD_DEST);
    const mint = new PublicKey(DEFAULTS.DUST_TOKEN_ADDRESS);
    const currentDate = new Date();
    const dustIncreaseStartDate = new Date("2022-04-07T07:00:00.000Z");
    const dateDifference = currentDate - dustIncreaseStartDate;
    let dustAmount = 1000;

    if (currentDate > dustIncreaseStartDate) {
      let baseMultiplier = 3.33;
      let increaseMultiplier = Math.trunc(
        dateDifference / (1000 * 60 * 60 * 24)
      );
      let dustIncrease = baseMultiplier * (increaseMultiplier + 1);
      dustAmount += dustIncrease;
    }

    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      mint,
      publicKey,
      signTransaction
    );

    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      mint,
      toPublicKey,
      signTransaction
    );

    const transferInstruction = createTransferInstruction(
      fromTokenAccount.address, // source
      toTokenAccount.address, // dest
      publicKey,
      dustAmount * LAMPORTS_PER_SOL,
      [],
      TOKEN_PROGRAM_ID
    );
    
    const { txid, slot } = await sendTransactionWithRetryWithKeypair(
      connection,
      publicKey,
      [transferInstruction],
      signTransaction,
      "confirmed"
    );

    console.log("Transaction Confirmed:", txid, slot);

    return txid ?? null;
  } catch (error) {
    console.log(error);
    return null
  }
};

export default sendDustTransaction;
