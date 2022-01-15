import {createContext} from 'react'
import useSpeakerFilter from '../hook/useSpeakerFilter'

const SpeakerFilterContext = createContext()

const SpeakerFilterProvider = ({children,initialShowSessions}) => {
    const {showSessions, setShowSessions} = useSpeakerFilter(initialShowSessions)

    return (
        <SpeakerFilterContext.Provider
            value={{
            showSessions,
            setShowSessions
        }}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export {SpeakerFilterContext,SpeakerFilterProvider}
