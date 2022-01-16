import path from 'path';
import fs from 'fs'

const {promisify} = require("util");
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const delay = (ms) => new Promise((resolve) => {
    setTimeout(resolve, ms)
})

export default async function handler(req, res) {
    const jsonFile = path.resolve("./", "db.json")
    const method = req
        ?.method;
    const id = req
        ?.query.id;
    const recordFromBody = req
        ?.body;

    switch (method) {
        case "POST":
            await postMethod();
            break;
        case "PUT":
            await putMethod();
            break;
        case "DELETE":
            await deleteMethod();
            break;
        default:
            res
                .status(501)
                .send(`Method ${method} not implemented`);
            console.log(`Method ${method} not implemented`);
    }

    async function putMethod(params) {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000);
            const speakers = JSON
                .parse(readFileData)
                .speakers
            if (!speakers) {
                res
                    .status(404)
                    .send("Error: Request faild with status code 404")
            } else {
                const newSpeakersArray = speakers.map(function (rec) {
                    return rec.id === id
                        ? recordFromBody
                        : rec;
                })
                writeFile(jsonFile, JSON.stringify({
                    speakers: newSpeakersArray
                }, null, 2))
                res.setHeader("Content-Type", "application/json")
                res
                    .status(200)
                    .send(JSON.stringify(recordFromBody, null, 2))
                console.log("PUT /api/speakers status: 200")
            }

        } catch (error) {
            console.log(`PUT /api/speakers/${id} status: 500 unexpected error`)
            res
                .status(500)
                .send("File Not Found on server")
        }
    }

    async function postMethod(params) {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000);
            const speakers = JSON
                .parse(readFileData)
                .speakers
            if (!speakers) {
                res
                    .status(404)
                    .send("Error: Request faild with status code 404")
            } else {

                const idNew = speakers.reduce((accumlator, currentValue) => {
                    const idCurrent = parseInt(currentValue.id);
                    return idCurrent > accumlator
                        ? idCurrent
                        : accumlator
                })

                const newSpeaker={...recordFromBody,id: idNew.toString()}

                const newSpeakersArray = [newSpeaker, ...speakers];

                writeFile(jsonFile, JSON.stringify({
                    speakers: newSpeakersArray
                }, null, 2))
                res.setHeader("Content-Type", "application/json")
                res
                    .status(200)
                    .send(JSON.stringify(newSpeaker, null, 2))
                console.log("POST /api/speakers status: 200")
            }

        } catch (error) {
            console.log(`POST /api/speakers/${id} status: 500 unexpected error`)
            res
                .status(500)
                .send("File Not Found on server")
        }
    }
    async function deleteMethod(params) {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000);
            const speakers = JSON
                .parse(readFileData)
                .speakers
            if (!speakers) {
                res
                    .status(404)
                    .send("Error: Request faild with status code 404")
            } else {
                const newSpeakersArray = speakers.filter(function (rec) {
                    return rec.id !== id                        
                })
                writeFile(jsonFile, JSON.stringify({
                    speakers: newSpeakersArray
                }, null, 2))
                res.setHeader("Content-Type", "application/json")
                res
                    .status(200)
                    .send(JSON.stringify(recordFromBody, null, 2))
                console.log(`DELETE /api/speakers/${id} status: 200`)
            }

        } catch (error) {
            console.log(`DELETE /api/speakers/${id} status: 500 unexpected error`)
            res
                .status(500)
                .send("File Not Found on server")
        }
    }
}