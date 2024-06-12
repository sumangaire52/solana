import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


const suppliedToPublicKey = process.argv[2] || null;

if (!suppliedToPublicKey) {
    console.log("Please provide a public key to send to.");
    process.exit(1);
}

const senderKeyPair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`Receiver pub key: ${suppliedToPublicKey}`);

const toPublicKey = new PublicKey(suppliedToPublicKey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log("Connected to devnet cluster");

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer(
    {fromPubkey: senderKeyPair.publicKey,
    toPubkey: toPublicKey,
    lamports: LAMPORTS_TO_SEND
    }
);

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeyPair]);

console.log(`Success! sent ${LAMPORTS_TO_SEND} lamports.`);
console.log(`Transaction signature: ${signature}`);