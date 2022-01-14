import React from 'react'

const SpeakerFavorite = ({favorite, onFavoriteToggle}) => {
    function doneCallback(params) {
        console.log('In parent :done callback')
    }
    return (
        <div className='action padB1'>
            <span onClick={function (params) {
                return onFavoriteToggle(doneCallback)
            }}>
                <i
                    className={favorite === true
                    ? "fa fa-star orange"
                    : "fa fa-star-o ornage"}></i>{" "}
                Favorite{" "}
            </span>
        </div>
    )
}

export default SpeakerFavorite
