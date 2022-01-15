import './App.css';
import Speakers from './components/Speakers';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => {
    return (
        <Layout initialTheme="light">
            <>
                <Header/>
                <Speakers/>
            </>
        </Layout>
    )
}

export default App
