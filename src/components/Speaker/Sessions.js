import {useContext} from 'react'
import Session from './Session'
import {SpeakerFilterContext} from '../contexts/SpeakerFilterContext'

const Sessions = ({sessions}) => {
    const {eventYear} = useContext(SpeakerFilterContext)
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