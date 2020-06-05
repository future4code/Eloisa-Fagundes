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
    role: string,
    approved: number
     ) {

      if( !name || !email || !password || !role || !approved) {
        throw new InvalidParameterError("Parâmetros inválidos")
      }

      if (email.indexOf("@") === -1) {
        throw new InvalidParameterError("E-mail inválido")
      }

      if (password.length < 6) {
        throw new InvalidParameterError("Senha inválida, verifique se ea possui mais de 6 caracteres.")
      }

    const id = this.idGenerator.generate()

    const hashPassword = await this.hashGenerator.generateHash(password)

    const user = await this.userDatabase.createUser(new User(id, name, email, nickname, hashPassword, stringToUserRole(role), approved))

    const acessToken = this.tokenGenerator.generate({ id, role })
    return { acessToken }
  }
}