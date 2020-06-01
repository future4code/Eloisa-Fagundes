import knex from "knex";
import dotenv from "dotenv";



dotenv.config();
console.log(process.env.DB_HOST)

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

import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { promises } from "dns";
import { connect } from "http2";

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

const createNewUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
  .insert({
    id:id,
    name:name,
    nickname:nickname,
    email: email
  })
  .into("TodoListUser")
}

const getUserById = async (
  id:string
): Promise<any> => {
  const result =
  await connection.select("*").from("TodoListUser").where({id})
  // console.log(result[0])
  return result[0]
}

// (async () => {
//   await getUserById ("001")
// })()

 
// 1. Qual o método?
// PUT / url-/user
// 2. De onde vem os inputs desse endpoint? {body, path, query}
//  { "name": "Astro Dev",	"nickname": "astrodev", "email": "astro@dev.com"}
// 3. Qual a resposta dele?
// {MESSAGE: Usuário criado com sucesso!}


app.put("/user", async (req: Request, res: Response) => {
  try {
    const id = new Date().getTime().toString()
    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email

    await createNewUser(id, name, nickname, email )

    console.log("id", id)
    console.log("name", name)
    console.log("nickname", nickname)
    console.log("email", email)

    res.status(200).send({ message: "Deu certo!" })

  } catch (err) {
    res.status(400).send({ message: err.message })
  }
})


app.get("/user/:id", async (req:Request, res:Response) => {
  try{
    const user = await getUserById(req.params.id)
    if(user) {
      res.status(200).send({
        id: user.id,
        nickname: user.nickname
      })
    } else {
      res.status(404).send({message: "usuário não encontrado."})
    }
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
})



