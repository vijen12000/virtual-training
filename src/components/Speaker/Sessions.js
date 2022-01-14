import Session from './Session'
const Sessions = ({sessions}) => {
    return (
        <div className="sessionBox card h-250">
            <Session title={sessions[0].title} room={sessions[0].room.name}></Session>
        </div>
    )
} 
export default Sessions