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

import express, { Request, Response} from "express";

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
 
const getActorsGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count;
  return count;
 
}

// async function main () {
//   const resultMale = await getActorsGender("male")
//   const resultFemale = await getActorsGender("female")
//   console.log (resultMale)
//   console.log (resultFemale)
// }

// main()

const changeSalary = async(id: string, salary: number): Promise<any> => {
  await connection("Actor")
  .update({
    salary: salary,
  })
  .where("id", id)
}

// (async () => {
//   const result = await changeSalary("001", 10)
//   console.log("sua alteração foi realizada com sucesso!")
// })()

const deleteActor =  async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where("id", id)
}

// (async () => {
//   const result = await deleteActor("002")
//   console.log("a informação foi apagada com sucesso!")
// })()






const averageSalary = async (gender: string): Promise<any> => {
  const result = 
  await connection("Actor")
  .avg("salary as average")
  .where({ gender })

  console.log(result[0].average)
}


// async function main () {
//   const resultFemale = await averageSalary ("female")
// }
// main()


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});