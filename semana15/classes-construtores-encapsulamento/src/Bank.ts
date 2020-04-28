import { UserAccount } from "./userAccount";
import { JSONFileManager } from './JSONFileManager'


export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;


    constructor(_accounts: UserAccount[], _fileManager: JSONFileManager) {
        this.accounts = _accounts
        this.fileManager = _fileManager
    }

   

}

