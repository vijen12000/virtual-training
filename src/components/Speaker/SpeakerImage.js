import {useContext} from 'react'
import {SpeakerContext} from '../contexts/SpeakerContext'
const SpeakerImage = () => {
    const {
        speaker: {
            id,
            first,
            last
        }
    } = useContext(SpeakerContext)
    return (
        <div
            className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                src={`images/speaker-${id}.jpg`}
                alt={`${first} ${last}`}
                className="contain-fit"
                width="300"/>
        </div>
    )
}
export default SpeakerImage
