### Exercício 1
a) As strings são melhores por existir mais possibilidades de combinações, uma chance menor de conflitar com uma outra combinação já existente no banco e por ser uma prática
já estabelecida no mercado.

b) 
```
export class IdGenerator {
    public generate(): string {
        return v4()
    }
}
```

### Exercício 2
a) Esse código cria um novo usuário no banco de dados.

b) 
```
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY, 
  email VARCHAR(255) UNIQUE NOT NULL, 
  password VARCHAR(255) UNIQUE NOT NULL
);
```

c) 
```
public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.connection()
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)


    }
```

d) 
```
const newUser = new UserDatabase()
newUser.createUser("001", "lola@gmail.com","qwerty")
```


### Exercício 3
a) As string diz exatamente o que vamos receber UMA STRING, como solicitado pelo banco de dados sem isso o código pode quebrar.

b) 
```
import * as jwt from "jsonwebtoken"


 export class Authenticator {
     private static EXPIRES_IN = "1min"
     public generateToken(input: AuthenticationData):string {
         const token = jwt.sign(
             {
                 id: input.id,
             },
             process.env.JWT_KEY as string,
             {
                 expiresIn:Authenticator.EXPIRES_IN,
             }
         )

         return token
     }
 }

 interface AuthenticationData {
     id: string
 }
```

c) 

### Exercício 4
a) 

b) 

c) 
