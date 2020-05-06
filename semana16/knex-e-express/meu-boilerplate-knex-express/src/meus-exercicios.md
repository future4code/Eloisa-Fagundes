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

### Exercício 2
a) 
b) 
c) 


```
SELECT * FROM Table;
```
* Óbvio
* Sem dúvida