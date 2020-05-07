### Exercício 1
a) A resposta que o raw devolve é o que o banco de dados retorna pra ele. 

b) 
```
const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
    return result[0]
   
}

(async () => {
   const result = await searchActor("Hector Bonilla")
   console.log(result)
 })()
```


c) ***GOLI, EU TENTEI USAR O GROUP BY, MAS NÃO ACHEI UM LUGAR PRA COLOCAR. SÓ CONSEGUI CHAMAR UM POR VEZ, É ISSO MESMO?***
```
const getActorsGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count;
  return count;
 
}

async function main () {
  const resultMale = await getActorsGender("male")
  const resultFemale = await getActorsGender("female")
  console.log ("MALE", resultMale)
  console.log ("FEMALE", resultFemale)
}

main()
```

### Exercício 2
a) 
```
const changeSalary = async(id: string, salary: number): Promise<any> => {
  await connection("Actor")
  .update({
    salary: salary,
  })
  .where("id", id)
}

(async () => {
  const result = await changeSalary("001", 10)
  console.log("sua alteração foi realizada com sucesso!")
})()
```
b) 
```
const deleteActor =  async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where("id", id)
}

(async () => {
  const result = await deleteActor("002")
  console.log("a informação foi apagada com sucesso!")
})()
```
c) 

```
const averageSalary = async (gender: string): Promise<any> => {
  const result = 
  await connection("Actor")
  .avg("salary as average")
  .where({ gender })

  console.log(result[0].average)
}

async function main () {
  const resultFemale = await averageSalary ("female")
}
main()
```


### Exercício 3
a) O req representa o  request, ou seja o que é esperado dessa requisição. Para esse requisição em específico é necessário passar o parâmetro id.

b) A primeira linha é a resposta da requisição, caso o Request seja atendido, ele responde com o ator procurado através do ID, caso contrário é exibida uma resposta de erro, não encontrado.

c) 

