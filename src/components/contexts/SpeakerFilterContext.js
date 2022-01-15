import {createContext} from 'react'
import useSpeakerFilter from '../hook/useSpeakerFilter'

const SpeakerFilterContext = createContext()

const SpeakerFilterProvider = ({children, initialShowSessions, initialEventYear}) => {
    const {
        showSessions,
        setShowSessions,
        eventYear,
        setEventYear,
        searchQuery,
        setSearchQuery,
        EVENT_YEARS
    } = useSpeakerFilter(initialShowSessions,initialEventYear)

    return (
        <SpeakerFilterContext.Provider
            value={{
            showSessions,
            setShowSessions,
            eventYear,
            setEventYear,
            searchQuery,
            setSearchQuery,
            EVENT_YEARS
        }}>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export {SpeakerFilterContext, SpeakerFilterProvider}
