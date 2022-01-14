import React from 'react'
import Speaker from './Speaker'
import useGenericRequest, {REQUEST_STATUS} from '../hook/useGenericRequest'
import {data} from '../../SpeakerData'

const SpeakersList = ({showSessions}) => {
    const {data: speakerData, requestStatus, error, updateRecord} = useGenericRequest(2000, data)

    if (requestStatus === REQUEST_STATUS.FAILURE) 
        return <div className="text-danger">Error:
            <b>Loading Speaker Data failed {error}</b>
        </div>

    if (requestStatus === REQUEST_STATUS.LOADING) 
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
                            updateRecord({
                             ...speaker,
                             favorite: !speaker.favorite
                            })
                        }}/>)
                    })}

            </div>
        </div>
    )
}

export default SpeakersList