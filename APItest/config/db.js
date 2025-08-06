import pkg from "pg"
import dotenv from "dotenv"

const {poll} = pkg;

dotenv.config();

const pool = new Pool({
    user : process.env.PGUSER,
    host : process.env.PGHOST,
    database : process.env.PGDB,
    password : process.env.PGPASSWORD,
    prot : process.env.PGPROT
})

console.log("teste", poll)

pool.on("error", (err) => {
    console.error("dijvhdiwvh", err)
    process.exit(-1)
})