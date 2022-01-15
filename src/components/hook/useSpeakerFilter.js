import {useState} from 'react'

const useSpeakerFilter = (initialShowSessions) => {
    const [showSessions,
        setShowSessions] = useState(initialShowSessions)
    return {
        showSessions,
        setShowSessions
    }
}

export default useSpeakerFilter
