import "dotenv/config";
import {
    getKeypairFromEnvironment,
    getExplorerLink
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";


const connection = new Connection(clusterApiUrl("devnet"));

const sender = getKeypairFromEnvironment("SECRET_KEY");

const receiver = new PublicKey("GbEoLU49Z7xFAZi7eFipNasDs4LzDYbHRCMvbKwecCjS");

const mintAccount = new PublicKey("6i6Eb3j6bR1v9WyyRY2vyAvuM1Sx3wk71xMe74E8XF8X");

const senderAssociatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    mintAccount,
    sender.publicKey
);

const receiverAssociateTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    mintAccount,
    receiver
)

const signature = await transfer(
    connection,
    sender,
    senderAssociatedTokenAccount.address,
    receiverAssociateTokenAccount.address,
    sender,
    1
)

const link = getExplorerLink("transaction", signature, "devnet");

console.log(link)