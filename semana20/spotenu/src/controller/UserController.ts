import { UserBusiness } from "../business/UserBusiness"
import { UserDatabase } from "../data/UserDatabase"
import { HashManager } from "../services/hashGenerator"
import { TokenGenerator } from "../services/tokenGenerator"
import { IdGenerator } from "../services/idGenerator"
import { Request, Response } from "express"


export class UserController {

    private static UserBusiness = new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new TokenGenerator(),
        new IdGenerator()
    )

    public async signupListener(req: Request, res: Response) {
        try {
            const result = await UserController.UserBusiness.signup(
                req.body.name,
                req.body.email,
                req.body.nickname,
                req.body.password,
                req.body.role,
                req.body.approved
            )

            res.status(200).send(result)

        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message })
        }
    }
}