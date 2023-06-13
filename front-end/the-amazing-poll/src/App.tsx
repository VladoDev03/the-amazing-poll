import './App.scss';
import Preview from './components/Preview/Preview';
import Navbar from './components/Navbar/Navbar';
import Choice from './components/Choice/Choice';

function App() {
    return (
        <div className="App">
            <Preview />
            <Navbar />
        </div>
    );
}

export default App;
