import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.DB_HOST)

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

// nomeada
// async function main () {
//   const result = await searchActor("Hector Bonilla")
//   console.log (result)
// }

// main()
  
//   createActor("004", "Florinda Meza", 300000000,  new Date("1949-02-02"), "female");

// não nomeada
// (async () => {
//   await createActor ("007", "Rubén Aguirre", 35000000,  new Date("1934-06-15"), "male")
//   console.log("ator criado com sucesso")
// })()




const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
    return result[0]
   
}

// (async () => {
//   const result = await searchActor("Hector Bonilla")
//   console.log(result)
// })()
 