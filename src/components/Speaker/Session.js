const Session = ({title, room}) => {
    return (
        <div className="session w-100">
            {title}
            <strong>Room: {room}
            </strong>
        </div>
    )
} 
export default Session
