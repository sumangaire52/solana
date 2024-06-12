import { createMint } from "@solana/spl-token";
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers";
import "dotenv/config"
import {Connection, clusterApiUrl } from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"))

const user = getKeypairFromEnvironment("SECRET_KEY")

const mint = await createMint(connection, user, user.publicKey, null, 2)

const url = getExplorerLink("address", mint.toString(), "devnet")

console.log(url)