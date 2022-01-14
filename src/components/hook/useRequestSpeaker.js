import { useState,useEffect } from "react"
import {data} from '../../SpeakerData'
const useRequestSpeaker = (delayTime) => {
    const [speakerData,
        setSpeakerData] = useState([])
    const [isLoading,
        setIsLoading] = useState(true)
    const [hasErrored,
        setHasErrored] = useState(false)
    const [error,
        setError] = useState("")

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        async function deplaySpeakerData() {
            try {
                await delay(delayTime);
                //throw "had error"
                setIsLoading(false);
                await setSpeakerData(data);
            } catch (error) {
                setIsLoading(false)
                setHasErrored(true)
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
    return {
        speakerData,
        isLoading,
        hasErrored,
        error,
        onFavoriteToggle
    }
}

export default useRequestSpeaker
