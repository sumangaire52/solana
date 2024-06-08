import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"

const keypair = getKeypairFromEnvironment["SECRET_KEY"]
console.log("Loaded keypair from environment")
//import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate()
// console.log("Key pair generated.")
// console.log("Public key: ", keypair.publicKey.toBase58())
// console.log("Secret key: ", keypair.secretKey)