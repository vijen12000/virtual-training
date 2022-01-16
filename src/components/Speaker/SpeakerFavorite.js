import React, {useState, useContext} from 'react'
import {SpeakerContext} from '../contexts/SpeakerContext'
const SpeakerFavorite = () => {
    const {speaker, updateRecord} = useContext(SpeakerContext)
    const [inTransition,
        setInTransition] = useState(false)

    function doneCallback() {
        setInTransition(false)
    }
    return (
        <div className='action padB1'>
            <span
                onClick={function () {
                setInTransition(true);
                updateRecord({
                    ...speaker,
                    favorite: !speaker.favorite
                }, doneCallback)
            }}>
                <i
                    className={speaker.favorite === true
                    ? "fa fa-star orange"
                    : "fa fa-star-o ornage"}></i>{" "}
                Favorite{" "} {inTransition
                    ? <span className="fa fa-circle-notch fa-spin"></span>
                    : null
}
            </span>
        </div>
    )
}

export default SpeakerFavorite
