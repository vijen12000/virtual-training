import Filter from './Filter';
import SpeakersList from './Speaker/SpeakersList';
import {SpeakerFilterProvider} from '../components/contexts/SpeakerFilterContext'

const Speakers = ({data}) => {
    return (
        <SpeakerFilterProvider initialShowSessions={false} initialEventYear={"2019"}>
            <Filter/>
            <SpeakersList data={data}/>
        </SpeakerFilterProvider>
    )
}

export default Speakers
