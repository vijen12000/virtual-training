import {useContext} from 'react'
import Session from './Session'
import {SpeakerFilterContext} from '../contexts/SpeakerFilterContext'
import {SpeakerContext} from '../contexts/SpeakerContext'

const Sessions = () => {
    const {speaker} = useContext(SpeakerContext)
    const {eventYear} = useContext(SpeakerFilterContext)
    const sessions=speaker.sessions
    return (
        <div className="sessionBox card h-250">
            {sessions
                .filter(function (session) {
                    return session.eventYear === eventYear
                })
                .map(function (session) {
                    return (
                        <div className="session w-100">
                            <Session {...session}></Session>
                        </div>
                    )
                })}
        </div>
    )
}
export default Sessions