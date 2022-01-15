import SpeakerDemographics from './SpeakerDemographics'
import SpeakerImage from './SpeakerImage'
import Sessions from './Sessions'
import { useContext } from 'react'
import {SpeakerFilterContext} from '../contexts/SpeakerFilterContext'

const Speaker = ({speaker, onFavoriteToggle}) => {
    const {showSessions} =useContext(SpeakerFilterContext)
    const {id, first, last, sessions} = speaker
    return (
        <div
            key={id}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} first={first} last={last}></SpeakerImage>
                <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle}/>
            </div>
            {showSessions === true
                ? <Sessions sessions={sessions}/>
                : null
}
        </div>
    )
}
export default Speaker