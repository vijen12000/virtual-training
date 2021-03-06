import {useContext} from 'react'
import Speaker from './Speaker'
import SpeakerAdd from './SpeakerAdd'
import useRequest, {REQUEST_STATUS} from '../hook/useRequest'
import {SpeakerFilterContext} from '../contexts/SpeakerFilterContext'

const SpeakersList = () => {
    const {data: speakerData, requestStatus, error, updateRecord, insertRecord, deleteRecord} = useRequest()
    const {searchQuery, eventYear} = useContext(SpeakerFilterContext)

    if (requestStatus === REQUEST_STATUS.FAILURE) 
        return <div className="text-danger">Error:
            <b>Loading Speaker Data failed {error}</b>
        </div>

    if (requestStatus === REQUEST_STATUS.LOADING) 
        return <div>Loading...</div>

    return (
        <div className="container speaker-list">
            <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
            <div className="row">
                {speakerData
                    .filter(function (speaker) {
                        return (speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery))
                    })
                    .filter(function (speaker) {
                        return (speaker.sessions.find((session) => {
                            return session.eventYear === eventYear
                        }))
                    })
                    .map(function (speaker) {
                        return (<Speaker
                            key={speaker.id}
                            speaker={speaker}
                            updateRecord={updateRecord}
                            insertRecord={insertRecord}
                            deleteRecord={deleteRecord}
                            />)
                    })}

            </div>
        </div>
    )
}

export default SpeakersList