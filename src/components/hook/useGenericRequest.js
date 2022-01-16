import {useEffect, useState} from 'react'

export const REQUEST_STATUS = {
    LOADING: "Loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

const useGenericRequest = (delayTime = 1000, initialData) => {
    const [data,
        setData] = useState(initialData)
    const [requestStatus,
        setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error,
        setError] = useState("")

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {

        async function delayFunc(params) {
            try {
                await delay(delayTime)
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                setData(data)
            } catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e);
            }
        }
        delayFunc()
    }, [delayTime])

    function updateRecord(record, doneCallback) {
        const originalRecords = [...data];
        const newRecords = data.map(function (rec) {
            return rec.id === record.id
                ? record
                : rec
        })
        async function delayFunction(params) {
            try {
                setData(newRecords)

                await delay(delayTime)

                if (doneCallback) 
                    doneCallback()

            } catch (error) {
                console.log(error)
                if (doneCallback) 
                    doneCallback()
                setData(originalRecords)
            }
        }
        delayFunction();
    }
    function insertRecord(record, doneCallback) {
        const originalRecords = [...data];
        const newRecords = [record,...data]
        async function delayFunction(params) {
            try {
                setData(newRecords)

                await delay(delayTime)

                if (doneCallback) 
                    doneCallback()

            } catch (error) {
                console.log(error)
                if (doneCallback) 
                    doneCallback()
                setData(originalRecords)
            }
        }
        delayFunction();
    }
    function deleteRecord(record, doneCallback) {
        const originalRecords = [...data];
        const newRecords = data.filter(function (rec) {
            return rec.id !== record.id                
        })
        async function delayFunction(params) {
            try {
                setData(newRecords)

                await delay(delayTime)

                if (doneCallback) 
                    doneCallback()

            } catch (error) {
                console.log(error)
                if (doneCallback) 
                    doneCallback()
                setData(originalRecords)
            }
        }
        delayFunction();
    }

    return {data, requestStatus, error, updateRecord, insertRecord, deleteRecord}
}

export default useGenericRequest
