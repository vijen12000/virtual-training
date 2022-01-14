import {useState, useEffect} from "react"
import {data} from '../../SpeakerData'

export const REQUEST_STATUS = {
    LOADING: "Loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

const useRequestSpeaker = (delayTime) => {
    const [speakerData,
        setSpeakerData] = useState([])
    const [requestStatus,
        setRequestStatus] = useState(REQUEST_STATUS.LOADING)

    const [error,
        setError] = useState("")

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        async function deplaySpeakerData() {
            try {
                await delay(delayTime);                
                setRequestStatus(REQUEST_STATUS.SUCCESS)
                await setSpeakerData(data);
            } catch (error) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(error)
            }
        }
        deplaySpeakerData()
    }, [delayTime])

    function onFavoriteToggle(speakerId) {
        const speakerPrevious = speakerData.find(function (rec) {
            return rec.id === speakerId
        })
        let speakerRecUpdated = {
            ...speakerPrevious,
            favorite: !speakerPrevious.favorite
        }
        let speakerDataNew = speakerData.map(function (rec) {
            return rec.id === speakerId
                ? speakerRecUpdated
                : rec
        })
        setSpeakerData(speakerDataNew)
    }
    return {speakerData, requestStatus, error, onFavoriteToggle}
}

export default useRequestSpeaker
