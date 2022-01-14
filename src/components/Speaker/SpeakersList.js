import React from 'react'
import Speaker from './Speaker'
import useRequestSpeaker from '../hook/useRequestSpeaker'

const SpeakersList = ({showSessions}) => {
    const {
        speakerData,isLoading,
        hasErrored,error,
        onFavoriteToggle
    }=useRequestSpeaker(2000)
        
    if (hasErrored) 
        return <div className="text-danger">Error:
            <b>Loading Speaker Data failed {error}</b>
        </div>

    if (isLoading) 
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