import { UserAccount } from "./userAccount";
import { JSONFileManager } from './JSONFileManager'


export class Bank {
  accounts: UserAccount[];
  fileManager: JSONFileManager;
}