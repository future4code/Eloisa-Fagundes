import * as fs from 'fs'


export class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }

  setFilePath(path: string): void {
    this.fileName = "./students.json/"
  }

  writeFile(file: any): void {
    fs.writeFileSync(this.fileName, JSON.stringify(file))
  }

  readFile(): any {
    const data = fs.readFileSync(this.fileName);
    return JSON.parse(data.toString());
  }
}

