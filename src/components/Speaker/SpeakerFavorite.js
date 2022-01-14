import React,{useState} from 'react'

const SpeakerFavorite = ({favorite, onFavoriteToggle}) => {
    const [inTransition, setInTransition] = useState(false)
    function doneCallback(params) {
        setInTransition(false)
    }
    return (
        <div className='action padB1'>
            <span onClick={function (params) {
                setInTransition(true)
                return onFavoriteToggle(doneCallback)
            }}>
                <i
                    className={favorite === true
                    ? "fa fa-star orange"
                    : "fa fa-star-o ornage"}></i>{" "}
                Favorite{" "}
                {inTransition?
                    <span className="fa fa-circle-notch fa-spin"></span>    
                    :null
                }
            </span>
        </div>
    )
}

export default SpeakerFavorite
