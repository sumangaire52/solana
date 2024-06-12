import { mintTo } from "@solana/spl-token";
import "dotenv/config";
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10,2);

const mintAccount = new PublicKey("6i6Eb3j6bR1v9WyyRY2vyAvuM1Sx3wk71xMe74E8XF8X");

const user = getKeypairFromEnvironment("SECRET_KEY");

const recipientAssociatedTokenAccount = new PublicKey("Bba2u272HxkffF5ifgkYWKzadmR8nHCjjg27fRTE5vFT")

const transactionSignature = await mintTo(
    connection,
    user,
    mintAccount,
    recipientAssociatedTokenAccount,
    user,
    10 * MINOR_UNITS_PER_MAJOR_UNITS
)
const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(link)