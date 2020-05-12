import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.DB_HOST)

import express, { Request, Response} from "express";

import { AddressInfo } from "net";

import { v4 } from "uuid"
import { IdGenerator } from "./services/IdGenerator";


const id = v4();

console.log("Generated Id: ", id);

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


// app.post("/signup",async (req: Request, res: Response) => {
//   try {
//     const userData = {
//       email: req.body.email,
//       password: req.body.password
//     }
//     const idGenerator = new IdGenerator()
//     const id = idGenerator.generate()

//     const userDataBase = new IdGenerator()
//     await userDataBase.createUser(
//       id,
//       userData.email,
//       userData.password
//     )


//     res.status(200).send({ token: "" })
//   } catch (err) {
//     res.status(400).send({ message: err.message})
//   }

// })

