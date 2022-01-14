import Filter from './Filter';
import SpeakersList from './Speaker/SpeakersList';
import React, {useState} from 'react'

const Speakers = ({theme, setTheme, data}) => {
    const [showSessions,
        setShowSessions] = useState(true)
    return (<> <Filter
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}/> 
        <SpeakersList data = {
        data} 
            showSessions={showSessions}
        /> </>)
}

export default Speakers
