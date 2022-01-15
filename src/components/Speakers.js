import Filter from './Filter';
import SpeakersList from './Speaker/SpeakersList';
import {SpeakerFilterProvider} from '../components/contexts/SpeakerFilterContext'

const Speakers = ({data}) => {
    return (
        <SpeakerFilterProvider initialShowSessions={false}>
            <Filter/>
            <SpeakersList data={data}/>
        </SpeakerFilterProvider>
    )
}

export default Speakers
