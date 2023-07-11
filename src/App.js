import List from './components/List';
import './App.css';

function App() {

    const tasks = [
        { description: 'Learn React', completed: true },
        { description: 'Learn JSX', completed: false },
        { description: 'Build a React App', completed: false }
    ];

    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={tasks}/>
        </div>
    );
}

export default App;
