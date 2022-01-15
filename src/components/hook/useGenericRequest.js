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

    function updateRecord(recordUpdated, doneCallback) {
        const originalRecords=[...data];
        const newRecords = data.map(function (rec) {
            return rec.id === recordUpdated.id
                ? recordUpdated
                : rec
        })
        async function delayFunction(params) {
            try {
                setData(newRecords)

                await delay(delayTime)
                
                if(doneCallback) doneCallback()
                
            } catch (error) {
                console.log(error)
                if(doneCallback) doneCallback()
                setData(originalRecords)
            }
        }
        delayFunction();
    }

    return {data, requestStatus, error, updateRecord}
}

export default useGenericRequest
