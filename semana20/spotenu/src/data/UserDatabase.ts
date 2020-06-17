import { BaseDataBase } from './BaseDatabase'
import { User } from "../model/User"

export class UserDatabase extends BaseDataBase {
    protected tableName: string = "UserSpotenu"


    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.nickname,
                dbModel.password,
                dbModel.role,
                dbModel.description,
                dbModel.approved
            )

        )
    }

    public async createUser(user: User): Promise<void> {
        await super.setConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                nickname: user.getNickname(),
                password: user.getPassword(),
                role: user.getRole(),
                approved: user.getApproved()
            })
            .into(this.tableName)
    }
}