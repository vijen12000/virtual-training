import Filter from './Filter';
import SpeakersList from './Speaker/SpeakersList';
import React, {useState} from 'react'

const Speakers = ({data}) => {
    const [showSessions,
        setShowSessions] = useState(true)
    return (<> <Filter        
        showSessions={showSessions}
        setShowSessions={setShowSessions}/> 
        <SpeakersList data = {
        data} 
            showSessions={showSessions}
        /> </>)
}

export default Speakers
