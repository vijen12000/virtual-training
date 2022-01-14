import React from 'react'
import Speaker from './Speaker'
import useRequestSpeaker,{REQUEST_STATUS} from '../hook/useRequestSpeaker'

const SpeakersList = ({showSessions}) => {
    const {
        speakerData,
        requestStatus,
        error,
        onFavoriteToggle
    }=useRequestSpeaker(2000)
        
    if (requestStatus===REQUEST_STATUS.FAILURE) 
        return <div className="text-danger">Error:
            <b>Loading Speaker Data failed {error}</b>
        </div>

    if (requestStatus===REQUEST_STATUS.LOADING) 
        return <div>Loading...</div>

    return (
        <div className="container speaker-list">
            <div className="row">
                {speakerData
                    .map(function (speaker) {
                        return (<Speaker
                            key={speaker.id}
                            speaker={speaker}
                            showSessions={showSessions}
                            onFavoriteToggle={() => {
                            onFavoriteToggle(speaker.id)
                        }}/>)
                    })}

            </div>
        </div>
    )
}

export default SpeakersList