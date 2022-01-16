import path, {resolve} from 'path';
import fs from 'fs'

const {promisify} = require("util");
const readFile = promisify(fs.readFile)
//const writeFile = promisify(fs.writeFile)
const delay = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms)
})

export default async function handler(req, res) {
    const jsonFile=path.resolve("./","db.json")
    try {
        const readFileData =await readFile(jsonFile)
        
        await delay(1000);
        const speakers=JSON.parse(readFileData).speakers
        if(speakers){
            res.setHeader("Content-Type","application/json")
            res.status(200).send(JSON.stringify(speakers, null, 2))
            console.log("GET /api/speakers status: 200")
        }

    } catch (error) {        
        console.log("GET /api/speakers error",error)
        res.status(404).send("File Not Found on server")
    }
}