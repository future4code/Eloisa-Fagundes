import { UserAccount } from "./userAccount";
import { JSONFileManager } from './JSONFileManager'


export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;


    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
        this.accounts = accounts
        this.fileManager = fileManager
    }

   createAccount(accounts: UserAccount): void {
    this.accounts.push(accounts)
   }


}

