import { IdGenerator } from "../services/idGenerator"
import { HashManager } from "../services/hashGenerator"
import { UserDatabase } from "../data/UserDatabase"
import { TokenGenerator } from "../services/tokenGenerator"
import { InvalidParameterError } from "../errors/InvalidParameterError"
import { stringToUserRole, User } from "../model/User"

export class UserBusiness {

  constructor(
    private userDatabase: UserDatabase,
    private hashGenerator: HashManager,
    private tokenGenerator : TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(
    name: string,
    email: string,
    nickname: string,
    password: string,
    role: string
     ) {

      if( !name || !email || !password || !role) {
        throw new InvalidParameterError("Parâmetros inválidos")
      }

      if (email.indexOf("@") === -1) {
        throw new InvalidParameterError("E-mail inválido")
      }

      if (password.length < 6) {
        throw new InvalidParameterError("Senha inválida, verifique se ea possui mais de 6 caracteres.")
      }


    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.generateHash(password)

    const user = new User(id, name, email, nickname, hashPassword, stringToUserRole(role))

    const userDatabase = new UserDatabase()
    await userDatabase.createUser(user)

    const acessToken = this.generate({id, role})
    return {acessToken}
  }
}