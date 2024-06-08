import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
try{
    const publicKey = new PublicKey(suppliedPublicKey);
    const connection = new Connection("https://api.mainnet.solana.com", "confirmed");
    console.log("Connected!")
    const balance = await connection.getBalance(publicKey);

    const balanceInSol = balance / LAMPORTS_PER_SOL;

    console.log('Balance for account ', publicKey, 'is ', balanceInSol);
} 
catch {
    console.log("Invalid Public Key")
    }